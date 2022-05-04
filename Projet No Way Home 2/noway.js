var btn1 = document.getElementById('button1');
var btn2 = document.getElementById('button2');
var btn3 = document.getElementById('button3');
var btn4 = document.getElementById('button4');
var btn5 = document.getElementById('button5');
var btn6 = document.getElementById('button6');
var btn7 = document.getElementById('button7');


function myOverbtn1() {
    btn1.style.backgroundColor = 'rgba(0,0,0,0)';
    btn1.style.border = 'solid 2px white';
    btn1.style.color = '#fff';
    btn1.style.fontWeight = 'bold';
}

function myLeavebtn1() {
    btn1.style.backgroundColor = '#fff';
    btn1.style.color = '#b11313';
}

function myOverbtn2() {
    btn2.style.backgroundColor = '#fff';
    btn2.style.color = '#b11313';
    btn2.style.fontWeight = 'bold';
}

function myLeavebtn2() {
    btn2.style.backgroundColor = 'rgba(0,0,0,0)';
    btn2.style.color = '#fff';
}

function myOverbtn3() {
    btn3.style.backgroundColor = 'rgba(0,0,0,0)';
    btn3.style.border = 'solid 2px white';
    btn3.style.color = '#fff';
    btn3.style.fontWeight = 'bold';
}

function myLeavebtn3() {
    btn3.style.backgroundColor = '#fff';
    btn3.style.color = '#b11313';

}

function myOverbtn4() {
    btn4.style.backgroundColor = 'rgba(0,0,0,0)';
    btn4.style.border = 'solid 2px white';
    btn4.style.color = '#fff';
    btn4.style.fontWeight = 'bold';
}

function myLeavebtn4() {
    btn4.style.backgroundColor = '#fff';
    btn4.style.color = '#b11313';

}

function myOverbtn5() {
    btn5.style.backgroundColor = 'rgba(0,0,0,0)';
    btn5.style.border = 'solid 2px white';
    btn5.style.color = '#fff';
    btn5.style.fontWeight = 'bold';
}

function myLeavebtn5() {
    btn5.style.backgroundColor = '#fff';
    btn5.style.color = '#b11313';

}

function myOverbtn6() {
    btn6.style.backgroundColor = '#fff';
    btn6.style.color = '#114c92';
    btn6.style.fontWeight = 'bold';
}

function myLeavebtn6() {
    btn6.style.backgroundColor = 'rgba(0,0,0,0)';
    btn6.style.color = '#fff';
}

function myOverbtn7() {
    btn7.style.backgroundColor = 'rgba(0,0,0,0)';
    btn7.style.border = 'solid 2px white';
    btn7.style.color = '#fff';
    btn7.style.fontWeight = 'bold';
}

function myLeavebtn7() {
    btn7.style.backgroundColor = '#fff';
    btn7.style.color = 'black';
}

let footericones = document.getElementsByClassName('footer-icones');

for (let i = 0; i < footericones.length; i++) {
    footericones[i].addEventListener('mouseover', () => {
        footericones[i].style.color = 'white';
    });
    footericones[i].addEventListener('mouseout', () => {
        footericones[i].style.color = 'black';

    });
}

let menu = document.querySelectorAll('li');

menu.forEach(function(li) {
    li.addEventListener('mouseover', () => {
        li.style.textDecoration = 'line-through';
    });
    li.addEventListener('mouseout', () => {
        li.style.textDecoration = 'none';
    });

});


//page heros

var slide = new Array("heroslider1.png", "heroslider2.png", "heroslider3.png", "heroslider4.png", "heroslider5.png");
var numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
    setInterval("ChangeSlide(1)", 4000);
}

//page bonus

// Set the date we're counting down to
var countDownDate = new Date("May 7, 2022 20:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);