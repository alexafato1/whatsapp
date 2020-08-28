import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCh-OGP57cyAHjaAl0wpCahl58qqXi5Rkg",
    authDomain: "whatsapp-clone-6e11a.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-6e11a.firebaseio.com",
    projectId: "whatsapp-clone-6e11a",
    storageBucket: "whatsapp-clone-6e11a.appspot.com",
    messagingSenderId: "1072599155005",
    appId: "1:1072599155005:web:a9449741b8bd5879b10554",
    measurementId: "G-09L2WHQ96S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
