function saveUsername() {
    const usernameInput = document.querySelector('input[name="login"]');
    const username = usernameInput.value;

    localStorage.setItem("username", username);
}
function deleteUsername() {
    localStorage.clear();
}
