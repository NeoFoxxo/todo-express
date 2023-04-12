function addList() {

    // get the value of the text box
    let text_val = document.getElementById("inputText").value;
    
    const data = {
      item_text: text_val
    };

    // make the post request to the items endpoint
    return fetch("/items", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      // convert the data to json
      body: JSON.stringify(data)
    })
    
    .then(response => response.json())

    .then(window.location.reload())
    // catch errors
    .catch(error => {
      console.log(error);
    });
}