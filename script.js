function handleSubmit(){
    const xhttp = new XMLHttpRequest();
    const data = {
        "username": document.getElementById("username").value,
        "password": document.getElementById("password").value
    }
    xhttp.onload = function(){
        console.log(this.reponseText)
    }
    
    xhttp.open("POST", "https://cors-anywhere.herokuapp.com/http://careerdev-teaching-lujason2015.c9users.io/api", true)
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(data));
    
}

// console.log("this script works");

// function myApp(){
//   const button = document.getElementById("button");
//   button.addEventListener("click", logButtonClick); 
// } 
// //no () in log button click because its calling the function not running it automatically



// function logButtonClick(){
//     console.log("this button is clicked");
// }
