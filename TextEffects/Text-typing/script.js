const text = "This is a typing animation.";
let index = 0;

function typeText() {
  if (index < text.length) {
    document.getElementById("typingText").textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();
