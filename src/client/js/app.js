const apiKeyWeatherbit = "399e6a3d28e34540b603fc88fe1dc77c";
const apiKeyGeonames = "399e6a3d28e34540b603fc88fe1dc77c";
const apiKeyPixabay = "39389270-d4f8b3ccba6b9cd3b9605ce10";

function app(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    if(
        formText == undefined ||
        formText == ''    
    ) {
        alert("the input field cannot be blank!");
        return;
    }

    Client.checkForName(formText)


    const formdata = new FormData();
    formdata.append("key", apiKeyWeatherbit);
    formdata.append("city", formText);
    
    let requestOptions = {
      method: 'GET',
      //body: formdata,
      //redirect: 'follow'
    };
    
    const response = fetch("http://www.geonames.org/search.html?q="+formText, requestOptions)
      .then(response => ({
        country: response.country, 
        longitude: response.longitude,
        latitude: response.latitude,
      }))
      .then(({ country, longitude, latitude }) => 
        document.getElementById('country').innerHTML = country, 
        document.getElementById('longitude').innerHTML = longitude, 
        document.getElementById('latitude').innerHTML = latitude,) 
      .catch(error => console.log('error', error));


      requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };

      const response1 = fetch("https://api.weatherbit.io/v2.0/current?city="+formText+"&key="+apiKeyWeatherbit, requestOptions)
      .then(response => ({
        temp: response.temp,
      }))
      .then(({ temp }) => 
        document.getElementById('temp').innerHTML = temp) 
      .catch(error => console.log('error', error));

      var URL = "https://pixabay.com/api/?key=" + apiKeyPixabay + "&q=" + encodeURIComponent('red roses');
      $.getJSON(URL, function (data) {
        if (parseInt(data.totalHits) > 0)
          $.each(data.hits, function (i, hit) { console.log(hit.pageURL); });
        else
          console.log('No hits');
      });
}

export { app }
