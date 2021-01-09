//Part 4
let button = document.querySelector('.button')
let headline = document.querySelector('.header')

button.onclick = function validateForm() {
    let passwordInput = document.form.password.value;
    let usernameInput = document.form.username.value;

    if(passwordInput !== '12345678') {
      alert('The password is incorrect');
      return false;
    }
    headline.innerText = 'The information in the form is correct';
}