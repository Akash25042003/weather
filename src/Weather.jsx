import search from './assets/search.jpg'
import hum from './assets/humidity.jpg'
import win from './assets/windspeed.jpg'

const Weather = ({temp,city,country,lat,lon,humidity,windspeed,name,setname}) => {


  let handlechange=(e)=>{
    setname(e.target.value)
  }
  let handlereset=()=>{
    setname("")
  }

  return (
    <div className='search'>
      <div>
        <div className='top'>
        <input type="text" name="" id=""  className='top_input' autoFocus placeholder='cityname' onChange={handlechange} value={name}  />
        <img src={search} alt="img" className='top_img'/>
        <button className='reset' onClick={handlereset}>clear</button>
        </div>
        <div className='secondary'>
          <div className="location">
            <div className="city"><span className='name'>city :</span> {city}</div>
            <div className="country"><span className='name'>country :</span> {country}</div>
          </div>
          <div className="humi">
            <div className="humidity">
              <div className="humidity_1">{humidity}</div>
              <img src={hum} alt="image" className='humiimg' />
              <div className="humidity_2">humidity</div>
            </div>
            <div className="windspeed">
              <div className="windspeed_1">{windspeed}</div>
              <img src={win} alt="image" className='windimg'/>
              <div className="windspeed_2">windspeed</div>

            </div>
          </div>
        </div>
        </div>
        <div className='sec'>
          <div className='sec_container'>
          <div className="temp">
          <div className="temp_1">{temp}<span className='cel'>°C</span></div>
          <div className="temp_2">temperature</div>
        </div>
        <div className="dir">
          <div className="lon">
            <div className="lon_1">{lon}</div>  
            <div className="lon_2">longitude</div>
          </div>
          <div className="lat">
            <div className="lat_1">{lat}</div>
            <div className="lat_2">latittude</div>
          </div>
        </div>
          </div>
        
        </div>
        </div>
  )
}

export default Weather