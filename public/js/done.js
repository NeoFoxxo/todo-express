// run when the page is started
function start(listId) {

    // split listId into an array to get the id and text
    const array = listId.split(",");


    // get the checkbox that was clicked
    const current = document.getElementById(array[0]);

    const checkbox = document.getElementById(`check ${array[0]}`);

    // if the database says it is completed give it strike through text
    if (array[1] === " 1") {
        current.classList.add("text-decoration-line-through");
        checkbox.checked = true;
    }
}

// run when the checkbox is clicked
function done(listId) {

    // split listId into an array to get the id and text
    const array = listId.split(",");

    // get the checkbox that was clicked
    const current = document.getElementById(array[0]);

    console.log("ONCLICK EXECUTED");

    // if it already contains strikethrough text remove it and set it as incomplete in the database
    if (array[1] === " 1") {
        current.classList.remove("text-decoration-line-through");

        const data = {
            is_finished: "0",
            item_id: array[0]
        };

        // make the post request to the items/finished endpoint
        return fetch("/items/finished", {
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
    } else {

        // else add the line and say that it is completed to the database
        current.classList.add("text-decoration-line-through");

        const data = {
            is_finished: "1",
            item_id: array[0]
        };

        // make the post request to the items/finished endpoint
        return fetch("/items/finished", {
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
