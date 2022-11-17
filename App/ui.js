// Select DOM elements to work with
const signInButton = document.getElementById('signIn');
const signOutButton = document.getElementById('signOut')
const resetPasswordButton = document.getElementById('resetPassword');
const welcomeDiv = document.getElementById('welcome-div');

function welcomeUser(username) {
    welcomeDiv.innerHTML = `Welcome ${username}!`

    signInButton.classList.add('d-none');

    signOutButton.classList.remove('d-none');
    resetPasswordButton.classList.remove('d-none');
    welcomeDiv.classList.remove('d-none');
}

function logMessage(s) {
    response.appendChild(document.createTextNode('\n' + s + '\n'));
}