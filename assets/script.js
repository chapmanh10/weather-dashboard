var searchForm = document.getElementById("searchcity")

searchForm.onsubmit = function (event) {
    event.preventDefault()
    var city = event.target.elements.city.value
    getCurrentWeather(city)
    

}

// Retrieve current weather for city selected
var getCurrentWeather = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ca98fc0b9163dcb5cfa4afef21ee9283&units=imperial"
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayCityInfo(data)
                    getFiveDayForecast(data)
                    displayFiveDayForecast(data)
                })
            } else {
                alert("Error: City not found!")
            }
        })
}

//Dynamically display city weather info retrieved 
var displayCityInfo = function (weatherData) {
    var cityName = document.createElement("h2")
    cityName.textContent = weatherData.name
    
    var cityDataContainer = document.getElementById("cityweatherdata")
    cityDataContainer.innerHTML = ""
    cityDataContainer.appendChild(cityName)

    var weatherImage = document.createElement("img")
    weatherImage.src = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"
    cityDataContainer.appendChild(weatherImage)
    
    var cityDescription = document.createElement("div")
    cityDescription.textContent = weatherData.weather[0].description 
    cityDataContainer.appendChild(cityDescription)
    
    var cityTemp = document.createElement("div")
    cityTemp.textContent = "temp:" + " " + weatherData.main.temp + " " + "°F"
    cityTemp.classList.add("info")
    cityDataContainer.appendChild(cityTemp)
    
    var cityWind = document.createElement("div")
    cityWind.textContent = "wind:" + " " + weatherData.wind.speed + " " + "mph"
    cityDataContainer.appendChild(cityWind)
    
    var cityHumidity = document.createElement("div")
    cityHumidity.textContent = "humidity:" + " " + weatherData.main.humidity + " " + "%"
    cityDataContainer.appendChild(cityHumidity)
}

// Retrieve 5 day forecast
var getFiveDayForecast = function(weatherData) {
    var latitude = weatherData.coord.lat
    var longitude = weatherData.coord.lon 
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&exclude=minutely,hourly,alerts&appid=ca98fc0b9163dcb5cfa4afef21ee9283&units=imperial"
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayFiveDayForecast(data)
                })
            }
        })
      
}

