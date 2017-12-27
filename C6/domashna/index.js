var btn = document.querySelector('.btn-check');

btn.addEventListener('click', function(){

var city = document.querySelector(".city-input").value;

	if(city.length == 0) {
      alert("Please insert city name");
    
    }

    else {
        var apiKey = "8d871a0fbb7511a15a3d5f1fa026ec72";
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + apiKey + "&units=metric";
        fetch(url)

	        .then(function(response){
	              return response.json();    
	        })

        	.then(function(data){

		document.getElementById("temp").innerHTML = data.main.temp + ' °C';
		document.getElementById("status").innerHTML = data.weather[0].main;
		document.getElementById("icon").src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
		document.getElementById("icon").style.display = "inline-block";
		document.getElementById("data-city").innerHTML = city;

			})

		} 

});