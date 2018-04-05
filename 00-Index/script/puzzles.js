/*global console,document*/
var w, x, y, z;
function ww(value) {
    "use strict";
    w = value;
}
function xx(value) {
    "use strict";
    if (value === w) {
        return xx(Math.floor(Math.random() * 4) + 1);
    } else {
        x = value;
    }
}
function yy(value) {
    "use strict";
    if (value === w || value === x) {
        return yy(Math.floor(Math.random() * 4) + 1);
    } else {
        y = value;
    }
}
function zz(value) {
    "use strict";
    if (value === w || value === x || value === y) {
        return zz(Math.floor(Math.random() * 4) + 1);
    } else {
        z = value;
    }
}
ww(Math.floor(Math.random() * 4) + 1);
xx(Math.floor(Math.random() * 4) + 1);
yy(Math.floor(Math.random() * 4) + 1);
zz(Math.floor(Math.random() * 4) + 1);
  //Puzzle1........
document.getElementById('SpanId1' + w).innerHTML = '3 , 3 And 8';
document.getElementById('SpanId1' + x).innerHTML = '3 , 4 And 6';
document.getElementById('SpanId1' + y).innerHTML = '1 , 4 And 18';
document.getElementById('SpanId1' + z).innerHTML = '2 , 2 And 18';
function Answer1() {
    "use strict";
    var Chose1 = document.getElementById('DivId1' + w);
    document.getElementById("DivAnswer1").classList = "DivAnswer-1";
    if (Chose1.checked === true) {
        document.getElementById("DivAnswer1").innerHTML = "Correct answer";
    } else {
        document.getElementById("DivAnswer1").innerHTML = "Wrong answer";
    }
}
//Puzzle2........
document.getElementById('SpanId2' + x).innerHTML = '33.333';
document.getElementById('SpanId2' + w).innerHTML = '31.333';
document.getElementById('SpanId2' + y).innerHTML = '34.333';
document.getElementById('SpanId2' + z).innerHTML = '32.333';
function Answer2() {
    "use strict";
    var Chose2 = document.getElementById('DivId2' + x);
    document.getElementById("DivAnswer2").classList = "DivAnswer-1";
    if (Chose2.checked === true) {
        document.getElementById("DivAnswer2").innerHTML = "Correct answer";
    } else {
        document.getElementById("DivAnswer2").innerHTML = "Wrong answer";
    }
}
//Puzzle3........
document.getElementById('SpanId3' + w).innerHTML = '34,55,89';
document.getElementById('SpanId3' + x).innerHTML = '27,39,50';
document.getElementById('SpanId3' + y).innerHTML = '32,43.54';
document.getElementById('SpanId3' + z).innerHTML = '34,54,99';
function Answer3() {
    "use strict";
    var Chose1 = document.getElementById('DivId3' + w);
    document.getElementById("DivAnswer3").classList = "DivAnswer-1";
    if (Chose1.checked === true) {
        document.getElementById("DivAnswer3").innerHTML = "Correct answer";
    } else {
        document.getElementById("DivAnswer3").innerHTML = "Wrong answer";
    }
}
//Puzzle4........
document.getElementById('SpanId4' + y).innerHTML = '11';
document.getElementById('SpanId4' + x).innerHTML = '9';
document.getElementById('SpanId4' + w).innerHTML = '10';
document.getElementById('SpanId4' + z).innerHTML = '8';
function Answer4() {
    "use strict";
    var Chose1 = document.getElementById('DivId4' + y);
    document.getElementById("DivAnswer4").classList = "DivAnswer-1";
    if (Chose1.checked === true) {
        document.getElementById("DivAnswer4").innerHTML = "Correct answer";
    } else {
        document.getElementById("DivAnswer4").innerHTML = "Wrong answer";
    }
}
//Puzzle5........
document.getElementById('SpanId5' + z).innerHTML = 'Silence';
document.getElementById('SpanId5' + x).innerHTML = 'Sea';
document.getElementById('SpanId5' + y).innerHTML = 'Wave';
document.getElementById('SpanId5' + w).innerHTML = 'Egyptian citizen';
function Answer5() {
    "use strict";
    var Chose1 = document.getElementById('DivId5' + z);
    document.getElementById("DivAnswer5").classList = "DivAnswer-1";
    if (Chose1.checked === true) {
        document.getElementById("DivAnswer5").innerHTML = "Correct answer";
    } else {
        document.getElementById("DivAnswer5").innerHTML = "Wrong answer";
    }
}
//Puzzles Blocks....
var P1 = false,
    P2 = false,
    P3 = false,
    P4 = false,
    P5 = false;
