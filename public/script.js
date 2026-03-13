const loginForm = document.getElementById("loginForm")
const signupForm = document.getElementById("signupForm")

const slider = document.getElementById("slider")

const loginTab = document.getElementById("loginTab")
const signupTab = document.getElementById("signupTab")

function showLogin(){

signupForm.classList.add("hidden")
loginForm.classList.remove("hidden")

slider.style.left="0%"

loginTab.classList.add("active")
signupTab.classList.remove("active")

}

function showSignup(){

loginForm.classList.add("hidden")
signupForm.classList.remove("hidden")

slider.style.left="50%"

signupTab.classList.add("active")
loginTab.classList.remove("active")

}