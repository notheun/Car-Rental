
function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        window.open("Car-Rental/links/cars.html");
    }
    else {
        document.getElementById("login-error").style.visibility = "visible";
        document.getElementById("username").style.borderColor = "red";
        document.getElementById("password").style.borderColor = "red";
    }
}


function launchCheckout() {
    window.open("Car-Rental/links/checkout.html", "_self");
}

function confirmBooking() {
    alert("Your booking has been confirmed!");
    window.open("Car-Rental/index.html");
}
