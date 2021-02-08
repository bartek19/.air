var objPeople = [
    {
        email: "example@gmail.com",
        password: "password"
    },
]

function getInfo(){  
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    for(var i=0; i < objPeople.length; i++) {
        if (email == objPeople[i].email
            && password == objPeople[i].password){
                alert("Witaj! Jesteś zalogowany!");
                console.log("Witaj! Jesteś zalogowany!");
                window.location.href = "logged_in.html";
                return;
            }
    }

    alert("Niepławidłowy uzytkownik lub hasło. Spróbuj email: example@gmail.com oraz hasło: password");
    console.log("Niepławidłowy uzytkownik lub hasło");
}

