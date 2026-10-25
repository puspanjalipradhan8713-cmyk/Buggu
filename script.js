// Change between website screens
function nextScreen(screenId) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(screenId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// YES and NO answers
function answer(choice) {
    const message = document.getElementById("answerMessage");

    if (choice === "yes") {
        message.textContent =
            "Achha ji, confidence! 😎 But yaad rakhna, Buggu, tum genuinely special ho. 💙";
    } else {
        message.textContent =
            "Toh sun lo, Buggu! 🥹 Tum apne aap mein special ho. Apni value kabhi mat bhoolna. 💙";
    }

    document.getElementById("questionNext")
        .classList.remove("hidden");
}


// Open surprise gift
function openGift() {
    const box = document.getElementById("giftBox");

    box.textContent = "💖";

    document.getElementById("giftMessage").textContent =
        "Surprise, Buggu! 🎉 Just a little reminder that you deserve happiness and good things. 💙";

    document.getElementById("giftNext")
        .classList.remove("hidden");
}


// Mood selection
function selectMood(mood) {
    const message = document.getElementById("moodMessage");

    const replies = {
        gaming:
            "Game enjoy karo, Buggu! 🎮 Break lena aur paani peena mat bhoolna. 💙",

        chill:
            "Aaj thoda relax bhi banta hai. ☕ Take it easy and enjoy your moment. ✨",

        study:
            "You got this, Buggu! 💻 Ek step at a time. Progress matters! 🌟",

        happy:
            "Yesss! ☺ Tumhari happiness important hai. Keep that smile alive! 💙"
    };

    message.textContent = replies[mood];

    document.getElementById("moodNext")
        .classList.remove("hidden");
}


// Restart the website
function restartWebsite() {
    document.getElementById("giftBox").textContent = "🎁";

    document.getElementById("giftMessage").textContent =
        "Gift box par click karo, Buggu! 💙";

    document.getElementById("giftNext")
        .classList.add("hidden");

    document.getElementById("answerMessage").textContent = "";
    document.getElementById("questionNext")
        .classList.add("hidden");

    document.getElementById("moodMessage").textContent = "";
    document.getElementById("moodNext")
        .classList.add("hidden");

    nextScreen("welcome");
}


// Create glowing stars
const starContainer = document.getElementById("stars");

for (let i = 0; i < 100; i++) {
    const star = document.createElement("span");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay =
        Math.random() * 3 + "s";

    star.style.animationDuration =
        (1 + Math.random() * 3) + "s";

    starContainer.appendChild(star);
}


// Music button
// Actual music can be added later.
document.getElementById("musicBtn").addEventListener("click", () => {
    alert(
        "A little music would make this moment even more special! 🎵"
    );
});