window.addEventListener("load", function () {
    document.getElementById("productName").addEventListener("input", (e) => {
        if (e.target.value.length < 3 || e.target.value.length > 20) {
            document.querySelector("#productNamep").style.display = "block";
            document
                .getElementById("productName")
                .classList.add("border-danger");
            document.getElementById("productName").classList.add("is-invalid");
        } else {
            document.querySelector("#productNamep").style.display = "none";
            document
                .getElementById("productName")
                .classList.remove("border-danger");
            document
                .getElementById("productName")
                .classList.remove("is-invalid");
        }
    });
    document.getElementById("productPrice").addEventListener("input", (e) => {
        if (e.target.value < 1) {
            document.querySelector("#productPricep").style.display = "block";
            document
                .getElementById("productPrice")
                .classList.add("border-danger");
            document.getElementById("productPrice").classList.add("is-invalid");
        } else {
            document.querySelector("#productPricep").style.display = "none";
            document
                .getElementById("productPrice")
                .classList.remove("border-danger");
            document
                .getElementById("productPrice")
                .classList.remove("is-invalid");
        }
    });
});
