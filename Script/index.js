import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
import {footer} from "../components/footer.js";
document.getElementById("footer").innerHTML=footer();


let country = document.getElementById("country");
let moving = document.getElementById("moving");
let text = document.getElementById("text");
let list = document.getElementById("list");
let c1=0
country.addEventListener("click",()=>{
    c1++
    if(c1%2==0){
        list.style.display="none";
    }else{
        list.style.display="block";
    }
    moving.classList.toggle("roted");
});

let USA=document.getElementById("USA");
USA.onclick=()=>{
    text.innerText="USA";
}
let Indan=document.getElementById("Indan");
Indan.onclick=()=>{
    text.innerText="Indian";
}
let Sri_Lanka=document.getElementById("Sri_Lanka");
Sri_Lanka.onclick=()=>{
    text.innerText="Sri_Lanka";
}
let Canda=document.getElementById("Canda");
Canda.onclick=()=>{
    text.innerText="Canda";
}
let Pakistan=document.getElementById("Pakistan");
Pakistan.onclick=()=>{
    text.innerText="Pakistan";
}

let language1 = document.getElementById("language1");
let moving1 = document.getElementById("moving1");
let list1 = document.getElementById("list1");
let eng_tag = document.getElementById("eng_tag");

let eng_eng=document.getElementById("lang_eng");
eng_eng.onclick=()=>{
    eng_tag.innerText="English";
    console.log("English");
}
let eng_hin=document.getElementById("lang_hin");
eng_hin.onclick=()=>{
    eng_tag.innerText="हिंदी";
    console.log("हिंदी");
}
let c=0;
language1.addEventListener("click",()=>{
    c++;
    if(c%2==0){
        list1.style.display="none";
    }else{
        list1.style.display="block";
    }
    
    moving1.classList.toggle("roted");
});


let allCategoiesid = document.getElementById("allCategoiesid");
let moving2 = document.getElementById("moving2");
let list2 = document.getElementById("list2");

allCategoiesid.addEventListener("click",()=>{
    list2.classList.toggle("hidden1");
    moving2.classList.toggle("roted");
});





