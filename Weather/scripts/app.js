const cityForm = document.querySelector('form');
const details = document.querySelector('.details');
const card = document.querySelector('.card');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateCity = async (cityName) => {
    // updating the city value and getting the weather details for the city key
    const cityDetails = await getCity(cityName);
    const weatherDetails = await getWeather(cityDetails.Key);

    return {cityDetails, weatherDetails}
}

const updateUI = (data) => {
    //updating the UI
    console.log(data);
    const cityDets = data.cityDetails;
    const weather = data.weatherDetails;

    // updating the details template
    details.innerHTML = `
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather[0].WeatherText}</div>
        <div class="my-4 display-4">
            <span>${weather[0].Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `
    // updating the time img src(day/night)
    let timeSrc = null;
    timeSrc = (weather[0].IsDayTime)? 'img/day.svg':'img/night.svg'
    time.setAttribute('src', timeSrc);

    // updating the weather icon img src
    const iconSrc = `img/icons/${weather[0].WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    // making the card visible
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }  
}



cityForm.addEventListener('submit', e=> {
    e.preventDefault();
    // taking input of city name
    const city = cityForm.city.value.trim();
    cityForm.reset();
 
    localStorage.setItem('city', city);
    // calling updateUI with city name
    updateCity(city)
      .then(data => {
          updateUI(data);
      })
      .catch(err => {
          console.log(err);
      });
})

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
      .then(data => {
          updateUI(data);
      })
      .catch(err => {
          console.log(err);
      })
}