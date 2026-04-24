/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
const firebaseConfig = {
  apiKey: "AIzaSyCZg-gtpgx2GffckokHsP8w-P5vyZnQPD0",
  authDomain: "joshua-earp-12comp.firebaseapp.com",
  databaseURL: "https://joshua-earp-12comp-default-rtdb.firebaseio.com",
  projectId: "joshua-earp-12comp",
  storageBucket: "joshua-earp-12comp.firebasestorage.app",
  messagingSenderId: "859205823509",
  appId: "1:859205823509:web:459eb5a0f82280fdf4721c"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
