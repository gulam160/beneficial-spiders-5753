import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();
import {footer} from "../components/footer.js";
document.getElementById("footer").innerHTML=footer();


// ================================== Navbar ===========================


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
eng_eng.addEventListener("click",()=>{
    eng_tag.innerText="English";

});

let eng_hin=document.getElementById("lang_hin");
eng_hin.addEventListener("click",()=>{
    eng_tag.innerText="हिंदी";

});

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
function loaderGoogleTranslate(){
    new google.translate.TranslateElement("list1")
}



// ====================================== Car section ============================

let url = `https://mock-server-app-u4oe.onrender.com/api/car`

let page = 1;

const increamentPage = () => {
    if(page == 2){
        return;
    }
    page++;
    fetchCars(page);
}

const fetchCars = async() => {
    let res = await fetch(`${url}?_page=${page}&_limit=9`);
    let data = await res.json();
    renderDOM(data);
}

const card = (image, price, year, model, name, location) => {
    let div = document.createElement("div");

    let poster = document.createElement("img");
    poster.src = image;
    poster.setAttribute("id", "banner")
    let amount = document.createElement('h4')
    amount.innerText = `₹${price}`;
    let advertDate = document.createElement('p');
    advertDate.innerText = year;
    let carName = document.createElement('b');
    carName.innerText = `${model} - ${name}`
    let area = document.createElement('p');
    area.innerText = location;

    div.append(poster, amount, advertDate, carName, area)
    return div;
}

const renderDOM = (data) => {
    let container = document.getElementById("main-body");
    container.innerHTML = null;

    data.forEach(({image, price, post, model, name, location})=>{
        let box = card(image, price, post, model, name, location);
        container.append(box)
    })
}

const searhCar = async() => {
    let query = document.getElementById("query").value;
    let res = await fetch(`${url}?name=${query}`);
    let data = await res.json();
    renderDOM(data);
}

let id;
const debounce = (func, delay) => {
    if(id){
        clearTimeout(id);
    }
    id = setTimeout(()=>{
        func();
    }, delay)
}

const hyundaidata = async() => {
    let res = await fetch(`${url}?model=Hyudai`);
    let data = await res.json();
    renderDOM(data);
}

const fetchHyundai = async() => {
    let res = await fetch(`${url}?model=Hyudai`);
    let data = await res.json();
    renderDOM(data);
}

const mahindraData = async() => {
    let res = await fetch(`${url}?model=Mahindra`);
    let data = await res.json();
    renderDOM(data);
}

const fetchMahindra = async() => {
    let res = await fetch(`${url}?model=Mahindra`);
    let data = await res.json();
    renderDOM(data);
}

const lowtohigh = async() => {
    let res = await fetch(`${url}?_sort=price&_order=asc`)
    let data = await res.json();
    renderDOM(data);
}

const hightolow = async() => {
    let res = await fetch(`${url}?_sort=price&_order=desc`);
    let data = await res.json();
    renderDOM(data);
}

const lessThanFiveLac = async() => {
    let res = await fetch(`${url}?price_lte=500000`)
    let data = await res.json();
    renderDOM(data); 
}

const greaterThanFiveLac = async() => {
    let res = await fetch(`${url}?price_gte=500001`)
    let data = await res.json();
    renderDOM(data);
}

window.onload = () => {
    fetchCars()
}
