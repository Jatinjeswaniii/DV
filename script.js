const music = document.getElementById("bgMusic");
const screens = document.querySelectorAll(".screen");
const questions = document.querySelectorAll(".question");
const noButtons = document.querySelectorAll(".no");
const confettiBox = document.getElementById("confetti");

let qIndex = 0;

function startLove() {
  music.play();
  screens[0].classList.add("hidden");
  screens[1].classList.remove("hidden");
}

function goStory() {
  screens[1].classList.add("hidden");
  screens[2].classList.remove("hidden");
}

function goQuiz() {
  screens[2].classList.add("hidden");
  screens[3].classList.remove("hidden");
  questions[0].classList.add("active");
}

function nextQ() {
  questions[qIndex].classList.remove("active");
  qIndex++;
  if (questions[qIndex]) {
    questions[qIndex].classList.add("active");
  }
}

function finalYes() {
  screens[3].classList.add("hidden");
  screens[4].classList.remove("hidden");
  burstHearts();
}

/* NO button moves but stays clickable */
noButtons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform =
      `translate(${Math.random() * 120 - 60}px, ${Math.random() * 120 - 60}px)`;
  });
});

/* HEART BURST ❤️ */
function burstHearts() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("span");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "65%";
    confettiBox.appendChild(heart);

    setTimeout(() => heart.remove(), 2300);
  }
}
