function deleteList(itemID) {

    // split itemID into an array to get the id and text
    const array = itemID.split(",");

    // make a confirm box with the text of the item to warn user
    let deleteComfirm = confirm(`Are you sure you want to delete "${array[1]}"`);  
    
    // if they clicked continue send the post request to delete it
    if (deleteComfirm) {
        const data = {
            item_id: array[0]
          };
      
          // make the post request to the items/delete endpoint
          return fetch("/items/delete", {
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
    else{
        console.log("not deleted");
    }
};