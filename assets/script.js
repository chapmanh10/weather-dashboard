var searchForm = document.getElementById("searchcity")

searchForm.onsubmit = function (event) {
    event.preventDefault()
    var city = event.target.elements.city.value
    getCurrentWeather(city)

}


var getCurrentWeather = function (city) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ca98fc0b9163dcb5cfa4afef21ee9283&units=imperial"
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    displayCityInfo(data)
                })
            } else {
                alert("Error: City not found!")
            }
        })
}

var displayCityInfo = function (weatherData) {
    var cityName = document.createElement("h2")
    cityName.textContent = weatherData.name
    
    var cityDataContainer = document.getElementById("cityweatherdata")
    cityDataContainer.innerHTML = ""
    cityDataContainer.appendChild(cityName)
    
    var cityDescription = document.createElement("div")
    cityDescription.textContent = weatherData.weather[0].description 
    cityDataContainer.appendChild(cityDescription)
    
    var cityTemp = document.createElement("div")
    cityTemp.textContent = "temp" + " " + weatherData.main.temp 
    cityTemp.classList.add("info")
    cityDataContainer.appendChild(cityTemp)
    
    var cityWind = document.createElement("div")
    cityWind.textContent = "wind" + " " + weatherData.wind.speed + " " + "mph"
    cityDataContainer.appendChild(cityWind)
    
    var cityHumidity = document.createElement("div")
    cityHumidity.textContent = "humidity" + " " + weatherData.main.humidity + " " + "%"
    cityDataContainer.appendChild(cityHumidity)
}