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

/* NO button escapes BEFORE click (hover + touch) */
noButtons.forEach(btn => {

  const moveButton = () => {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 160 - 80;
    btn.style.transform = `translate(${x}px, ${y}px)`;
  };

  btn.addEventListener("mouseenter", moveButton);   // desktop
  btn.addEventListener("touchstart", moveButton);   // mobile
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
