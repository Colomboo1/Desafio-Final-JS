const appid = "5a43c85e5a9d4cc54404c82f4694113a";
const lon = "-64.038779"
const lat = "-31.378260"
const exclude= "daily,minutely,hourly,alert"
const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${appid}&units=metric&lang=es`

async function getweather(){
    
    console.log("entra en getweather");
    try{
        const res = await fetch(url)
        const data = await res.json();
        const weather = await data.current.weather;
        const icon = await `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
            weather[0]["icon"]
        }.svg`;
        const humidity = await data.current.humidity;
        const temp = await data.current.temp;

        let weatherContainer = document.getElementById("weather");
        weatherContainer.innerHTML =`
        <p>Cordoba <span>${temp}Cº ${humidity}%</span></p>
        <img src="${icon}" alt="${weather[0]["description"]}">
        <span>${weather[0]["description"]}</span>
        `
        console.log("descarga exitosa", weather[0]["description"], humidity, temp);

    }catch(err){
        console.log("error en el request")  

    }
    
}

