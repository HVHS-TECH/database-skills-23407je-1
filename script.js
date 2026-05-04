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
let score = 0;
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Hello World!'
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
  firebase.database().ref('/message').on('value', displayMessage, fb_readError);
  console.log("leaving simpleRead");
}

function displayMessage(snapshot) {
  HTML_OUTPUT.innerHTML = snapshot.val();
}
function fb_readError(error) {
console.log("there was an error reading the message");
console.error(error);
}

leaderboardTable = {
Hardcore:{
 Users: {
  Coby: 900,
  Josh: score,
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

function hardcoreclicker() {
    score = score + 1;
  firebase.database().ref('Hardcore/Users/Josh').set(score)
}

function fb_readLeaderboard() {
  console.log("Reading leaderboard");
  firebase.database().ref('Hardcore/Users').on('value', displayLeaderboard, fb_readError)
}
function displayLeaderboard(snapshot) {
  let data = snapshot.val();
  console.log(data);
  let text = "";
  for (let [usernames, score] of Object.entries(data)) {
    text += usernames + ": " + score + "<br>";
  }
  HTML_OUTPUT.innerHTML = text;
}