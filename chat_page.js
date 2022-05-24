function Logout(){
    localStorage.removeItem("user_name");

    localStorage.removeItem("room_names");

    window.location  = "index.html";
}


//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
    apiKey: "AIzaSyCPoj-QNI616qgWHwxn8Zj5Ij3e3509Jfo",
    authDomain: "lets-chat-web-app-70bae.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-70bae-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-70bae",
    storageBucket: "lets-chat-web-app-70bae.appspot.com",
    messagingSenderId: "73948961809",
    appId: "1:73948961809:web:910a06a76b62d5a0ffe5b0"
  };
  
  // Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



 user_name = localStorage.getItem("user_name");

 room_name = localStorage.getItem("room_select");
 
 document.getElementById("Welcome_user").innerHTML="Welcome " + user_name + " to #"+ room_name;

 function send(){

    New_message = document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
          name:user_name,
          message:New_message,
          like:0
    });

    document.getElementById("msg").value = "";
 }


 