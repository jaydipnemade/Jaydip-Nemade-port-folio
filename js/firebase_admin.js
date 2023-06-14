import { db, dbs } from "./firebase_init.js";
import { set, get, child, ref, update } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
import { getStorage, uploadBytesResumable, getDownloadURL, ref as sref } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-storage.js";
var exdownloadURL;
// get data function
export function getdata() {
  var data = [];
  var expcount = 0;
  const dbRef = ref(db);
  get(child(dbRef, `data/`)).then((snapshot) => {
    if (snapshot.exists()) {
      data = snapshot.val();
      document.getElementById("myname").value = data["home"]["name"];
      document.getElementById("insta").value = data["home"]["links"]["instagram"];
      document.getElementById("twet").value = data["home"]["links"]["twitter"];
      document.getElementById("mobno").value = data["home"]["links"]["call"];
      document.getElementById("linkedin").value = data["home"]["links"]["linkedin"];
      document.getElementById("whno").value = data["home"]["links"]["whatsapp"];

      // about me 
      document.getElementById("aboutmetxt").value = data["aboutme"]["text"];



    } else {
      console.log("No data available");
    }

  }).catch((error) => {
    console.error(error);
  });

}


// updating home
export function onsubmithome() {
  update(ref(db, 'data/home'), {
    name: document.getElementById("myname").value,
  });
  update(ref(db, 'data/home/links'), {
    instagram: document.getElementById("insta").value,
    linkedin: document.getElementById("linkedin").value,
    call: document.getElementById("mobno").value,
    whatsapp: document.getElementById("whno").value,
    twitter: document.getElementById("twet").value,
  });
  return true;
}


// updating about
export function onsubmitabout() {
  update(ref(db, 'data/aboutme'), {
    text: document.getElementById("aboutmetxt").value,
  });

  return true;
}

// uploading images of home and about me
export function uploadImagehome(e, where) {
  console.log(e.target.files[0])
  const storage = getStorage();
  const storageRef = sref(storage, `img/` + where + `/profile`);
  const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
  uploadTask.on('state_changes',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      document.getElementById("percentage").innerHTML=progress+"%";
    },
    (error) => {
      console.log(error);
    },
    () => {

      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
        update(ref(db, 'data/' + where), {
          img: downloadURL,
        });
      });
    }
  );
}

export function uploadImageexp(e) {
  var title = document.getElementById("cardtitle").value;
  if (title == undefined) {
    alert("please enter title")
  } else {
    console.log(e.target.files[0])
    const storage = getStorage();
    const storageRef = sref(storage, `img/exprience/` + title );
    const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);
    uploadTask.on('state_changes',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progress == '100') alert('Image Uploaded')
      },
      (error) => {
        console.log(error);
      },
      () => {

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          update(ref(db, 'data/exprience/' + title), {
            img: downloadURL,
          });
        });
      }
    );
  }
}

// add new  exprience 
export function onsubmitexp() {

console.log(exdownloadURL);
  var title = document.getElementById("cardtitle").value;



  update(ref(db, 'data/exprience/' + title), {
    title: document.getElementById("cardtitle").value,
    description: document.getElementById("carddesc").value,
    link: document.getElementById("cardlink").value,
    
  });

  return true;
}