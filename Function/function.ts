

const register = document.getElementById("register") as HTMLButtonElement;
register.addEventListener("click", (e) => {
    e.preventDefault()
    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;

    const nameUser: string = name.value;
    const userEmail: string = email.value;
    const userPassword: string | number = password.value;
  
    if (!nameUser || !userEmail || !userPassword) {
        return console.log("PLEASE REQUIRED")
    }
  
    console.log(nameUser, userEmail, userPassword);
    
    name.value = "";
    email.value = "";
    password.value = ""; 
    
  
})