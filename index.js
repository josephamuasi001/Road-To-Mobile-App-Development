let username;
let message;


document.getElementById("mySubmit").onclick= function() {
    message = document.getElementById("myPa").value;
    username = document.getElementById("myText").value;
    document.getElementById("myh1").textContent = `Hello ${username}`
    document.getElementById("myp").textContent = `Hey bro ${message}`
}