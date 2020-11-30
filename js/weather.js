function gettingJSON(){
    //Display the forecast
    // Your code here.
    document.getElementById("forecast").style.display = "block";

    //Set default location if one isn't provided
    let location;

    // Your code here.
    if (document.getElementById("location").value == ""){
        location = "Ann Arbor";
    } else {
        location = document.getElementById("location").value;
    }

    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format;

    // Your code here.
    if (document.getElementById("fahrenheit").checked == true) {
        format = "fahrenheit";
    } else if (document.getElementById("celcius").checked == true) {
        format = "celcius";
    } else {
        format = "fahrenheit";
    }

    console.log("Format is " + format);

    //set the query  
    let query;
    // Your code here.  
    if (format == "fahrenheit") {
        query = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=a9e9f59410bcb7ca55a4e05350863eec&units=imperial';
    } else {
        query = 'https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=a9e9f59410bcb7ca55a4e05350863eec&units=metric';
    }
    
    console.log("Query is :" + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.

    let loc;
    let temp;
    let tempImg;
    // Your code here.


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        // Your code here.
        console.log(JSON.stringify(json));
        document.getElementById("loc").innerHTML = json.name;

        if (format == "fahrenheit") {
            document.getElementById("temp").innerHTML = json.main.temp + " with " + json.weather[0].description;
        } else {
            document.getElementById("temp").innerHTML = json.main.temp + " with " + json.weather[0].description;
        }
        
        document.getElementById("tempImg").src = "http://openweathermap.org/img/wn/"+json.weather[0].icon+".png";
    
    });
}



