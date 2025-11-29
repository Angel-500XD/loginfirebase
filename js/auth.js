import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC4wcRGegeBSOgBmds_99QXYC2TOJb4TBk",
  authDomain: "login-web-aca68.firebaseapp.com",
  projectId: "login-web-aca68",
  storageBucket: "login-web-aca68.firebasestorage.app",
  messagingSenderId: "142901285190",
  appId: "1:142901285190:web:a44bf5af3fc04c1fbb5547",
  measurementId: "G-5FZ05MEL0B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ELEMENTOS
const loginBtn = document.getElementById("loginBtn");
const errorBox = document.getElementById("errorBox");

// LOGIN
loginBtn.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    const pass  = document.getElementById("password").value.trim();

    signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
            errorBox.classList.add("hidden");
            window.location.href = "home.html";
        })
        .catch(err => {
            let mensaje = "";

            switch (err.code) {
                case "auth/user-not-found":
                case "auth/wrong-password":
                    mensaje = "⚠ Tu correo o contraseña son inválidos.";
                    break;

                case "auth/invalid-email":
                    mensaje = "⚠ El formato del correo no es válido.";
                    break;

                case "auth/missing-password":
                    mensaje = "⚠ Debes ingresar tu contraseña.";
                    break;

                default:
                    mensaje = "⚠ Error:tu correo o contraseña son invalidos " ;
            }

            errorBox.textContent = mensaje;
            errorBox.classList.remove("hidden");
        });
});

// Ver contraseña
document.getElementById("showPass").addEventListener("click", () => {
    const passInput = document.getElementById("password");
    passInput.type = passInput.type === "password" ? "text" : "password";
});


