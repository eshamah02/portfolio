// const textElement = document.getElementById("typewriter-text");
// const text = "hello world...";

// let charIndex = 0;

// function type(callback) {
//     if (charIndex < text.length) {
//         textElement.textContent += text.charAt(charIndex);
//         charIndex++;
//         setTimeout(() => type(callback), 200); // Adjust the time between each character appearance (in milliseconds)
//     } else {
//         // Typewriter effect is done, call the callback function
//         callback();
//     }
// }

// function showRemainingContent() {
//     const fadeElements = document.querySelectorAll(".fade-in");
    
//     // Add the "visible" class to each fade-in element
//     fadeElements.forEach(function(element) {
//         element.classList.add("visible");
//     });

// }

// document.addEventListener("DOMContentLoaded", () => {
//     // Start the typewriter effect and pass the showRemainingContent function as a callback
//     type(showRemainingContent);
// });






var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #F0EBCE}";
    document.body.appendChild(css);
};