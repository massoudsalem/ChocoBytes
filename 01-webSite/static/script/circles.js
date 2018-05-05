/* global document */
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
