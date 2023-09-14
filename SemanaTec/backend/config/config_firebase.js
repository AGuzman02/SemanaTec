
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAmXu4kgEttQ4fMw9PZmI94WJ4NbDsohGM",
    authDomain: "tienda-33131.firebaseapp.com",
    projectId: "tienda-33131",
    storageBucket: "tienda-33131.appspot.com",
    messagingSenderId: "202960861497",
    appId: "1:202960861497:web:2322b294bccfe394c5d0e8",
    measurementId: "G-K38S4CZQ0D"
  };
  /*const firebaseConfig = {
    apiKey: "AIzaSyB789RjOJ8uzNftIcqlo5Not3x5NiDuiYw",
    authDomain: "marketec-ff53d.firebaseapp.com",
    databaseURL: "https://marketec-ff53d-default-rtdb.firebaseio.com",
    projectId: "marketec-ff53d",
    storageBucket: "marketec-ff53d.appspot.com",
    messagingSenderId: "854829227864",
    appId: "1:854829227864:web:29124c3051d14d50db4f2d",
    measurementId: "G-582NWWK1QF"
  };*/
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);

  //const db=firebase.firestore();
  //const db = firebase.firestore(); // Ahora utiliza firestore() en lugar de firebase.firestore()
  const db = getFirestore(app);
  //export {db}
  //module.exports = { db };
  export default db; // Exporta db como valor predeterminado
