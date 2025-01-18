document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const togglePassword = document.querySelector(".toggle-password");

    togglePassword.addEventListener("click", () => {
        passwordInput.type = passwordInput.type === "password" ? "text" : "password";
    });

    document.getElementById("signup-form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Account created successfully!");
    });
});
