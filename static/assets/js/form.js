import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut  } from "https://www.gstatic.com/firebasejs/9.8.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBbHC_3lhPC-2By6vpR6b7F_ALqKVQavY",
  authDomain: "bigmart-b93d1.firebaseapp.com",
  projectId: "bigmart-b93d1",
  storageBucket: "bigmart-b93d1.appspot.com",
  messagingSenderId: "643619435141",
  appId: "1:643619435141:web:7bbfd0d11d7d03c5006fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

  // document.getElementById("reg-btn").addEventListener('click', function(){
  //  document.getElementById("register-div").style.display="inline";
  //  document.getElementById("login-div").style.display="none";
// });

// document.getElementById("log-btn").addEventListener('click', function(){
//  document.getElementById("register-div").style.display="none";
//  document.getElementById("login-div").style.display="inline";

// });

  document.getElementById("login-btn").addEventListener('click', function(){
  
   const loginEmail= document.getElementById("uname").value;
   const loginPassword =document.getElementById("pwd").value;
   console.log(loginEmail)

   signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // const user = userCredential.user;
    // document.getElementById("result-box").style.display="inline";
    //  document.getElementById("login-div").style.display="none";
    //  document.getElementById("result").innerHTML="Welcome Back<br>"+loginEmail+" was Login Successfully";
    

    window.location.pathname = "index";
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // document.getElementById("result-box").style.display="inline";
    //  document.getElementById("login-div").style.display="none";
    //  document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
    alert("Invalid Credentials")

  });
});


  document.getElementById("register-btn").addEventListener('click', function(){

   const registerEmail= document.getElementById("runame").value;
   const registerPassword =document.getElementById("rpwd").value;

   createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
  .then((userCredential) => {
    const user = userCredential.user;
    // document.getElementById("result-box").style.display="inline";
    //  document.getElementById("register-div").style.display="none";
    //  document.getElementById("result").innerHTML="Welcome <br>"+registerEmail+" was Registered Successfully";
    window.location.pathname = "login";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // document.getElementById("result-box").style.display="inline";
    //  document.getElementById("register-div").style.display="none";
    //  document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
    alert("Sorry ! <br>"+errorMessage)

  });
});


// document.getElementById("log-out-btn").addEventListener('click', function(){
//   signOut(auth).then(() => {
//      document.getElementById("result-box").style.display="none";
//        document.getElementById("login-div").style.display="inline";
//   }).catch((error) => {
//      document.getElementById("result").innerHTML="Sorry ! <br>"+errorMessage;
//   });

// });