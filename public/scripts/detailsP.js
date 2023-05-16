window.addEventListener("load", function () {

    document.getElementById("addCart")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            if (!localStorage.length > 0 && !localStorage.username) {
                alert("¡Debes estar logueado antes de agregar un producto!");
            } else {
                event.target.submit();
            }
        });
    document.getElementById("buyCart")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            if (!localStorage.length > 0 && !localStorage.username) {
                alert("¡Debes estar logueado antes de comprar un producto!");
            } else {
                event.target.submit();
            }
        });
});
