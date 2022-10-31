
import './style.css';
import createHome from './home.js';
import createMenu from './menu.js';
import createContact from './contact.js';

let content = document.querySelector("#content");

let header = document.createElement("header");
let nav = document.createElement("nav");
let ul = document.createElement("ul");

let home = document.createElement("li");
home.innerText = "Home";
let menu = document.createElement("li");
menu.innerText = "Menu";
let contact = document.createElement("li");
contact.innerText = "Contact";

ul.appendChild(home);
ul.appendChild(menu);
ul.appendChild(contact);
//test button
// let button = document.createElement("button");
// button.innertext = "test";
// button.addEventListener("click", initMap);
// ul.appendChild(button);


nav.appendChild(ul);
header.appendChild(nav);
document.body.insertBefore(header, content);

let homePage = createHome();
        content.appendChild(homePage);

//create map

var mapRest = document.createElement("div");
mapRest.setAttribute("id","map");
mapRest.className="hidden";
//let contact = document.querySelector("#contact")
homePage.appendChild(mapRest);
//  let contactPage = createContact();
//  contactPage.appendChild(mapRest);
var map_parameters = { center: {lat: 47.490, lng: -117.585}, zoom: 8 };
var map = new google.maps.Map(document.getElementById('map'), map_parameters);
document.body.appendChild(mapRest);
//event listeners

home.addEventListener("click", () => {
    let child = content.querySelector("div");
    if (child == null) {
        let homePage = createHome();
        content.appendChild(homePage);
    } 
    else if(child.getAttribute("id")!="home") {
        child.remove();
        let homePage = createHome();
        //homePage.appendChild(mapRest);
        content.appendChild(homePage);
        mapRest.className="hidden";
    } else return;
});

menu.addEventListener("click",()=> {
    let child = content.querySelector("div");
    if (child.getAttribute("id")!="menu") {
        child.remove();
        let menuPage = createMenu();
        mapRest.className="hidden";
        content.appendChild(menuPage);
    } else return;
});

contact.addEventListener("click",()=> {
    let child = content.querySelector("div");
    if (child.getAttribute("id")!="contact") {
        child.remove();
        let contactPage = createContact();
        mapRest.className="block";
         //contactPage.appendChild(mapRest);
        content.appendChild(contactPage);
    } else return;
});





