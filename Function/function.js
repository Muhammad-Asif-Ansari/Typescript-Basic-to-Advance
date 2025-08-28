var register = document.getElementById("register");
register.addEventListener("click", function (e) {
    e.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var nameUser = name.value;
    var userEmail = email.value;
    var userPassword = password.value;
    if (!nameUser || !userEmail || !userPassword) {
        return console.log("PLEASE REQUIRED");
    }
    console.log(nameUser, userEmail, userPassword);
    name.value = "";
    email.value = "";
    password.value = "";
});
