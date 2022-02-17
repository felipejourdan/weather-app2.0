import React from 'react'
import { getCurrentWheather } from './Api';
import GetGeo from './GetGeo';
import useFetch from './useFetch'

const LocalWeather = () => {
const {data, request} = useFetch();
const {lon, lat} = GetGeo();

React.useEffect(() => {
    const {url} = getCurrentWheather(lat, lon)
    request(url)
}, [lat, lon])

console.log(lon, lat)




  return (
    <div>localWeather</div>
  )
}

export default LocalWeather