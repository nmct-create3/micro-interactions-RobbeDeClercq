let email = {},
    password = {},
    signInButton,
    pwToggle,
    pwInput;

const handlePasswordSwitcher = function() {


pwToggle.addEventListener('change', function(){
    if(this.checked) {
          pwInput.type = 'text';
      } else {
          pwInput.type = 'password';
      }
  });
};

const isEmpty = function(fieldValue) {
   return !fieldValue || !fieldValue.length;
};

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(pw){
  return pw.length > 1;
}

const enableListeners = function() {
  email.input.addEventListener('blur', function(){

  });

  password.input.addEventListener('blur', function(){

  });

  signInButton.addEventListener('click', function(){

  });
}

const getDOMElements = function() {
  pwToggle = document.querySelector(".js-password-toggle");
  pwInput = document.querySelector(".js-password-input");

  email.errorMessage =  document.querySelector(".js-email-error-message");
  email.input = document.querySelector(".js-email-input");
  email.field = document.querySelector(".js-form-field__email");

  password.errorMessage = document.querySelector(".js-password-error-message");
  password.input = document.querySelector(".js-password-input");
  password.field = document.querySelector(".js-form-field__password");

  signInButton = document.querySelector(".js-sign-in-button");
};


document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM geladen');
  getDOMElements();
  handlePasswordSwitcher();
});
