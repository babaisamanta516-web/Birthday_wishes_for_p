function showSurprise() {

    const surprise = document.getElementById("surprise");

    surprise.scrollIntoView({
        behavior: "smooth"
    });

    createConfetti();
}


function createConfetti() {

    for (let i = 0; i < 60; i++) {

        const confetti = document.createElement("div");

        confetti.innerHTML =
            ["💖", "✨", "🎉", "💕", "🌸"][Math.floor(Math.random() * 5)];

        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.top = "-20px";
        confetti.style.fontSize =
            (15 + Math.random() * 20) + "px";

        confetti.style.zIndex = "9999";

        document.body.appendChild(confetti);

        const duration = 2000 + Math.random() * 3000;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration,
                easing: "ease-out"
            }
        );

        setTimeout(() => {
            confetti.remove();
        }, duration);
    }
}
let blownCandles = 0;


/* OPEN GIFT */

function openGift() {

    const gift = document.getElementById("giftArea");
    const cake = document.getElementById("cakeArea");

    gift.style.display = "none";

    cake.style.display = "block";

    cake.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* BLOW CANDLE */

function blowCandle(candle) {

    if (candle.classList.contains("blown")) {
        return;
    }

    candle.classList.add("blown");

    blownCandles++;

    if (blownCandles === 3) {

        document.getElementById("candleText").style.display =
            "none";

        setTimeout(() => {

            document.getElementById("cakeArea").style.display =
                "none";

            document.getElementById("birthdayMessage").style.display =
                "block";

            createConfetti();

        }, 700);
    }
}
/* =========================
   MEMORY PHOTO SLIDER
========================= */

const photos = [
    "images/p1.jpg",
    "images/p2.jpg",
    "images/p3.jpg",
    "images/p4.jpg",
    "images/p5.jpg"
];

let currentPhoto = 0;

const memoryPhoto =
    document.getElementById("memoryPhoto");

const photoDots =
    document.getElementById("photoDots");


/* CREATE DOTS */

photos.forEach((photo, index) => {

    const dot = document.createElement("div");

    dot.classList.add("photo-dot");

    if (index === 0) {
        dot.classList.add("active");
    }

    dot.onclick = () => {
        currentPhoto = index;
        changePhoto();
    };

    photoDots.appendChild(dot);
});


/* CHANGE PHOTO */

function changePhoto() {

    memoryPhoto.style.opacity = "0";
    memoryPhoto.style.transform = "scale(0.96)";

    setTimeout(() => {

        memoryPhoto.src = photos[currentPhoto];

        memoryPhoto.style.opacity = "1";
        memoryPhoto.style.transform = "scale(1)";

    }, 150);


    document
        .querySelectorAll(".photo-dot")
        .forEach((dot, index) => {

            dot.classList.toggle(
                "active",
                index === currentPhoto
            );

        });
}


/* NEXT */

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    changePhoto();
}


/* PREVIOUS */

function prevPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    changePhoto();
}