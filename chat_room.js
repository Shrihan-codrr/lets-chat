// Your web app's Firebase configuration
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

document.getElementById("Welcome_user").innerHTML="Welcome " + user_name;

function addRoom(){

   New_Room = document.getElementById("new_room").value;

   firebase.database().ref("/").child(New_Room).update({
         purpose : "Adding Room Name"
   });

  localStorage.setItem("room_select",New_Room);
  window.location="chat_page.html";
           
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("room_names").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
              
        childKey  = childSnapshot.key;
        Room_names = childKey;
  //Start code
        row_room = "<div class='room_name' id = " + Room_names + " onclick='moveTo_room(this.id) ' > #"+ Room_names +"</div> <hr>";

        document.getElementById("room_names").innerHTML =   document.getElementById("room_names").innerHTML + row_room;
  //End code
        });
  });
}
getData();

function  moveTo_room(selected_room){
  
  localStorage.setItem("room_select", selected_room);

  window.location="chat_page.html";

}

function Logout(){
  
  localStorage.removeItem("user_name");
  window.location  = "index.html";
}

