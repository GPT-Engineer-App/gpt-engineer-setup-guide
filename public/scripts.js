// scripts.js

function setTheme(themeName) {
  document.body.className = themeName;
}

function showMenu(menuName) {
    document.getElementById('deployment-menu').style.display = 'block';
}

function deploy(option) {
    alert('Deploying: ' + option);
    // Implement deployment logic here
}