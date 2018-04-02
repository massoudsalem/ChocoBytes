/*global document*/
//List Manu
var open = 1,
    close = 0;
function OpenList() {
    "use strict";
    if (open > close){
    document.getElementById("list-id").style.height = "50%";
    document.getElementById("list-id").style.width = "20%";
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
var x1 = 1,
    y1 = 0,
    x2 = 1,
    y2 = 0,
    x3 = 1,
    y3 = 0,
    x4 = 1,
    y4 = 0,
    x5 = 1,
    y5 = 0,
    x6 = 1,
    y6 = 0;
function Cplusplus() {
    "use strict";
    if (x1 > y1) {
        document.getElementById("Cplusplus").style.width = "30%";
        document.getElementById("Cplusplus").style.height = "50%";
        document.getElementById("Cplusplus").style.marginLeft = "35%";
        document.getElementById("Java").style.width = "0";
        document.getElementById("Csharp").style.width = "0";
        document.getElementById("Scratch").style.width = "0";
        document.getElementById("Web").style.width = "0";
        document.getElementById("APDim").style.width = "0";
        document.getElementById("Java").style.height = "0";
        document.getElementById("Csharp").style.height = "0";
        document.getElementById("Scratch").style.height = "0";
        document.getElementById("Web").style.height = "0";
        document.getElementById("APDim").style.height = "0";
        document.getElementById("Java").style.marginLeft = "0";
        document.getElementById("Csharp").style.marginLeft = "0";
        document.getElementById("Scratch").style.marginLeft = "0";
        document.getElementById("Web").style.marginLeft = "0";
        document.getElementById("APDim").style.marginLeft = "0";
        y1 = y1 +1;
    } else {
        document.getElementById("APDim").style.width = "60px";
        document.getElementById("APDim").style.height = "60px";
        document.getElementById("Java").style.width = "60px";
        document.getElementById("Csharp").style.width = "60px";
        document.getElementById("Scratch").style.width = "60px";
        document.getElementById("Web").style.width = "60px";
        document.getElementById("Cplusplus").style.width = "60px";
        document.getElementById("Java").style.height = "60px";
        document.getElementById("Csharp").style.height = "60px";
        document.getElementById("Scratch").style.height = "60px";
        document.getElementById("Web").style.height = "60px";
        document.getElementById("Cplusplus").style.height = "60px";
        document.getElementById("APDim").style.margin = "9.5px";
        document.getElementById("Java").style.margin = "9.5px";
        document.getElementById("Csharp").style.margin = "9.5px";
        document.getElementById("Scratch").style.margin = "9.5px";
        document.getElementById("Web").style.margin = "9.5px";
        document.getElementById("Cplusplus").style.margin = "9.5px";
        x1 = x1 +1;
    }

}
function Java() {
    "use strict";
    if (x2 > y2) {
        document.getElementById("Java").style.width = "30%";
    document.getElementById("Java").style.height = "50%";
    document.getElementById("Java").style.marginLeft = "35%";
    document.getElementById("Cplusplus").style.width = "0";
    document.getElementById("Csharp").style.width = "0";
    document.getElementById("Scratch").style.width = "0";
    document.getElementById("Web").style.width = "0";
    document.getElementById("APDim").style.width = "0";
    document.getElementById("Cplusplus").style.height = "0";
    document.getElementById("Csharp").style.height = "0";
    document.getElementById("Scratch").style.height = "0";
    document.getElementById("Web").style.height = "0";
    document.getElementById("APDim").style.height = "0";
    document.getElementById("Cplusplus").style.marginLeft = "0";
    document.getElementById("Csharp").style.marginLeft = "0";
    document.getElementById("Scratch").style.marginLeft = "0";
    document.getElementById("Web").style.marginLeft = "0";
    document.getElementById("APDim").style.marginLeft = "0";
        y2 = y2 +1;
    } else {
        document.getElementById("APDim").style.width = "60px";
    document.getElementById("APDim").style.height = "60px";
    document.getElementById("Java").style.width = "60px";
    document.getElementById("Csharp").style.width = "60px";
    document.getElementById("Scratch").style.width = "60px";
    document.getElementById("Web").style.width = "60px";
    document.getElementById("Cplusplus").style.width = "60px";
    document.getElementById("Java").style.height = "60px";
    document.getElementById("Csharp").style.height = "60px";
    document.getElementById("Scratch").style.height = "60px";
    document.getElementById("Web").style.height = "60px";
    document.getElementById("Cplusplus").style.height = "60px";
    document.getElementById("APDim").style.margin = "9.5px";
    document.getElementById("Java").style.margin = "9.5px";
    document.getElementById("Csharp").style.margin = "9.5px";
    document.getElementById("Scratch").style.margin = "9.5px";
    document.getElementById("Web").style.margin = "9.5px";
    document.getElementById("Cplusplus").style.margin = "9.5px";
        x2 = x2 +1;
    }

}
function Csharp() {
    "use strict";
    if (x3 > y3) {
    document.getElementById("Csharp").style.width = "30%";
    document.getElementById("Csharp").style.height = "50%";
    document.getElementById("Csharp").style.marginLeft = "35%";
    document.getElementById("Java").style.width = "0";
    document.getElementById("Cplusplus").style.width = "0";
    document.getElementById("Scratch").style.width = "0";
    document.getElementById("Web").style.width = "0";
    document.getElementById("APDim").style.width = "0";
    document.getElementById("Java").style.height = "0";
    document.getElementById("Cplusplus").style.height = "0";
    document.getElementById("Scratch").style.height = "0";
    document.getElementById("Web").style.height = "0";
    document.getElementById("APDim").style.height = "0";
    document.getElementById("Java").style.marginLeft = "0";
    document.getElementById("Cplusplus").style.marginLeft = "0";
    document.getElementById("Scratch").style.marginLeft = "0";
    document.getElementById("Web").style.marginLeft = "0";
    document.getElementById("APDim").style.marginLeft = "0";
        y3 = y3 +1;
    } else {
        document.getElementById("APDim").style.width = "60px";
    document.getElementById("APDim").style.height = "60px";
    document.getElementById("Java").style.width = "60px";
    document.getElementById("Csharp").style.width = "60px";
    document.getElementById("Scratch").style.width = "60px";
    document.getElementById("Web").style.width = "60px";
    document.getElementById("Cplusplus").style.width = "60px";
    document.getElementById("Java").style.height = "60px";
    document.getElementById("Csharp").style.height = "60px";
    document.getElementById("Scratch").style.height = "60px";
    document.getElementById("Web").style.height = "60px";
    document.getElementById("Cplusplus").style.height = "60px";
    document.getElementById("APDim").style.margin = "9.5px";
    document.getElementById("Java").style.margin = "9.5px";
    document.getElementById("Csharp").style.margin = "9.5px";
    document.getElementById("Scratch").style.margin = "9.5px";
    document.getElementById("Web").style.margin = "9.5px";
    document.getElementById("Cplusplus").style.margin = "9.5px";
        x3 = x3 +1;
    }
}
function Scratch() {
    "use strict";
    if (x4 > y4) {
    document.getElementById("Scratch").style.width = "30%";
    document.getElementById("Scratch").style.height = "50%";
    document.getElementById("Scratch").style.marginLeft = "35%";
    document.getElementById("Java").style.width = "0";
    document.getElementById("Csharp").style.width = "0";
    document.getElementById("Cplusplus").style.width = "0";
    document.getElementById("Web").style.width = "0";
    document.getElementById("APDim").style.width = "0";
    document.getElementById("Java").style.height = "0";
    document.getElementById("Csharp").style.height = "0";
    document.getElementById("Cplusplus").style.height = "0";
    document.getElementById("Web").style.height = "0";
    document.getElementById("APDim").style.height = "0";
    document.getElementById("Java").style.marginLeft = "0";
    document.getElementById("Csharp").style.marginLeft = "0";
    document.getElementById("Cplusplus").style.marginLeft = "0";
    document.getElementById("Web").style.marginLeft = "0";
    document.getElementById("APDim").style.marginLeft = "0";
        y4 = y4 +1;
    } else {
        document.getElementById("APDim").style.width = "60px";
    document.getElementById("APDim").style.height = "60px";
    document.getElementById("Java").style.width = "60px";
    document.getElementById("Csharp").style.width = "60px";
    document.getElementById("Scratch").style.width = "60px";
    document.getElementById("Web").style.width = "60px";
    document.getElementById("Cplusplus").style.width = "60px";
    document.getElementById("Java").style.height = "60px";
    document.getElementById("Csharp").style.height = "60px";
    document.getElementById("Scratch").style.height = "60px";
    document.getElementById("Web").style.height = "60px";
    document.getElementById("Cplusplus").style.height = "60px";
    document.getElementById("APDim").style.margin = "9.5px";
    document.getElementById("Java").style.margin = "9.5px";
    document.getElementById("Csharp").style.margin = "9.5px";
    document.getElementById("Scratch").style.margin = "9.5px";
    document.getElementById("Web").style.margin = "9.5px";
    document.getElementById("Cplusplus").style.margin = "9.5px";
        x4 = x4 +1;
    }
}
function Web() {
    "use strict";
    if (x5 > y5) {
    document.getElementById("Web").style.width = "30%";
    document.getElementById("Web").style.height = "50%";
    document.getElementById("Web").style.marginLeft = "35%";
    document.getElementById("Java").style.width = "0";
    document.getElementById("Csharp").style.width = "0";
    document.getElementById("Scratch").style.width = "0";
    document.getElementById("Cplusplus").style.width = "0";
    document.getElementById("APDim").style.width = "0";
    document.getElementById("Java").style.height = "0";
    document.getElementById("Csharp").style.height = "0";
    document.getElementById("Scratch").style.height = "0";
    document.getElementById("Cplusplus").style.height = "0";
    document.getElementById("APDim").style.height = "0";
    document.getElementById("Java").style.marginLeft = "0";
    document.getElementById("Csharp").style.marginLeft = "0";
    document.getElementById("Scratch").style.marginLeft = "0";
    document.getElementById("Cplusplus").style.marginLeft = "0";
    document.getElementById("APDim").style.marginLeft = "0";
        y5 = y5 +1;
    } else {
        document.getElementById("APDim").style.width = "60px";
    document.getElementById("APDim").style.height = "60px";
    document.getElementById("Java").style.width = "60px";
    document.getElementById("Csharp").style.width = "60px";
    document.getElementById("Scratch").style.width = "60px";
    document.getElementById("Web").style.width = "60px";
    document.getElementById("Cplusplus").style.width = "60px";
    document.getElementById("Java").style.height = "60px";
    document.getElementById("Csharp").style.height = "60px";
    document.getElementById("Scratch").style.height = "60px";
    document.getElementById("Web").style.height = "60px";
    document.getElementById("Cplusplus").style.height = "60px";
    document.getElementById("APDim").style.margin = "9.5px";
    document.getElementById("Java").style.margin = "9.5px";
    document.getElementById("Csharp").style.margin = "9.5px";
    document.getElementById("Scratch").style.margin = "9.5px";
    document.getElementById("Web").style.margin = "9.5px";
    document.getElementById("Cplusplus").style.margin = "9.5px";
        x5 = x5 +1;
    }
}
function APDim() {
    "use strict";
    if (x6 > y6) {
    document.getElementById("APDim").style.width = "30%";
    document.getElementById("APDim").style.height = "50%";
    document.getElementById("APDim").style.marginLeft = "35%";
    document.getElementById("Java").style.width = "0";
    document.getElementById("Csharp").style.width = "0";
    document.getElementById("Scratch").style.width = "0";
    document.getElementById("Web").style.width = "0";
    document.getElementById("Cplusplus").style.width = "0";
    document.getElementById("Java").style.height = "0";
    document.getElementById("Csharp").style.height = "0";
    document.getElementById("Scratch").style.height = "0";
    document.getElementById("Web").style.height = "0";
    document.getElementById("Cplusplus").style.height = "0";
    document.getElementById("Java").style.marginLeft = "0";
    document.getElementById("Csharp").style.marginLeft = "0";
    document.getElementById("Scratch").style.marginLeft = "0";
    document.getElementById("Web").style.marginLeft = "0";
    document.getElementById("Cplusplus").style.marginLeft = "0";
        y6 = y6 +1;
    } else {
        document.getElementById("APDim").style.width = "60px";
    document.getElementById("APDim").style.height = "60px";
    document.getElementById("Java").style.width = "60px";
    document.getElementById("Csharp").style.width = "60px";
    document.getElementById("Scratch").style.width = "60px";
    document.getElementById("Web").style.width = "60px";
    document.getElementById("Cplusplus").style.width = "60px";
    document.getElementById("Java").style.height = "60px";
    document.getElementById("Csharp").style.height = "60px";
    document.getElementById("Scratch").style.height = "60px";
    document.getElementById("Web").style.height = "60px";
    document.getElementById("Cplusplus").style.height = "60px";
    document.getElementById("APDim").style.margin = "9.5px";
    document.getElementById("Java").style.margin = "9.5px";
    document.getElementById("Csharp").style.margin = "9.5px";
    document.getElementById("Scratch").style.margin = "9.5px";
    document.getElementById("Web").style.margin = "9.5px";
    document.getElementById("Cplusplus").style.margin = "9.5px";
        x6 = x6 +1;
    }
}
