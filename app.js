let input = document.querySelector("#input");
let btn = document.querySelector("#search");

async function getWeatherData(newCity) {
  let URL;
  if (isNaN(newCity)) {
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&appid=204274bb712cdf53a8dd9203401af102`;
    console.log("You Are Searching with City Name");
  } else {
    URL = `https://api.openweathermap.org/data/2.5/weather?zip=${newCity},&appid=204274bb712cdf53a8dd9203401af102`;
    console.log("You Are Searching with Zip Code");
  }

  try {
    let data = await fetch(URL);
    if (!data.ok) {
      throw new Error("there is problem in fetching");
    }

    let finalResponse = await data.json();
    localStorage.setItem(newCity,JSON.stringify(finalResponse));
    return finalResponse;
  } catch (err) {
    console.log(err);
    alert("Sorry This City is not Available ... !!!");
  }
  console.log(finalResponse);
}
let newCity = btn.addEventListener("click", () => {
  let city = input.value;

  main(city);
});
async function main(city) {
  try {
    let WeatherResponse = await getWeatherDatawithCache(city);
    let KelvintoCelcius = WeatherResponse.main.temp - 273.15;

    console.log(WeatherResponse);
    document.querySelector(".temp").innerText = KelvintoCelcius.toFixed(2);
    document.querySelector(".wind").innerText = WeatherResponse.wind.speed;
    document.querySelector(".Humidity").innerText =
      WeatherResponse.main.humidity;
    document.querySelector(".cloudy").innerText =
      WeatherResponse.weather[0].main;
    document.querySelector(".clouds-description").innerText =
      WeatherResponse.weather[0].description;
    console.log(WeatherResponse.weather[0].main);
    document.querySelector("#city").innerText = WeatherResponse.name;
    // console.log("Temprature:",WeatherResponse.main.temp);
    //    console.log("Weather Condition:",WeatherResponse.weather[0].main);
    //    console.log("Humidity:",WeatherResponse.main.humidity);
    //    console.log("Wind Speed:",WeatherResponse.wind.speed);
    console.log("Icon:", WeatherResponse.weather[0].icon);
    console.log(WeatherResponse.weather[0].id);
    switch (WeatherResponse.weather[0].id) {
      case 804:
        console.log("This id is working");
        document.querySelector(".clouds").src =
          "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
        break;
      case 802:
        console.log("This id is working");
        document.querySelector(".clouds").src =
          "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";
        break;
      case 801:
        console.log("This id is working");
        document.querySelector(".clouds").src =
          "https://cdn-icons-png.flaticon.com/512/1163/1163661.png";

        break;
      case 721:
        console.log("This id is working");
        document.querySelector("clouds").src =
          "https://cdn-icons-png.flaticon.com/512/1779/1779807.png";

        break;
      case 800:
        console.log("This id is working");
        document.querySelector(".clouds").src =
          "https://cdn-icons-png.flaticon.com/512/6974/6974833.png";

        break;
      case 803:
        console.log("This id is working");
        document.querySelector(".clouds").src =
          "https://cdn-icons-png.flaticon.com/512/414/414927.png";

        break;
      case 500:
        console.log("This id is working");
        document.querySelector(".clouds").src =
          "https://cdn-icons-png.flaticon.com/512/1959/1959342.png";

        break;
      case 701:
        console.log("This id is working");
        document.querySelector(".clouds").src =
          "https://cdn-icons-png.flaticon.com/512/2930/2930095.png";

        break;
      case 300:
        console.log("This id is working");
        document.querySelector(".clouds").src =
          "https://cdn-icons-png.flaticon.com/512/2524/2524402.png";

        break;
      case 501:
        console.log("This id is working");
        document.querySelector(".clouds").src =
          "https://cdn-icons-png.flaticon.com/512/2469/2469994.png";

        break;

      default:
        console.log("id is not matching !!!");
        break;
    }
  } catch (error) {
    console.error("error fetching weather", error);
  }
}

async function getWeatherDatawithCache(newCity){
  let cache=localStorage.getItem(newCity);
  if(cache){
    console.log("using cache Data ! ! !");
    return JSON.parse(cache);
  }
  return await getWeatherData(newCity);

}
