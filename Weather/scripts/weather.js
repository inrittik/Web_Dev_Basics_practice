const key = 'hk2EGuNFsoDGOtuXVPTz7wt3yB7kWpfK';

const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const parameters = `?apikey=${key}&q=${city}`;

    const cityResponse = await fetch(base + parameters);
    const cityData = await cityResponse.json();

    return (cityData[0]);
}


const getWeather = async (id) => {
    const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`
    const parameters = `?apikey=${key}`;

    const weatherResponse = await fetch(base + parameters);
    const weatherData = await weatherResponse.json();

    return weatherData;
}

// getWeather("328328");