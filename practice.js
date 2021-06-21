// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDCzfuqNCqzPUEp34YQF6HvCCybXm1jVwQ",
    authDomain: "practice-activity-6c8e2.firebaseapp.com",
    databaseURL: "https://practice-activity-6c8e2-default-rtdb.firebaseio.com",
    projectId: "practice-activity-6c8e2",
    storageBucket: "practice-activity-6c8e2.appspot.com",
    messagingSenderId: "350772703380",
    appId: "1:350772703380:web:a574c3b343fba98ef08481"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}