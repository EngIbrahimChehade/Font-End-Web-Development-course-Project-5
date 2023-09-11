function handleSubmit(event) {
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
    formdata.append("key", process.env.API_KEY);
    formdata.append("txt", "YOUR TEXT HERE");
    formdata.append("model", formText);  // like IAB_2.0_en
    
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    
    const response = fetch("https://api.meaningcloud.com/deepcategorization-1.0", requestOptions)
      .then(response => ({
        status: response.status, 
        body: response.json()
      }))
      .then(({ status, body }) => document.getElementById('results').innerHTML = "status: "+ status + "body: "+ body) 
      .catch(error => console.log('error', error));


}

export { handleSubmit }
