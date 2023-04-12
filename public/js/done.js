function done(listId){ 

    // get the checkbox that was clicked
    let current = document.getElementById(listId);

    let classExit = current.classList.contains("text-decoration-line-through");

    // if it already contains strikethrough text remove it
    if (classExit == true) {
        current.classList.remove("text-decoration-line-through");
    }
    
    else{
        current.classList.add("text-decoration-line-through");
    }
    
}