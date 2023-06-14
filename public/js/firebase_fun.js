import { db, dbs } from "./firebase_init.js";
import { set, get, child, ref, onValue } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";


// get data function
export function getdata() {
    var data = [];
    var expcount = 0;
    const dbRef = ref(db);
    get(child(dbRef, `data/`)).then((snapshot) => {
        if (snapshot.exists()) {
            data = snapshot.val();
            document.getElementById("myphoto").src = data["home"]["img"];
            document.getElementById("myname").innerHTML = data["home"]["name"];
            document.getElementById("links").innerHTML =
                `<a target="_blank" href="` + data["home"]["links"]["instagram"] + `">
            <img class="mx-1" src="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
        </a>
        <a target="_blank" href="`+ data["home"]["links"]["twitter"] + `">
            <img class="mx-1" src="https://img.icons8.com/color/48/000000/twitter--v1.png" />
        </a>
        <a target="_blank" href="https://wa.me/91`+ data["home"]["links"]["whatsapp"] + `">
            <img class="mx-1" src="https://img.icons8.com/color/48/000000/whatsapp--v1.png" />
        </a>
        <!-- TO DO  yt link  -->
        <!-- <img class="mx-1" src="https://img.icons8.com/color/48/000000/youtube-play.png" /> -->

        <a target="_blank" href="`+ data["home"]["links"]["linkedin"] + `">
            <img class="mx-1"src="https://img.icons8.com/color/48/000000/linkedin.png" />
        </a>
        <a target="_blank" href="tel:+91`+ data["home"]["links"]["call"] + `">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#06cf3c"
                class="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
            </svg>
        </a>`



            // console.log(data["home"]["links"]["instagram"]);
            document.getElementById("aboutimg").src = data["aboutme"]["img"];
            document.getElementById("abouttext").innerHTML = data["aboutme"]["text"];

            get(child(dbRef, `data/exprience/`)).then((snapshot) => {
                if (snapshot.exists()) {
                    snapshot.forEach(s => {
                        const data = s.val();
                        document.getElementById("card").innerHTML = document.getElementById("card").innerHTML + `<div class="bg-transparent text-white border border-white  rounded mx-3 my-3" style="width: 18rem; min-height: 380px">
                        <img class="card-img-top" src="`+ data["img"] + `" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">`+ data["title"] + `</h5>
                            <p class="card-text">`+ data["description"] + `</p>
                            <a href="`+ data["link"] + `" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>`


                    });
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });






        } else {
            console.log("No data available");
        }

    }).catch((error) => {
        console.error(error);
    });

}
