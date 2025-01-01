const city = document.getElementById("city");
const searchBtn = document.getElementById("search");
const cityTitle = document.getElementById("respCity");
const icon = document.getElementById("icon");
const timeDate = document.getElementById("timeDate");
const weather = document.getElementById("weather");
const Temprature = document.getElementById("Temprature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const windDegree = document.getElementById("windDegree");
const windDirection = document.getElementById("windDirection");

searchBtn.addEventListener("click", () => {
  // console.log(cityName);
  var cityName;
  if (city.value == "") {
    alert("Please enter city name.");
    return false;
  } else {
    cityName = city.value;
    city.value = "";
    console.log(cityName);
  }
  getCityWeather(cityName);
  async function getCityWeather(cityName) {
    try {
      const resp = await fetch(
        `https://api.weatherstack.com/current?access_key=ee4c71db3f42613346778081ee11b9c5&query=${cityName}`
      );
      const respData = await resp.json();
      console.log(respData);
      //here we check the user enter valid city name or not if not then response object containing error key
      if ("error" in respData) {//here check error is present on response object 
        alert("Please enter valid city name.");
      }
      cityTitle.innerHTML = respData.request.query;
      icon.setAttribute("src", respData.current.weather_icons[0]);
      timeDate.innerHTML = respData.location.localtime;
      weather.innerHTML = `Weather: ${respData.current.weather_descriptions[0]}`;
      Temprature.innerHTML = `Temprature: ${respData.current.temperature}°C`;
      humidity.innerHTML = `Humidity: ${respData.current.humidity}%`;
      windSpeed.innerHTML = `Wind Speed: ${respData.current.wind_speed}`;
      windDirection.innerHTML = `Wind Direction: ${respData.current.wind_dir}`;
      windDegree.innerHTML = `Wind Degree: ${respData.current.wind_degree}`;
    } catch {
      console.log("internal server error");
    }
  }
});

// getCityWeather();
// token1=ee4c71db3f42613346778081ee11b9c5
// token2=b3f8e08af22d4887c84c91e7a7a21232
