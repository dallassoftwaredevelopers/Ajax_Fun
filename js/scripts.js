console.clear();
//creating the request to send the server
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  //4 means we recieved the response
  if (xhr.readyState === 4) {
    let data = JSON.parse(xhr.responseText);
    
    document.querySelector('#desc').innerHTML = data.weather[0].description;
    
    document.querySelector('#temp').innerHTML = data.main.temp;

    document.querySelector('#pres').innerHTML = data.main.pressure;

    document.getElementById('ajax').innerHTML = JSON.stringify(data, null, 4);
  }
};
xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=75093&units=imperial&appid={API_KEY}');
xhr.send();

console.log(xhr);