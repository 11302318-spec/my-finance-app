let currentUser = null;

auth.onAuthStateChanged(user => {
  if (user) {
    currentUser = user;
    authBox.style.display = "none";
    appBox.style.display = "block";
    initChart();
    loadData();
  } else {
    authBox.style.display = "block";
    appBox.style.display = "none";
  }
});

function handleLogin() {
  auth.signInWithEmailAndPassword(email.value, password.value);
}

function handleSignUp() {
  auth.createUserWithEmailAndPassword(email.value, password.value);
}

function handleLogout() {
  auth.signOut();
}
