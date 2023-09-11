function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "IAB_2.0_en",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(
        //names.includes(inputText) 
        inputText == undefined ||
        inputText == ''
    
    ) {
        alert("the input field cannot be blank!");
        return;
    }
}

export { checkForName }
