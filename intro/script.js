const titleText = "Hey you 💕";
const messageText = "I made something special for you…";

const titleEl = document.getElementById("title");
const messageEl = document.getElementById("message");
const button = document.getElementById("openBtn");

let index = 0;
let phase = "title";
let clickedOnce = false;

/* TYPEWRITER EFFECT */
function typeText() {
  if (phase === "title") {
    if (index < titleText.length) {
      titleEl.textContent += titleText.charAt(index);
      index++;
      setTimeout(typeText, 80);
    } else {
      phase = "message";
      index = 0;
      setTimeout(typeText, 400);
    }
  } else {
    if (index < messageText.length) {
      messageEl.textContent += messageText.charAt(index);
      index++;
      setTimeout(typeText, 60);
    } else {
      button.classList.add("show");
    }
  }
}

typeText();

/* BUTTON LOGIC */
button.addEventListener("click", () => {
  if (!clickedOnce) {
    button.textContent = "Ready? 💖";
    clickedOnce = true;
  } else {
    window.location.href = "../valentine.html";
  }
});

/* FLOATING HEARTS */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 800);

