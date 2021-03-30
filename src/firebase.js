
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAstDhMzhqsgu_-tKQt1DujLRl6sLwVbUk",
    authDomain: "facebook-clone-c7cf4.firebaseapp.com",
    projectId: "facebook-clone-c7cf4",
    storageBucket: "facebook-clone-c7cf4.appspot.com",
    messagingSenderId: "980438496942",
    appId: "1:980438496942:web:519fa0c99b243dbdec9f3f",
    measurementId: "G-2HH67KHSN0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db