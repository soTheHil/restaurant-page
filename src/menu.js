export default createMenu;

function createMenu() {
    //create element function
    function elt(type, ...children) {
        let node = document.createElement(type);
        for (let child of children){
            if (typeof child != "string") node.appendChild(child);
            else node.appendChild(document.createTextNode(child));
        }
        return node;
    }
    //create menu page
    let menu = document.createElement("div");
    menu.setAttribute("id", "menu");

    menu.appendChild(elt("h1","Menu"));
    menu.appendChild(elt("h1","Beverages"));

    menu.appendChild(elt("div", elt("h2","Tea"), 
    elt("p","Super tasty tea to keep you warm and healthy"),
    elt("p","$1") 
    ));

    menu.appendChild(elt("div", elt("h2","Coffee"), 
    elt("p","Super tasty coffee to keep you warm and awake"),
    elt("p","$1") 
    ));

    menu.appendChild(elt("h1","Maine Dishes"));

    menu.appendChild(elt("div", elt("h2","Tandoori Chicken"), 
    elt("p","Spicy Indian style chicken with tasty sauce"),
    elt("p","$3") 
    ));
    let svg = document.createElement("div");
    svg.setAttribute("id","svg-div");
menu.appendChild(svg);
    return menu;
}