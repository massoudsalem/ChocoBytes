/* global document */     /*
var v = document.getElementById('circle'),
    w = document.getElementById('circleN2'),
    x = document.getElementById('circleN3'),
    y = document.getElementById('circleN4'),
    z = document.getElementById('circleN5');
function fulldata() {
    if (v.classList.contains('circlestyle')) {
        document.getElementById("circle").classList = "circle2";
        document.getElementById("javacontant").classList = "javacontant2";
        document.getElementById("arrow").classList = ("arrow2");
    }
}
function emptydata () {
    if (v.classList.contains('circlestyle')) {
        document.getElementById("circle").classList = "circlestyle";
        document.getElementById("javacontant").classList = "javacontant1";
        document.getElementById("arrow").classList = ("arrow1");
    } else if (w.classList.contains('circlestyle')) {
        document.getElementById("circleN2").classList = "circlestyle";
        document.getElementById("javacontantN2").classList = "javacontant1";
        document.getElementById("arrow").classList = ("arrow1");
    } else if (x.classList.contains('circlestyle')) {
        document.getElementById("circleN3").classList = "circlestyle";
        document.getElementById("javacontantN3").classList = "javacontant1";
        document.getElementById("arrow").classList = ("arrow1");
    } else if (y.classList.contains('circle2')) {
        document.getElementById("circleN4").classList = "circlestyle";
        document.getElementById("javacontantN4").classList = "javacontant1";
        document.getElementById("arrow").classList = ("arrow1");
    } else if (z.classList.contains('circle2')) {
        document.getElementById("circleN5").classList = "circlestyle";
        document.getElementById("javacontantN5").classList = "javacontant1";
        document.getElementById("arrow").classList = ("arrow1");
    }
}
function fulldata2() {
    if (w.classList.contains('circlestyle')) {
        document.getElementById("circleN2").classList = "circle2";
        document.getElementById("javacontantN2").classList = "javacontant2";
        document.getElementById("arrow").classList = ("arrow2");
    }
}
function fulldata3() {
    if (x.classList.contains('circlestyle')) {
        document.getElementById("circleN3").classList = "circle2";
        document.getElementById("javacontantN3").classList = "javacontant2";
        document.getElementById("arrow").classList = ("arrow2");
    }
}
function fulldata4() {
    if (y.classList.contains('circlestyle')) {
        document.getElementById("circleN4").classList = "circle2";
        document.getElementById("javacontantN4").classList = "javacontant2";
        document.getElementById("arrow").classList = ("arrow2");
    }
}
function fulldata5() {
    if (z.classList.contains('circlestyle')) {
        document.getElementById("circleN5").classList = "circle2";
        document.getElementById("javacontantN5").classList = "javacontant2";
        document.getElementById("arrow").classList = ("arrow2");
    }
}
*/
var v = document.getElementById("ID2"),
    w = document.getElementById("ID4"),
    x = document.getElementById("ID6"),
    y = document.getElementById("ID7"),
    z = document.getElementById("ID9"),
    Arrow = document.getElementById("Arrow");
    var spans=document.getElementsByClassName("centercircletxt")
function fullscren2() {
    document.getElementById("id2contact").style.display="block"
    v.classList = "circlefullscren";
    Arrow.classList = "Arrow2";
    spans[1].style.top="0"
}
function fullscren4() {
  document.getElementById("id4contact").style.display="block"
    w.classList = "circlefullscren";
    Arrow.classList = "Arrow2";
    spans[3].style.top="0"
}
function fullscren6() {
  document.getElementById("id6contact").style.display="block"
    x.classList = "circlefullscren";
    Arrow.classList = "Arrow2";
    spans[5].style.top="0"
}
function fullscren7() {
  document.getElementById("id7contact").style.display="block"
    y.classList = "circlefullscren";
    Arrow.classList = "Arrow2";
    spans[6].style.top="0"
}
function fullscren9() {
  document.getElementById("id9contact").style.display="block"
    z.classList = "circlefullscren";
    Arrow.classList = "Arrow2";
    spans[8].style.top="0"
}
function ArrowToClose() {
    v.classList = "circlegridelement circlestyle";
    w.classList = "circlegridelement circlestyle";
    x.classList = "circlegridelement circlestyle";
    y.classList = "circlegridelement circlestyle";
    z.classList = "circlegridelement circlestyle";
    document.getElementById("id2contact").style.display="none"
    document.getElementById("id4contact").style.display="none"
    document.getElementById("id6contact").style.display="none"
    document.getElementById("id7contact").style.display="none"
    document.getElementById("id9contact").style.display="none"
    spans[0].style.top="35%"
    spans[1].style.top="35%"
    spans[2].style.top="35%"
    spans[3].style.top="35%"
    spans[5].style.top="35%"
    spans[6].style.top="35%"
    spans[7].style.top="35%"
    spans[8].style.top="35%"
    Arrow.classList = "Arrow1";
}
