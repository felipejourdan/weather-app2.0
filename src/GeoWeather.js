import React from 'react';
import { getCurrentWheather } from './Api';
import SearchWeather from './SearchWeather';
import useFetch from './useFetch';
import {
  Title, Container, WeatherInfo, WeatherApp, TempInfo, LocaleInfo, Button, Img,
} from './styles';

function GeoWeather(props) {
  const { request } = useFetch();
  const [lat, setLat] = React.useState('38.7071');
  const [lon, setLon] = React.useState('-9.1354938');
  const [listWeather, setListWeather] = React.useState(() => props.listWeather);

  function handleClick(index) {
    listWeather.splice(index, 1);
    localStorage.setItem('weather', JSON.stringify(listWeather));
    window.location.reload();
  }

  React.useEffect(() => {
    if (localStorage.getItem('weather')) {
      setListWeather(JSON.parse(localStorage.getItem('weather')));
    } else {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          setLat(coords.latitude);
          setLon(coords.longitude);
        });
        const { url } = getCurrentWheather(lat, lon);
        const { json } = await request(url);
        setListWeather([json]);
        localStorage.setItem('weather', JSON.stringify([json]));
      };
      fetchData();
    }
  }, [request, lat, lon]);

  if (listWeather) {
    return (
      <Container>
        <SearchWeather setListWeather={setListWeather} />
        {listWeather.map((el, index) => (
          <WeatherApp key={el.id}>
            <LocaleInfo>
              <Title>{el.name}</Title>
              <Button type="button" onClick={() => handleClick(index)}>x</Button>
            </LocaleInfo>
            <WeatherInfo>
              <Img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} />
              <span>{el.weather[0].description}</span>
            </WeatherInfo>
            <TempInfo>
              <span>
                max:
                {el.main.temp_max}
                ºc
              </span>
              <span>
                min:
                {el.main.temp_min}
                ºc
              </span>
            </TempInfo>
          </WeatherApp>
        ))}
      </Container>
    );
  } return null;
}

export default GeoWeather;
