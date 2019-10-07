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
    console.log(emailAddress);
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(pw){
  return pw.length > 1;
}

const addErrors = function(obj){
  obj.field.classList.add('has-error');
};

const removeErrors = function(obj){
  obj.field.classList.remove('has-error');
};

const checkPassword = function(){
  if (isEmpty(password.input.value)) {
    password.errorMessage.style.display = "block";
    password.errorMessage.innerHTML = "This field is required";
    addErrors(password);
  }else if(isValidPassword(password.input.value)){
      password.errorMessage.style.display = "none";
      removeErrors(password);
      password.input.removeEventListener('input', doubleCheckPassword);
  }else {
      password.errorMessage.style.display = "block";
      password.errorMessage.innerHTML = "Invalid password";
      addErrors(password);
  }
};

const checkEmail = function(){
  if (isEmpty(email.input.value)) {
    email.errorMessage.style.display = "block";
    email.errorMessage.innerHTML = "This field is required";
    addErrors(email);
  }else if(isValidEmailAddress(email.input.value)){
      email.errorMessage.style.display = "none";
      removeErrors(email);
      email.input.removeEventListener('input', doubleCheckEmailAddress);
  }else {
      email.errorMessage.style.display = "block";
      email.errorMessage.innerHTML = "Invalid emailadress";
      addErrors(email);
  }
};

const doubleCheckEmailAddress = function(){
  checkEmail();
};

const doubleCheckPassword = function(){
  checkPassword();
};

const enableListeners = function() {
  email.input.addEventListener('blur', function(){
    email.input.addEventListener('input', doubleCheckEmailAddress);
    checkEmail();
  });

  password.input.addEventListener('blur', function(){
    password.input.addEventListener('input', doubleCheckPassword);
    checkPassword();
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

  enableListeners();
};


document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM geladen');
  getDOMElements();
  handlePasswordSwitcher();
});
