document.addEventListener("DOMContentLoaded",()=>{

    console.log(localStorage);
    const buttonLged = document.getElementById('buttonLged');
    const buttonNoLged = document.getElementById('buttonNoLged');

    const isUserLoggedIn = localStorage.length

    if(isUserLoggedIn == 0){
        buttonLged.classList.add('hidden');
        buttonNoLged.classList.remove('hidden');
       
    } else {
        buttonLged.classList.remove('hidden');
        buttonNoLged.classList.add('hidden');
    }
        
    })