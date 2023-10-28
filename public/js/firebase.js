var firebaseConfig = {
    // Enter your firebase credentials
    apiKey: "AIzaSyBxZy5ahAQwHUI_T11uoT9Hrj2T5tFPlvw",
    authDomain: "blog-app-ec97e.firebaseapp.com",
    projectId: "blog-app-ec97e",
    storageBucket: "blog-app-ec97e.appspot.com",
    messagingSenderId: "89209933475",
    appId: "1:89209933475:web:847a1f96fce70a8613b916"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();