//Dispaly 5 day forecast
var displayFiveDayForecast = function(weatherData) {
    var forecastConatiner = document.getElementById("icons")
    forecastConatiner.innerHTML = ""
  
    var fiveDay = document.createElement("h3")
    fiveDay.textContent = "5 Day Forecast"
    forecastConatiner.appendChild(fiveDay)

    var dayBoxesHolder = document.createElement("div")
    dayBoxesHolder.classList.add("row", "justify-content-between")
    forecastConatiner.appendChild(dayBoxesHolder)

// day1
    var dayBox1 = document.createElement("div")
    dayBox1.classList.add("col-2","border","border-warning","forecast")
    dayBox1.textContent = "date"
    var weatherImage1 = document.createElement("img")
    weatherImage1.src = "http://openweathermap.org/img/wn/" + weatherData.daily[0].weather[0].icon + "@2x.png"
    dayBox1.appendChild(weatherImage1)
    var description1 = document.createElement("div")
    description1.textContent = weatherData.daily[0].weather[0].description
    dayBox1.appendChild(description1)
    var temp1 = document.createElement("div")
    temp1.textContent = "temp:" + " " + weatherData.daily[0].temp.day + " " + "°F"
    dayBox1.appendChild(temp1)
    var wind1 = document.createElement("div")
    wind1.textContent = "wind speed:" + " " + weatherData.daily[0].wind_speed + " " + "mph"
    dayBox1.appendChild(wind1)
    var humidity1 = document.createElement("div")
    humidity1.textContent = "humidity:" + " " + weatherData.daily[0].humidity + " " + "%"
    dayBox1.appendChild(humidity1)
    dayBoxesHolder.appendChild(dayBox1)

// day 2   
    var dayBox2 = document.createElement("div")
    dayBox2.classList.add("col-2","border","border-warning","forecast")
    dayBox2.textContent = "date"
    var weatherImage2 = document.createElement("img")
    weatherImage2.src = "http://openweathermap.org/img/wn/" + weatherData.daily[1].weather[0].icon + "@2x.png"
    dayBox2.appendChild(weatherImage2)
    var description2 = document.createElement("div")
    description2.textContent = weatherData.daily[1].weather[0].description
    dayBox2.appendChild(description2)
    var temp2 = document.createElement("div")
    temp2.textContent = "temp:" + " " + weatherData.daily[1].temp.day + " " + "°F"
    dayBox2.appendChild(temp2)
    var wind2 = document.createElement("div")
    wind2.textContent = "wind speed:" + " " + weatherData.daily[1].wind_speed + " " + "mph"
    dayBox2.appendChild(wind2)
    var humidity2 = document.createElement("div")
    humidity2.textContent = "humidity:" + " " + weatherData.daily[1].humidity + " " + "%"
    dayBox2.appendChild(humidity2)
    dayBoxesHolder.appendChild(dayBox2)
    
// day 3
    var dayBox3 = document.createElement("div")
    dayBox3.classList.add("col-2","border","border-warning","forecast")
    dayBox3.textContent = "date"
    var weatherImage3 = document.createElement("img")
    weatherImage3.src = "http://openweathermap.org/img/wn/" + weatherData.daily[2].weather[0].icon + "@2x.png"
    dayBox3.appendChild(weatherImage3)
    var description3 = document.createElement("div")
    description3.textContent = weatherData.daily[2].weather[0].description
    dayBox3.appendChild(description3)
    var temp3 = document.createElement("div")
    temp3.textContent = "temp:" + " " + weatherData.daily[2].temp.day + " " + "°F"
    dayBox3.appendChild(temp3)
    var wind3 = document.createElement("div")
    wind3.textContent = "wind speed:" + " " + weatherData.daily[2].wind_speed + " " + "mph"
    dayBox3.appendChild(wind3)
    var humidity3 = document.createElement("div")
    humidity3.textContent = "humidity:" + " " + weatherData.daily[2].humidity + " " + "%"
    dayBox3.appendChild(humidity3)
    dayBoxesHolder.appendChild(dayBox3)
    
// day 4
    var dayBox4 = document.createElement("div")
    dayBox4.classList.add("col-2","border","border-warning","forecast")
    dayBox4.textContent = "date"
    var weatherImage4 = document.createElement("img")
    weatherImage4.src = "http://openweathermap.org/img/wn/" + weatherData.daily[3].weather[0].icon + "@2x.png"
    dayBox4.appendChild(weatherImage4)
    var description4 = document.createElement("div")
    description4.textContent = weatherData.daily[3].weather[0].description
    dayBox4.appendChild(description4)
    var temp4 = document.createElement("div")
    temp4.textContent = "temp:" + " " + weatherData.daily[3].temp.day + " " + "°F"
    dayBox4.appendChild(temp4)
    var wind4 = document.createElement("div")
    wind4.textContent = "wind speed:" + " " + weatherData.daily[3].wind_speed + " " + "mph"
    dayBox4.appendChild(wind4)
    var humidity4 = document.createElement("div")
    humidity4.textContent = "humidity:" + " " + weatherData.daily[3].humidity + " " + "%"
    dayBox4.appendChild(humidity4)
    dayBoxesHolder.appendChild(dayBox4)
    
// day 5 
    var dayBox5 = document.createElement("div")
    dayBox5.classList.add("col-2","border","border-warning","forecast")
    dayBox5.textContent = "date"
    var weatherImage5 = document.createElement("img")
    weatherImage5.src = "http://openweathermap.org/img/wn/" + weatherData.daily[4].weather[0].icon + "@2x.png"
    dayBox5.appendChild(weatherImage5)
    var description5 = document.createElement("div")
    description5.textContent = weatherData.daily[4].weather[0].description
    dayBox5.appendChild(description5)
    var temp5 = document.createElement("div")
    temp5.textContent = "temp:" + " " + weatherData.daily[4].temp.day + " " + "°F"
    dayBox5.appendChild(temp5)
    var wind5 = document.createElement("div")
    wind5.textContent = "wind speed:" + " " + weatherData.daily[4].wind_speed + " " + "mph"
    dayBox5.appendChild(wind5)
    var humidity5 = document.createElement("div")
    humidity5.textContent = "humidity:" + " " + weatherData.daily[4].humidity + " " + "%"
    dayBox5.appendChild(humidity5)
    dayBoxesHolder.appendChild(dayBox5)

}