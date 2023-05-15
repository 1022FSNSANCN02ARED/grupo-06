window.addEventListener("load", function () {
    document.getElementById("registerName").addEventListener("input", (e) => {
        if (e.target.value.length < 3 || e.target.value.length > 20) {
            document.querySelector("#registerNamep").style.display = "block";
            document
                .getElementById("registerName")
                .classList.add("border-danger");
            document.getElementById("registerName").classList.add("is-invalid");
        } else {
            document.querySelector("#registerNamep").style.display = "none";
            document
                .getElementById("registerName")
                .classList.remove("border-danger");
            document
                .getElementById("registerName")
                .classList.remove("is-invalid");
        }
    });
    document
        .getElementById("registerLastname")
        .addEventListener("input", (e) => {
            if (e.target.value.length < 3 || e.target.value.length > 20) {
                document.querySelector("#registerLastnamep").style.display =
                    "block";
                document
                    .getElementById("registerLastname")
                    .classList.add("border-danger");
                document
                    .getElementById("registerLastname")
                    .classList.add("is-invalid");
            } else {
                document.querySelector("#registerLastnamep").style.display =
                    "none";
                document
                    .getElementById("registerLastname")
                    .classList.remove("border-danger");
                document
                    .getElementById("registerLastname")
                    .classList.remove("is-invalid");
            }
        });
    document.getElementById("registerUser").addEventListener("input", (e) => {
        if (e.target.value.length < 6 || e.target.value.length > 20) {
            document.querySelector("#registerUserp").style.display = "block";
            document
                .getElementById("registerUser")
                .classList.add("border-danger");
            document.getElementById("registerUser").classList.add("is-invalid");
        } else {
            document.querySelector("#registerUserp").style.display = "none";
            document
                .getElementById("registerUser")
                .classList.remove("border-danger");
            document
                .getElementById("registerUser")
                .classList.remove("is-invalid");
        }
    });
    document.getElementById("registerEmail").addEventListener("input", (e) => {
        if (!e.target.value.includes("@")) {
            document.querySelector("#registerEmailp").style.display = "block";
            document
                .getElementById("registerEmail")
                .classList.add("border-danger");
            document
                .getElementById("registerEmail")
                .classList.add("is-invalid");
        } else {
            document.querySelector("#registerEmailp").style.display = "none";
            document
                .getElementById("registerEmail")
                .classList.remove("border-danger");
            document
                .getElementById("registerEmail")
                .classList.remove("is-invalid");
        }
    });
    document
        .getElementById("registerPassword")
        .addEventListener("input", (e) => {
            if (e.target.value.length < 6 || e.target.value.length > 20) {
                document.querySelector("#registerPasswordp").style.display =
                    "block";
                document
                    .getElementById("registerPassword")
                    .classList.add("border-danger");
                document
                    .getElementById("registerPassword")
                    .classList.add("is-invalid");
            } else {
                document.querySelector("#registerPasswordp").style.display =
                    "none";
                document
                    .getElementById("registerPassword")
                    .classList.remove("border-danger");
                document
                    .getElementById("registerPassword")
                    .classList.remove("is-invalid");
            }
        });
    document.getElementById("registerNumber").addEventListener("input", (e) => {
        if (e.target.value.length < 6 || e.target.value.length > 20) {
            document.querySelector("#registerNumberp").style.display = "block";
            document
                .getElementById("registerNumber")
                .classList.add("border-danger");
            document
                .getElementById("registerNumber")
                .classList.add("is-invalid");
        } else {
            document.querySelector("#registerNumberp").style.display = "none";
            document
                .getElementById("registerNumber")
                .classList.remove("border-danger");
            document
                .getElementById("registerNumber")
                .classList.remove("is-invalid");
        }
    });
});
