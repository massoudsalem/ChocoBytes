/*global document*/
//List Manu
var open = 1,
    close = 0;
function OpenList() {
    "use strict";
    if (open > close){
    document.getElementById("list-id").style.height = "50%";
    document.getElementById("list-id").style.width = "300px";
            close = close +1;
    } else {
        document.getElementById("list-id").style.height = "0%";
        document.getElementById("list-id").style.width = "0%";
        open = open +1;
    }
}
function CloseList() {
    "use strict";
    document.getElementById("list-id").style.height = "0%";
    document.getElementById("list-id").style.width = "0%";
    open = open +1;
}
//End...
//Scroll Navbar
var navbar = document.getElementById("navbar"),
    list = document.getElementById("list-id"),
    scroll = navbar.offsetTop,
    List_scroll = list.offsetTop;

window.onscroll = function Navbar() {
    "use strict";
    if (window.pageYOffset >= scroll) {
        navbar.classList.add("scroll");
    } else {
        navbar.classList.remove("scroll");
    }
    if (window.pageYOffset >= List_scroll) {
        list.classList.add("List_scroll");
    } else {
        list.classList.remove("List_scroll");
    }
};
//End...

//Blocks.....
var x1 = 1,
    y1 = 0;
function Cplusplus() {
    "use strict";
    if (x1 > y1) {
        document.getElementById("Cplusplus").className = "fullblock";
        document.getElementById("Java").className = "hide";
        document.getElementById("Csharp").className = "hide";
        document.getElementById("Scratch").className = "hide";
        document.getElementById("Web").className = "hide";
        y1 = 1;
        x1 = 0;
    } else {
        document.getElementById("Cplusplus").className = "blocks";
        document.getElementById("Java").className = "blocks";
        document.getElementById("Csharp").className = "blocks";
        document.getElementById("Scratch").className = "blocks";
        document.getElementById("Web").className = "blocks";
        x1 = 1;
        y1 = 0;
    }

}
function Java() {
    "use strict";
    if (x1 > y1) {
        document.getElementById("Cplusplus").className = "hide";
        document.getElementById("Java").className = "fullblock";
        document.getElementById("Csharp").className = "hide";
        document.getElementById("Scratch").className = "hide";
        document.getElementById("Web").className = "hide";
        y1 = 1;
        x1 = 0;
    } else {
        document.getElementById("Cplusplus").className = "blocks";
        document.getElementById("Java").className = "blocks";
        document.getElementById("Csharp").className = "blocks";
        document.getElementById("Scratch").className = "blocks";
        document.getElementById("Web").className = "blocks";
        x1 = 1;
        y1 = 0;
    }

}
function Csharp() {
    "use strict";
    if (x1 > y1) {
        document.getElementById("Cplusplus").className = "hide";
        document.getElementById("Java").className = "hide";
        document.getElementById("Csharp").className = "fullblock";
        document.getElementById("Scratch").className = "hide";
        document.getElementById("Web").className = "hide";
        y1 = 1;
        x1 = 0;
    } else {
        document.getElementById("Cplusplus").className = "blocks";
        document.getElementById("Java").className = "blocks";
        document.getElementById("Csharp").className = "blocks";
        document.getElementById("Scratch").className = "blocks";
        document.getElementById("Web").className = "blocks";
        x1 = 1;
        y1 = 0;
    }
}
function Scratch() {
    "use strict";
    if (x1 > y1) {
        document.getElementById("Cplusplus").className = "hide";
        document.getElementById("Java").className = "hide";
        document.getElementById("Csharp").className = "hide";
        document.getElementById("Scratch").className = "fullblock";
        document.getElementById("Web").className = "hide";
        y1 = 1;
        x1 = 0;
    } else {
        document.getElementById("Cplusplus").className = "blocks";
        document.getElementById("Java").className = "blocks";
        document.getElementById("Csharp").className = "blocks";
        document.getElementById("Scratch").className = "blocks";
        document.getElementById("Web").className = "blocks";
        x1 = 1;
        y1 = 0;
    }
}
function Web() {
    "use strict";
    if (x1 > y1) {
        document.getElementById("Cplusplus").className = "hide";
        document.getElementById("Java").className = "hide";
        document.getElementById("Csharp").className = "hide";
        document.getElementById("Scratch").className = "hide";
        document.getElementById("Web").className = "fullblock";
        y1 = 1;
        x1 = 0;
    } else {
        document.getElementById("Cplusplus").className = "blocks";
        document.getElementById("Java").className = "blocks";
        document.getElementById("Csharp").className = "blocks";
        document.getElementById("Scratch").className = "blocks";
        document.getElementById("Web").className = "blocks";
        x1 = 1;
        y1 = 0;
    }
}
