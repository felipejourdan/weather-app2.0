import React from 'react'
import { getCurrentWheather } from './Api'
import useFetch from './useFetch'

const GetGeoData = () => {
  const {data, request} = useFetch()
  const [lat, setLat] = React.useState('38.7071')
  const [lon, setLon] = React.useState('-9.1354938')
 

React.useEffect(() => {
  const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(({coords}) => {
      setLat(coords.latitude)
      setLon(coords.longitude)
  })
    const {url} = getCurrentWheather(lat, lon);
    await request(url);
  }
  fetchData()
  
}, [request, lat, lon])

if(data) {
return <div>
<h1>{data.name}</h1>
<p>max: {data.main.temp_max}</p>
<p>min: {data.main.temp_min}</p>
<p>weather: {data.weather[0].main} </p>
</div>
} else return null

}

export default GetGeoData