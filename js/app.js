// Configuración Firebase (versión 8 compatible)
const firebaseConfig = {
  apiKey: "AIzaSyC4wcRGegeBSOgBmds_99QXYC2TOJb4TBk",
  authDomain: "login-web-aca68.firebaseapp.com",
  projectId: "login-web-aca68",
  storageBucket: "login-web-aca68.appspot.com",
  messagingSenderId: "142901285190",
  appId: "1:142901285190:web:a44bf5af3fc04c1fbb5547"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Auth
const auth = firebase.auth();

// Login
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "home.html";
    })
    .catch(err => {
      document.getElementById("mensaje").innerText = "⚠ " + err.message;
    });
});
