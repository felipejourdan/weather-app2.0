import React from 'react'
import { searchWeather } from './Api';
import useFetch from './useFetch';

const SearchWeather = ({setListWeather}) => {
    const {request} = useFetch()
    const [search, setSearch] = React.useState('')
    

async function handleSubmit(event) {
    event.preventDefault();
    const {url} = searchWeather(search)
    const {response, json} = await request(url)
    if(response.ok) {
        setSearch('')
        setListWeather((listWeather) => {
            localStorage.setItem('weather', JSON.stringify([...listWeather, json]))
            return [...listWeather, json]
        })
    }
}

  return (
    <form onSubmit={handleSubmit}>
        <input id='search' name='search' placeholder='Digita uma cidade aqui...' value={search}  onChange={({target}) => setSearch(target.value)} />
        <button>Adicionar</button>
    </form>
  )
}

export default SearchWeather