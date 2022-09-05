import React, {useState, useEffect} from 'react'
import WeatherForm from './WeatherForm'
import WeatherMainInfo from './WeatherMainInfo'

import styles from './WeatherApp.module.css'
import Loadin from './Loadin'

const WeatherApp = () => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        loadInfo()
    }, [])

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? ''}`
    }, [weather])

    const loadInfo = async (city = 'london') => {
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)
            const json = await request.json()

            setTimeout(() =>{
                setWeather(json)
            }, 2000)

        } catch (error) {
            console.error(error)
        }
    }

    const handleChangeCity = city =>{
        setWeather(null)
        loadInfo(city)
    }

  return (
    <div className={styles.weatherContainer}>
        <WeatherForm onChangeCity={handleChangeCity}/>
        {weather ? <WeatherMainInfo weather={weather}/> : <Loadin />}
    </div>
  )
}

export default WeatherApp