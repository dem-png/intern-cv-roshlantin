window.onload = function() {
    alert("Welcome to my CV, have a nice day!");
};

var toggleButton = document.getElementById("toggleMode");

toggleButton.onclick = function() {
    document.body.classList.toggle("dark-mode");
};