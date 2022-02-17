import React from 'react'

const GetGeo = () => {
const [lat, setLat] = React.useState('38.7166700')
const [lon, setLon] = React.useState('-9.1333300')


React.useEffect(() => {
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(({coords}) => {
        console.log(coords)
        setLat(coords.latitude)
        setLon(coords.longitude)

    })
}
}, [])

  return {lon, lat}
}

export default GetGeo