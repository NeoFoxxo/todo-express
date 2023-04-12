function editList(itemID) {

    // split itemID into an array to get the id and text
    const array = itemID.split(",");

    // send prompt to the user with the name of the item
    let newText = prompt(`Edit item${array[1]}`);
    if (newText != null) {

        const data = {
            item_id: array[0],
            item_text: newText
          };
      
          // make the post request to the items/edit endpoint
          return fetch("/items/edit", {
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
}