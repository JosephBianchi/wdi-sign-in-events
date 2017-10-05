document.addEventListener('DOMContentLoaded', function () {
  var signIn = document.querySelector('.signin')
  var modalButton = document.querySelector('.modal')
  signIn.addEventListener('click', function() {
    modalButton.style.display = 'unset'
    });
  var close = document.querySelector('.close')
  close.addEventListener('click', function() {
    modalButton.style.display = 'none'
  })
  var submit = document.querySelector('.submit')
  var username = document.querySelector('#user')
  var password = document.querySelector('#pass')
  username.className = 'error'
  password.className = 'error'


  //input[0].addEventListener('click', function() {
  var username = document.querySelector('#user')
  var password = document.querySelector('#pass')
  username.addEventListener('click', function() {
    username.className = ""
  })
  password.addEventListener('click', function() {
    password.className = ""
  })
});