function p1() {
    "use strict";
    if (P1 === false) {
        document.getElementById("p1").className = "fullblock";
        document.getElementById("p2").className = "hide";
        document.getElementById("p3").className = "hide";
        document.getElementById("p4").className = "hide";
        document.getElementById("p5").className = "hide";
        document.getElementById("Puzzle1").className = "Puzzle-Visibal";
        P1 = true;
    } else {
        document.getElementById("p1").className = "blocks";
        document.getElementById("p2").className = "blocks";
        document.getElementById("p3").className = "blocks";
        document.getElementById("p4").className = "blocks";
        document.getElementById("p5").className = "blocks";
        document.getElementById("Puzzle1").className = "Puzzle-Hidden";
        P1 = false;
    }

}
function p2() {
    "use strict";
    if (P2 === false) {
        document.getElementById("p1").className = "hide";
        document.getElementById("p2").className = "fullblock";
        document.getElementById("p3").className = "hide";
        document.getElementById("p4").className = "hide";
        document.getElementById("p5").className = "hide";
        document.getElementById("Puzzle2").className = "Puzzle-Visibal";
        P2 = true;
    } else {
        document.getElementById("p1").className = "blocks";
        document.getElementById("p2").className = "blocks";
        document.getElementById("p3").className = "blocks";
        document.getElementById("p4").className = "blocks";
        document.getElementById("p5").className = "blocks";
        document.getElementById("Puzzle2").className = "Puzzle-Hidden";
        P2 = false;
    }

}
function p3() {
    "use strict";
    if (P3 === false) {
        document.getElementById("p1").className = "hide";
        document.getElementById("p2").className = "hide";
        document.getElementById("p3").className = "fullblock";
        document.getElementById("p4").className = "hide";
        document.getElementById("p5").className = "hide";
        document.getElementById("Puzzle3").className = "Puzzle-Visibal";
        P3 = true;
    } else {
        document.getElementById("p1").className = "blocks";
        document.getElementById("p2").className = "blocks";
        document.getElementById("p3").className = "blocks";
        document.getElementById("p4").className = "blocks";
        document.getElementById("p5").className = "blocks";
        document.getElementById("Puzzle3").className = "Puzzle-Hidden";
        P3 = false;
    }

}
function p4() {
    "use strict";
    if (P4 === false) {
        document.getElementById("p1").className = "hide";
        document.getElementById("p2").className = "hide";
        document.getElementById("p3").className = "hide";
        document.getElementById("p4").className = "fullblock";
        document.getElementById("p5").className = "hide";
        document.getElementById("Puzzle4").className = "Puzzle-Visibal";
        P4 = true;
    } else {
        document.getElementById("p1").className = "blocks";
        document.getElementById("p2").className = "blocks";
        document.getElementById("p3").className = "blocks";
        document.getElementById("p4").className = "blocks";
        document.getElementById("p5").className = "blocks";
        document.getElementById("Puzzle4").className = "Puzzle-Hidden";
        P4 = false;
    }

}
function p5() {
    "use strict";
    if (P5 === false) {
        document.getElementById("p1").className = "hide";
        document.getElementById("p2").className = "hide";
        document.getElementById("p3").className = "hide";
        document.getElementById("p4").className = "hide";
        document.getElementById("p5").className = "fullblock";
        document.getElementById("Puzzle5").className = "Puzzle-Visibal";
        P5 = true;
    } else {
        document.getElementById("p1").className = "blocks";
        document.getElementById("p2").className = "blocks";
        document.getElementById("p3").className = "blocks";
        document.getElementById("p4").className = "blocks";
        document.getElementById("p5").className = "blocks";
        document.getElementById("Puzzle5").className = "Puzzle-Hidden";
        P5 = false;
    }

}
