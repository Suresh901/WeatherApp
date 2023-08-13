
import './App.css';
import icon from './icon.png'
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [input, setInput] = useState('')
  const [data, setData]= useState({})
   

    const getWeatherDetail = (cityName) => {
      const apiUrl = `http://api.weatherapi.com/v1/current.json?key=27da3d13168b49f48aa135723230208&q=${cityName}&aqi=no`;
      axios.get(apiUrl).then((res)=>{
        
        setData(res.data)
      }).catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{ 
    getWeatherDetail("banepa");
  },[])

  const clickHandler = () => {
    getWeatherDetail(input)
    
  }

  return (
    <div className="weather">
      <h1>Weather App</h1>
      <form >
        <input className='textbox'  type="text" placeholder='Enter the city' 
        onChange={(e)=>{setInput(e.target.value)}}
        value={input}/>
      <button className='btn' type="button" onClick= {clickHandler} >
        <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <div className='result'>
              <img  className='img' src ={icon} alt='icon.png'/>
              <h5><i className="fa-solid fa-location-dot"></i>  Location: {data?.location?.name}</h5>
              <h5><i className="fa-solid fa-temperature-high"></i>  Temperature: {data?.current?.temp_c}°C</h5>
              <h5><i className="fa-solid fa-cloud"></i> Cloud: {data?.current?.cloud}%</h5>
          </div>
          </form>
      

    </div>
  );
}

export default App;
