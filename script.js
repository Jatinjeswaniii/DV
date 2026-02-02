const music = document.getElementById("bgMusic");
const screens = document.querySelectorAll(".screen");
const questions = document.querySelectorAll(".question");
const noBtn = document.getElementById("noBtn");

let qIndex = 0;

function startLove() {
    music.play();
    screens[0].classList.add("hidden");
    screens[1].classList.remove("hidden");
}

function goQuiz() {
    screens[1].classList.add("hidden");
    screens[2].classList.remove("hidden");
}

function nextQ() {
    questions[qIndex].classList.remove("active");
    qIndex++;
    if (questions[qIndex]) {
        questions[qIndex].classList.add("active");
    }
}

function finalYes() {
    screens[2].classList.add("hidden");
    screens[3].classList.remove("hidden");
}

// Funny NO button movement
noBtn.addEventListener("mouseover", () => {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
});
