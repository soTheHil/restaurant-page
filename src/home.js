export default createHome;

function createHome() {
    let home = document.createElement("div");
    home.setAttribute("id","home");

    let h1 = document.createElement("h1");
    h1.innerText = "East Eden";

    let desc = document.createElement("div");
    let p = document.createElement("p");
    p.innerText = "East Eden is home to the finest dishes prepared across Asia";
    desc.appendChild(p);

    let hours = document.createElement("div");
    hours.appendChild(elt("h2","Hours"));
    hours.appendChild(elt("ul",
        elt("li","Sunday: 8am - 8pm"),
        elt("li","Monday: 6am - 6pm"),
        elt("li","Tuesday: 6am - 6pm"),
        elt("li","Wednesday: 6am - 6pm"),
        elt("li","Thursday: 6am - 6pm"),
        elt("li","Friday: 6am - 6pm"),
        elt("li","Saturday: 8am - 10pm")
    ));

    let location = elt("div",
    elt("h2","Location"),
    elt("p","232 Azhar Street, Nekko, Laine"));
    
    function elt(type, ...children) {
        let node = document.createElement(type);
        for (let child of children){
            if (typeof child != "string") node.appendChild(child);
            else node.appendChild(document.createTextNode(child));
        }
        return node;
    }

    let elements = [h1, desc, hours, location];

    for (let el of elements) {
        home.appendChild(el);
    }

    return home;
}