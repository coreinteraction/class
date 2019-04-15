//THESE ARE THE VARIABLES WE WILL USE
var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
var winddeg; //Wind direction, degrees (meteorological)
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var tempmin;
var tempmax;
var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)
var weatherdescription; //Weather condition within the group
var cloudiness; //Cloudiness, %


$(document).ready(function(){


    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=5128581&units=metric&APPID=65a84a167e92d119d99bf3f95cd5fd8a', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;
            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH

        $('p').append('windspeed: ' + windspeed);
        $('p').append('winddeg: ' + winddeg);
        $('p').append('temp: ' + temp);
        $('p').append('tempmin: ' + tempmin);
        $('p').append('tempmax: ' + tempmax);
        $('p').append('pressure: ' + pressure);
        $('p').append('humidity: ' + humidity);
        $('p').append('weathertext: ' + weathertext);
        $('p').append('weatherdescription: ' + weatherdescription);
        $('p').append('cloudiness: ' + cloudiness);

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   



        $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=658226&units=metric&APPID=65a84a167e92d119d99bf3f95cd5fd8a', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext2 = results.weather[0].main;
            weatherdescription2 = results.weather[0].description;
            windspeed2 = results.wind.speed;
            winddeg2 = results.wind.deg;
            tempmin2 = results.main.temp_min;
            tempmax2 = results.main.temp_max;
            temp2 = results.main.temp;
            pressure2 = results.main.pressure;
            humidity2 = results.main.humidity;
            cloudiness2 = results.clouds.all;
            myWeatherInterpretation2();

        }
    });
    

    function myWeatherInterpretation2(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH

        $('div').append('windspeed: ' + windspeed2);
  

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   



});