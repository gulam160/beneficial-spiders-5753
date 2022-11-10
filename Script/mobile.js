
let url=`http://localhost:3000/mobile`
let getData=async()=>{
    let res=await fetch(url);
    res=await res.json();
    console.log(res)
    rendorDom(res)

}

getData()

let Createelem=(tag)=>{
    return document.createElement(tag);
}

let card=({name,price,city,image})=>{
    let div=Createelem('div');
    let pimg=Createelem('img');
    let pheart=Createelem('span');
    let imgcont=Createelem('div');
    let div2=Createelem('div');
    let pprice=Createelem('p');
    let pname=Createelem('p');
    let pcity=Createelem('p');

    pimg.src=image;
    pname.innerHTML=name;
    pcity.innerHTML=city;
    pprice.innerHTML=`₹ ${price}`;
    pheart.innerHTML=`<i class="ri-heart-line"></i>`

    div.setAttribute("class","product_card");
    imgcont.setAttribute("class","heartimg")
    pimg.setAttribute("class","product_image")
    pprice.setAttribute("class","product_price item_style");
    pcity.setAttribute("class","product_city item_style");
    pname.setAttribute("class","product_name item_style");


    div2.setAttribute("class","product_details");


    div.onclick=()=>{
        console.log("click")
    }
    div2.append(pprice,pname,pcity)
    imgcont.append(pimg,pheart)
    div.append(imgcont,div2)
    return div


}


let rendorDom=(data)=>{
    let cont=document.getElementById("container");
    cont.innerHTML=null;
    data.forEach((el) => {
      //  console.log(el)
        let product=card(el);
        cont.append(product)
    });
}

//----------------------------------------

document.getElementById("_up_mob").style.display="none";
let downMob=document.getElementById("_down_mob").addEventListener("click",()=>{
    let upMob=document.getElementById("_up_mob").style.display="block";
    let upMob2=document.getElementById("_down_mob").style.display="none";
    let mobsec=document.getElementById("mob_section").style.display="none"
})

let upMob=document.getElementById("_up_mob").addEventListener("click",()=>{
    
    let upMob2=document.getElementById("_down_mob").style.display="block";
    let downMob=document.getElementById("_up_mob").style.display="none";
    let mobsec=document.getElementById("mob_section").style.display="block"
   
})

//--------------------------------------------------------------------

