{/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCn-FlNhc16ND4yeMz0sd_MZ9k7HK_UiVY",
    authDomain: "jaydip-portfolio.firebaseapp.com",
    projectId: "jaydip-portfolio",
    storageBucket: "jaydip-portfolio.appspot.com",
    messagingSenderId: "323913495990",
    appId: "1:323913495990:web:53f16e3cfc9128da4d3d17"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  // Get a reference to the database service
  //   const db = getDatabase();
  export const db=getDatabase(app);
  export const dbs=getStorage(app);
// </script>