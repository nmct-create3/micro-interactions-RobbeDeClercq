const handlePasswordSwitcher = function() {
  let pwToggle = document.querySelector(".js-password-toggle");
  let pwInput = document.querySelector(".js-password-input");

  pwToggle.addEventListener('change', function(){
    if(this.checked) {
          pwInput.type = 'text';
      } else {
          pwInput.type = 'password';
      }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM geladen');
  handlePasswordSwitcher();
});
