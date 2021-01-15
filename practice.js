//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyDxBGuRKkZn360-bwCx1vXYMyVMvKcaRwo",
    authDomain: "kwitter-12551.firebaseapp.com",
    databaseURL: "https://kwitter-12551-default-rtdb.firebaseio.com",
    projectId: "kwitter-12551",
    storageBucket: "kwitter-12551.appspot.com",
    messagingSenderId: "410709294954",
    appId: "1:410709294954:web:2eb1983218dde2d2c0ef13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    })
}

