// fetch wether data in API

const apiKey = "9093e8e77912426fb0c164841251110";

// city.value

let city = document.getElementById("city");

// https://api.weatherapi.com/v1/current.json?key=9093e8e77912426fb0c164841251110&q=nagpur&aqi=yes

function fetchWetherReport() {
    
    // console.log(city.value)

    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.value}&aqi=yes`)
    .then((res)=>{
        return res.json();
    })
    .then((response)=>{
        let result = response;
        load(result)
    })
    .catch((err)=>{
        console.log(err)
    })
    
}

function load(res) {
    document.getElementById("load").innerHTML = `
                                                  <div class="container">
                                                    <div class="inside-container">
                                            
                                                        <div class="city">${res.location.name}</div>
                                                        <div class="temp">Temperature ${res.current.temp_c}<sup>0</sup></div>
                                                        <!--<div class="min-temp">Min-Temp</div>
                                                         <div class="max-temp">Max-Temp</div> -->
                                                        <div class="humidity">Humidity  ${res.current.humidity}%</div>
                                                        <div class="pressure">Pressure</div>
                                                        <div class="wind-speed">Wind-Speed ${res.current.wind_kph}kmh</div>
                                                        <div class="state">${res.location.region}</div>
                                                        <div class="country">${res.location.country}</div>  
                                                    </div>    
                                                </div>      
    
                                    `
}
