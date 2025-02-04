document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    form.addEventListener("submit", checkUsr);
});

const usr=[{email:"roberto@gmail.com",pass:"1357"}]

function checkUsr(event) {
    event.preventDefault();
    console.log(event.target.emailIn.value);
    LogUsr=event.target.emailIn.value.toLowerCase();
    pass=event.target.passIn.value;
    tmpPass=usr[0].pass;
    tmpUsr=usr[0].email;

    if(LogUsr===tmpUsr&&pass===tmpPass){
        console.log("si");
        window.location.href="bienvenido.html";
    }
}