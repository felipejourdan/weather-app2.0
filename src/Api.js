export const API_URL = 'https://api.openweathermap.org'
export const API_KEY = 'f2b69e4cc538ac39dfd389fc45b229f5'


export function getCurrentWheather(lat, lon) {
    return { url: `${API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
}
}
export function getGeo(lat, lon) {
    return { url: `${API_URL}/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}`
}
}

export function searchWeather(city) {
    return {url: `${API_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}`}
}