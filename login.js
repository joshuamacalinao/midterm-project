function login(){

    let userID = "ucu" ;
    let userPassword = "admin";

    formUsername = document.getElementById("formUsername").value;
    formPassword = document.getElementById("formPassword").value;

    if(userID == formUsername && userPassword == formPassword)
    {
        alert("Successfully Logged in");
    }
    else if (userID == formUsername && userPassword != formPassword) 
    {
        alert("Wrong Password");
    }
    else if (userID != formUsername && userPassword == formPassword)
    {
        alert("Wrong Username")
    }
    else {
        alert("Please enter valid ID and Password");
    }
}
