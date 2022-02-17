import React from 'react'
import { getCurrentWheather } from './Api'
import SearchWeather from './SearchWeather'
import useFetch from './useFetch'


const GeoWeather = (props) => {
    const {data, request} = useFetch()
    const [lat, setLat] = React.useState('38.7071')
    const [lon, setLon] = React.useState('-9.1354938')
    const [listWeather, setListWeather] = React.useState(() => props.listWeather)
   
  
  React.useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(({coords}) => {
        setLat(coords.latitude)
        setLon(coords.longitude)
    })
      const {url} = getCurrentWheather(lat, lon);
      const {json} = await request(url);
      setListWeather([json])
    }
    fetchData()
    
}, [request, lat, lon])

console.log(listWeather)

  if(listWeather) {
return (
<div>
    {listWeather.map((e) => (
        <div>
        <h1>{e.name}</h1>
        <p>max:{e.main.temp_max}</p>
        <p>min:{e.main.temp_min}</p>
        </div>
        ))}
</div>
)
  } else return null
}

export default GeoWeather