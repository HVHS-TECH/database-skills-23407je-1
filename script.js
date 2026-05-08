/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Hello World!'
    }
  )
}
function goodbyeWorld(){
  console.log("Running goodbyeWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Goodbye World!'
    }
  )
}
function users(){
firebase.database().ref('Users/Coby').set(
    {
      age: 16,
      fingers: 10,
      coolpoints: 100000,
    }
  )
}
function simpleread() {
  console.log("reading the message");
  HTML_OUTPUT.innerHTML = "";
  firebase.database().ref('/message').on('value', displayMessage, fb_readError);
  console.log("leaving simpleRead");
}

function displayMessage(snapshot) {
  if (snapshot.val() == null) {
  HTML_OUTPUT.innerHTML = "Data is null";
  } else {
  HTML_OUTPUT.innerHTML += snapshot.val();
  }
}
function fb_readError(error) {
console.log("there was an error reading the message");
console.error(error);
}

leaderboardTable = {
Hardcore:{
 Users: {
  Coby: 900,
  Josh: 800,
  Lukas: 830,
  MrB: 400
}
},
Normal:{
 Users: {
  Coby: 1260,
  Josh: 1340,
  Lukas: 1280,
  MrB: 700
}
},
}

function leaderboards() {
  firebase.database().ref('/').set(leaderboardTable)
}
function fb_readLeaderboard() {
  console.log("Reading leaderboard");
  HTML_OUTPUT.innerHTML = "";
  firebase.database().ref('Hardcore/Users').orderByValue().on('value', displayLeaderboard, fb_readError);
}

function displayLeaderboard(snapshot) {
  let hardcoreDataOutput = snapshot.val();
  console.log(hardcoreDataOutput);
  if (hardcoreDataOutput == null) {
    HTML_OUTPUT.innerHTML = "Data is null";
  } else {
      snapshot.forEach(sortData)
      console.log("data sent");
  }
}
function sortData(string){
  let data = string.val();
  
  console.log(string);
  console.log("the data is: " + data);
  let text = "";
  for (let [usernames] of string.key) {
  text += usernames
}
    HTML_OUTPUT.innerHTML += text + ": " + data + "<br>";
}
let GLOBAL_User;

function fb_login() {
  AuthenticatorListener = firebase.auth().onAuthStateChanged(fb_handleLogin);
}

function fb_handleLogin(_User) {
  if (_User) {
    console.log("user is logged in")
    HTML_OUTPUT.innerHTML += "<br>" + "User is already logged in" + "<br>";
    GLOBAL_user = _User;
  } else {
    console.log("User has not logged in")
    loginWithGoogle();
  }
}

function loginWithGoogle() {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_User = result.user;
    console.log("User has logged in")
  });
}