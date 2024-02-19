import { useEffect, useState } from 'react'
import Weather from './Weather'
import   './index.css'
function App() {
  const[blog,setblog]=useState("")
  const [name, setname] = useState("")
  const[temp,settemp]=useState(0)
  const[city,setcity]=useState("")
  const[country,setcountry]=useState("")
  const[lat,setlat]=useState(0)
  const[lon,setlon]=useState(0)
  const[humidity,sethumidity]=useState(0)
  const[windspeed,setwindspeed]=useState(0)
  // const think=async()=>{
  //   let url=(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8c4c71ab973c0b2eefaa69f1b2431541&units=Metric`)
  //   try{
  //     let res=await fetch(url);
  //     let data=await res.json();
  //     settemp(data.main.temp)
  //     setlat(data.coord.lat)
  //     setlon(data.coord.lon)
  //     setwindspeed(data.wind.speed)
  //     sethumidity(data.main.humidity)
  //     setcity(data.name)
  //     setcountry(data.sys.country)


  //   }
  //   catch(error){
  //     console.log("akash",error.message)
  //   }
  // }
  useEffect(()=>{
    try{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=8c4c71ab973c0b2eefaa69f1b2431541&units=Metric`)
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        setblog(data)
      })
      settemp(blog.main.temp)
      setlat(blog.coord.lat)
      setlon(blog.coord.lon)
      setwindspeed(blog.wind.speed)
      sethumidity(blog.main.humidity)
      setcity(blog.name)
      setcountry(blog.sys.country)

    }
    catch(error){
      console.log("fail to fetch:",error.message)

    }
  },)


  return (
    <div>
      <Weather
      temp={temp}
      country={country}
      city={city}
      lat={lat}
      lon={lon}
      humidity={humidity}
      windspeed={windspeed}
      name={name}
      setname={setname}
      settemp={settemp}
      // think={think()}
      />
    </div>
  )
}

export default App
