const loginForm = document.getElementById("loginForm")
const signupForm = document.getElementById("signupForm")

const slider = document.getElementById("slider")

const loginTab = document.getElementById("loginTab")
const signupTab = document.getElementById("signupTab")

  function showLogin() {
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginTab').classList.add('active');
    document.getElementById('signupTab').classList.remove('active');
    document.getElementById('tabRow').classList.remove('signup-active');
  }

  function showSignup() {
    document.getElementById('signupForm').classList.remove('hidden');
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupTab').classList.add('active');
    document.getElementById('loginTab').classList.remove('active');
    document.getElementById('tabRow').classList.add('signup-active');
  }