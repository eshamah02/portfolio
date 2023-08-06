const textElement = document.getElementById("typewriter-text");
const text = "hello world...";

let charIndex = 0;

function type(callback) {
    if (charIndex < text.length) {
        textElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(() => type(callback), 150); // Adjust the time between each character appearance (in milliseconds)
    } else {
        // Typewriter effect is done, call the callback function
        callback();
    }
}

function showRemainingContent() {
    const notTypewriter = document.getElementById("not-typewriter");
    notTypewriter.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    // Start the typewriter effect and pass the showRemainingContent function as a callback
    type(showRemainingContent);
});
