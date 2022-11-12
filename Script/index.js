

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
}
let eng_hin=document.getElementById("lang_hin");
eng_hin.onclick=()=>{
    eng_tag.innerText="हिंदी";
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

let randomProduct=[
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/7cvxpvijsd7c1-IN/image;s=300x600;q=60`,
        name:"3 Bds - 3 Ba - 1460 ft2",
        description:"3BHK&4BHK bhk villas",
        date:"OCT 16",
        price:"59,99,999"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/rmw0qk4drrit2-IN/image;s=300x600;q=60`,
        name:"3 Bds - $+ Ba - 1460 ft2",
        description:"Furnished Flat for Rent near Thrissur",
        date:"SEP 30",
        price:"17,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/hof7j087bjoc2-IN/image;s=300x600;q=60`,
        name:"2015 - 39000.0 km",
        description:"Maruti Suzuki Swift Dzire LXI, 2015",
        date:"TODAY",
        price:"4,80,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/2e3k3bpn8ksp2-IN/image;s=300x600;q=60`,
        name:"4 Bds - 4+ Ba - 2600 ft2",
        description:"thrissur thiroor 6,500 cent 4 bhk n",
        date:"TODAY",
        price:"1,20,00,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/d3wgut26equs1-IN/image;s=300x600;q=60`,
        name:"3 Bds - 4 Ba - 1500 ft2",
        description:"thrissur thaikatusery 4 cent 3 bhk villa",
        date:"TODAY",
        price:"49,00,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/ai7pdk6w29en2-IN/image;s=300x600;q=60`,
        name:"3 Bds - 4 Ba - 1700 ft2",
        description:"thrissur thaikatusery 5 cent 3 bhk ",
        date:"TODAY",
        price:"69,00,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/lu4qf5rnuai31-IN/image;s=300x600;q=60`,
        name:"3 Bds - 4 Ba - 2400 ft2",
        description:"thrissur kolazhi 10 cent 4 bhk villa",
        date:"TODAY",
        price:"85,00,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/5b8ktnw2vnmo3-IN/image;s=300x600;q=60`,
        name:"BOXER SHORTS WHOLESALE",
        description:"",
        date:"TODAY",
        price:"105"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/org0vi54o1fd2-IN/image;s=300x600;q=60`,
        name:"3 Bds - 2 Ba - 1652 ft2",
        description:"Making your dreams to real",
        date:"TODAY",
        price:"27,25,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/7cvxpvijsd7c1-IN/image;s=300x600;q=60`,
        name:"3 Bds - 3 Ba - 1460 ft2",
        description:"3BHK&4BHK bhk villas",
        date:"OCT 16",
        price:"59,99,999"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/rmw0qk4drrit2-IN/image;s=300x600;q=60`,
        name:"3 Bds - $+ Ba - 1460 ft2",
        description:"Furnished Flat for Rent near Thrissur",
        date:"SEP 30",
        price:"17,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/hof7j087bjoc2-IN/image;s=300x600;q=60`,
        name:"2015 - 39000.0 km",
        description:"Maruti Suzuki Swift Dzire LXI, 2015",
        date:"TODAY",
        price:"4,80,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/2e3k3bpn8ksp2-IN/image;s=300x600;q=60`,
        name:"4 Bds - 4+ Ba - 2600 ft2",
        description:"thrissur thiroor 6,500 cent 4 bhk n",
        date:"TODAY",
        price:"1,20,00,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/d3wgut26equs1-IN/image;s=300x600;q=60`,
        name:"3 Bds - 4 Ba - 1500 ft2",
        description:"thrissur thaikatusery 4 cent 3 bhk villa",
        date:"TODAY",
        price:"49,00,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/ai7pdk6w29en2-IN/image;s=300x600;q=60`,
        name:"3 Bds - 4 Ba - 1700 ft2",
        description:"thrissur thaikatusery 5 cent 3 bhk ",
        date:"TODAY",
        price:"69,00,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/lu4qf5rnuai31-IN/image;s=300x600;q=60`,
        name:"3 Bds - 4 Ba - 2400 ft2",
        description:"thrissur kolazhi 10 cent 4 bhk villa",
        date:"TODAY",
        price:"85,00,000"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/5b8ktnw2vnmo3-IN/image;s=300x600;q=60`,
        name:"BOXER SHORTS WHOLESALE",
        description:"",
        date:"TODAY",
        price:"105"
    },
    {
        image:`https://apollo-singapore.akamaized.net/v1/files/org0vi54o1fd2-IN/image;s=300x600;q=60`,
        name:"3 Bds - 2 Ba - 1652 ft2",
        description:"Making your dreams to real",
        date:"TODAY",
        price:"27,25,000"
    }
    
]

DisplayData(randomProduct);

    function DisplayData(Data) {
        let cont=document.getElementById("container");
        cont.innerHTML=null;
        Data.map(function (elem) {
            let div=document.createElement('div');
            let pimg=document.createElement('img');
            let pheart=document.createElement('span');
            let imgcont=document.createElement('div');
            let div2=document.createElement('div');
            let pprice=document.createElement('p');
            let pname=document.createElement('p');
            let pdescription=document.createElement('p');
            let pdate = document.createElement("p")
            

            pimg.src=elem.image;
            pname.innerHTML=elem.name;
            pdescription.innerHTML=elem.description;
            pprice.innerHTML=`₹ ${elem.price}`;
            pheart.innerHTML=`<i class="fa-regular fa-heart"></i>`
            pdate.innerHTML=elem.date;

            div.setAttribute("class","product_card");
            imgcont.setAttribute("class","heartimg")
            pimg.setAttribute("class","product_image")
            pprice.setAttribute("class","product_price item_style");
            pdescription.setAttribute("class","product_city item_style");
            pname.setAttribute("class","product_name item_style");
            pdate.setAttribute("class","product_date");

            div2.setAttribute("class","product_details");

            div.onclick=()=>{
                console.log("click")
            }
            div2.append(pprice,pname,pdescription,pdate)
            imgcont.append(pimg,pheart)
            div.append(imgcont,div2)
            cont.append(div)
        });
    }


    const productContainers = [...document.querySelectorAll('#container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})