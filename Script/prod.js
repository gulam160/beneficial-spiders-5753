
let que=JSON.parse(localStorage.getItem("neProductpage"))||{}

let box=document.getElementById("container")
let img=document.createElement("img")
img.setAttribute("class","banner")
img.src=que.image;
let name=document.createElement("p")
name.innerText=que.name;
let description=document.createElement("p")
description.innerText=que.description;
let date=document.createElement("p")
date.innerText=que.date;
let price=document.createElement("p")
price.innerText=que.price;
box.append(img,description,date,price,name)