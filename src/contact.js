export default createContact;

function createContact(){
    function elt(type, ...children) {
        let node = document.createElement(type);
        for (let child of children){
            if (typeof child != "string") node.appendChild(child);
            else node.appendChild(document.createTextNode(child));
        }
        return node;
    }
    //contact page
    let contact = document.createElement("div");
    contact.setAttribute("id","contact");

    contact.appendChild(elt("h1","Contact"));
    let chef = elt("div",
        elt("h2","Joey Jojo"),
        elt("p","Chef"),
        elt("p","555-555-5554"),
        elt("p","Email@notFake.com")
    );

    let manager = elt("div",
        elt("h2", "Yoyo man"),
        elt("p", "Manager"),
        elt("p","555-555-5555"),
        elt("p","Email@notFake.com")
    );

    let waiter = elt("div",
    elt("h2", "Uzumaki boy"),
    elt("p", "Waiter"),
    elt("p","555-455-5555"),
    elt("p","Email@notFake.com")
);
//create map

let divs = [chef, manager, waiter];
divs.forEach(elt => {
    contact.appendChild(elt);
});


// function initMap(){
//     let mapRest = document.createElement("div");
// mapRest.setAttribute("id","map");
// contact.appendChild(mapRest);

// var map_parameters = { center: {lat: 47.490, lng: -117.585}, zoom: 8 };
// var map = new google.maps.Map(document.getElementById('map'), map_parameters);
// }

// initMap();
  
return contact;
}