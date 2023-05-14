window.addEventListener("load", function () {
    document
        .getElementById("turns-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();
            if (!localStorage.length > 0 && !localStorage.username) {
                alert("¡Debes estar logueado antes de reservar un turno!");
            } else {
                event.target.submit();
            }
        });
});
