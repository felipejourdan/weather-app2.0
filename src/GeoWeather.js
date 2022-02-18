import React from 'react'
import { getCurrentWheather } from './Api'
import SearchWeather from './SearchWeather'
import useFetch from './useFetch'

const GeoWeather = (props) => {
    const {request} = useFetch()
    const [lat, setLat] = React.useState('38.7071')
    const [lon, setLon] = React.useState('-9.1354938')
    const [listWeather, setListWeather] = React.useState(() => props.listWeather)

function handleClick(index) {
  listWeather.splice(index, 1)
  localStorage.setItem('weather', JSON.stringify(listWeather))
  window.location.reload()
}


  React.useEffect(() => {
if(localStorage.getItem('weather')){
    setListWeather(JSON.parse(localStorage.getItem('weather')))
} else {

    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(({coords}) => {
        setLat(coords.latitude)
        setLon(coords.longitude)
    })
      const {url} = getCurrentWheather(lat, lon);
      const {json} = await request(url);
      setListWeather([json])
    localStorage.setItem('weather', JSON.stringify([json]))

    }
    fetchData()
}
}, [request, lat, lon])


if(listWeather) {
return (
  <div>
    <SearchWeather setListWeather={setListWeather} />
<div>
    {listWeather.map((el, index) => (
        <div key={index}>
        <h1>{el.name}</h1>
        <p>max:{el.main.temp_max}ºc</p>
        <p>min:{el.main.temp_min}ºc</p>
        <button onClick={() => handleClick(index)}>Delete</button>
        </div>
        ))}
</div>
</div>
)
  } else return null
}

export default GeoWeather