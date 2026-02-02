const music = document.getElementById("bgMusic");
const screens = document.querySelectorAll(".screen");
const questions = document.querySelectorAll(".question");
const noButtons = document.querySelectorAll(".no");
const confettiBox = document.getElementById("confetti");

let q = 0;

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
}

function nextQ() {
  questions[q].classList.remove("active");
  q++;
  questions[q].classList.add("active");
}

function finalYes() {
  screens[3].classList.add("hidden");
  screens[4].classList.remove("hidden");
  burstHearts();
}

// NO button runs away 😄
noButtons.forEach(btn => {
  btn.addEventListener("mouseover", () => {
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 80 + "%";
    btn.style.top = Math.random() * 80 + "%";
  });
});

// Heart burst 💥❤️
function burstHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("span");
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "70%";
    confettiBox.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
}
