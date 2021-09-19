
const firebaseConfig = {
    apiKey: "AIzaSyA8CL0XLJ8J_KBkHRryIgufAKFWnPUbIEQ",
    authDomain: "loginform-a1f15.firebaseapp.com",
    databaseURL: "https://loginform-a1f15-default-rtdb.firebaseio.com",
    projectId: "loginform-a1f15",
    storageBucket: "loginform-a1f15.appspot.com",
    messagingSenderId: "60672862876",
    appId: "1:60672862876:web:e5a2532d8d0f16bda05b59",
    measurementId: "G-RY46TRP61W"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

const signUpFile = () => { location.href = "SignUp.html" }
const singUpUser = () => {


    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
           location.href="login.html"
            var user = userCredential.user
            //
            console.log(user);
            alert("Your Account Is Created")

          
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });


}
const loginFile = () => {
    location.href = "game.html"
}
let userArr = [];

const logIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userEmail = auth.currentUser.email;
        userArr.push(email)
        location.href = "game.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
