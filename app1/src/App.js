//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {

const[querry,setquerry]=useState('')
const[weather,setweather]=useState({})

const search=(e)=>{
  if(e.key==="Enter")
{
  fetch(`${api.base}weather?q=${querry}&units=metric&APPID=${api.key}`)
  .then(res=>res.json())
  .then(result=>{
    setweather(result)
    setquerry('')
    console.log(weather)
  })
  
  }
}


const api={
  key:"8202cc500adff2e5a20a8e5ba923a181",
  base:"http://api.openweathermap.org/data/2.5/"
}


const datebuilder=(d)=>{
  let months=["January","Rebruary","March","April","May","June","july","August","Septmaber","October","November","December"];
  let Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let day=Days[d.getDay()];
  let date=d.getDate();
  let month=months[d.getMonth()];
  let year=d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}

//( weather.main.temp> 30)
//{(typeof weather.main!="undefined")? (( weather.weather[0].main==="Haze") ? "app-warm":"app"):"app"}

  return (

    
    <div className={(typeof weather.main!="undefined")? ( ( weather.main.temp> 30) ? "app-warm":"app"):"app"}>
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search.."
          onChange={(e)=>setquerry(e.target.value)}
          value={querry} 
          onKeyDown={search}/>

        </div>

  {(typeof weather.main != "undefined" ) ? (
    <div>
  <div className="location-box">
    <div className="location">{weather.name},{weather.sys.country}</div>
    <div className="date"> {datebuilder( new Date())}</div>
       </div>

<div className="weather-box">
  <div className="temp">
   {Math.round(weather.main.temp)}°C
  </div>
  <div className="weather"> {weather.weather[0].main}</div>
</div>
</div>

  ):('')}



      </main>
    </div>
  );
}

export default App;
