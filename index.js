console.log('hello Jee Madhav');

const API_KEY = "9408cd516741affce9950329bc42f3fd";

function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} C`
    
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails()
{
    try{
        const city = "rajpura";
    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
        const data = await response.json();
        console.log("Weather data:-> " , data); 
    
        renderWeatherImf(data);
    }
    catch(e){

    }
}

async function getCustomWeatherDetails(){
    let lat = 15.6333;
    let lon = 18.333;
}