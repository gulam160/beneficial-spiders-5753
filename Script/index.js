let country = document.getElementById("country");
let moving = document.getElementById("moving");
let text = document.getElementById("text");
let list = document.getElementById("list");

country.addEventListener("click",()=>{
    list.classList.toggle("hidden");
    moving.classList.toggle("roted");
});

let language1 = document.getElementById("language1");
let moving1 = document.getElementById("moving1");
let list1 = document.getElementById("list1");

language1.addEventListener("click",()=>{
    list1.classList.toggle("hidden");
    moving1.classList.toggle("roted");
});

function myfunction(omkar){
    text.innerHTML = omkar;
}

let eng_tag = document.getElementById("eng_tag");
let hin_eng = document.querySelector(".hin_eng");
let language = document.querySelector(".language");

language.addEventListener("click",()=>{
    hin_eng.classList.toggle("display_div")
})

function languageolx(anyone){
    eng_tag.innerHTML =anyone;
}





