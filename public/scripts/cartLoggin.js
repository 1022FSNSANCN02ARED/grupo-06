
document.addEventListener("DOMContentLoaded",()=>{

    if(localStorage.length > 0){
        const cartLged = document.getElementById("cartLogged");

        const cartNoLog = document.getElementById("cartNoLog");

        console.log("if de ruta");
        cartLged.classList.remove("hidden")
        cartNoLog.classList.add("hidden")
    }
        
    })



