// console.log("JavaScript is working!");

// Theme Toggle Functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        themeToggle.textContent = "Switch to Dark Mode";
    }
});

// Dynamic Font Size Adjustment
const increaseFont = document.getElementById("increaseFont");
const decreaseFont = document.getElementById("decreaseFont");
let fontSize = 16; // Default font size in px

increaseFont.addEventListener("click", () => {
    fontSize += 2;
    document.documentElement.style.fontSize = `${fontSize}px`;
});

decreaseFont.addEventListener("click", () => {
    fontSize = Math.max(12, fontSize - 2); // Minimum font size is 12px
    document.documentElement.style.fontSize = `${fontSize}px`;
});

// Alert for Navigation (Optional)
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        alert(`Navigating to ${link.textContent}`);
    });
});



// document.addEventListener("DOMContentLoaded", () => {
//     const themeToggle = document.getElementById("themeToggle");
//     const increaseFont = document.getElementById("increaseFont");
//     const decreaseFont = document.getElementById("decreaseFont");
//     let fontSize = 16;

//     // Toggle Dark Mode
//     themeToggle.addEventListener("click", () => {
//         document.body.classList.toggle("dark-theme");
//     });

//     // Increase Font Size
//     increaseFont.addEventListener("click", () => {
//         fontSize += 2;
//         document.body.style.fontSize = `${fontSize}px`;
//     });

//     // Decrease Font Size
//     decreaseFont.addEventListener("click", () => {
//         if (fontSize > 12) {
//             fontSize -= 2;
//             document.body.style.fontSize = `${fontSize}px`;
//         }
//     });
// });
