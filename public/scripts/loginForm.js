window.addEventListener("load", function () {
    if(document.getElementById("login")){
    document.getElementById("login").addEventListener("input", (e) => {
        if (e.target.value.length < 3 || e.target.value.length > 20) {
            document.querySelector("#loginp").style.display = "block";
            document.getElementById("login").classList.add("border-danger");
            document.getElementById("login").classList.add("is-invalid");
        } else {
            document.querySelector("#loginp").style.display = "none";
            document.getElementById("login").classList.remove("border-danger");
            document.getElementById("login").classList.remove("is-invalid");
        }
    });}
});
