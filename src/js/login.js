const btnSignup = document.querySelector('.signup-btn');
const btnSignin = document.querySelector('.signin-btn');
const form = document.querySelector('.formBx');

btnSignup.addEventListener('click', function() {
    form.classList.add('active')
});

btnSignin.addEventListener('click', function() {
    form.classList.remove('active')
});