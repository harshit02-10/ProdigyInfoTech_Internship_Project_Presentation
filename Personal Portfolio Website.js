// Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Typing Effect
const text = ["Web Developer", "Frontend Developer", "JavaScript Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000);
    } else {
        setTimeout(type, 100);
    }
})();

// Project Filter
function filterProjects(category) {
    const projects = document.querySelectorAll(".project");
    projects.forEach(project => {
        if (category === "all") {
            project.style.display = "block";
        } else {
            project.style.display =
                project.classList.contains(category) ? "block" : "none";
        }
    });
}

// Contact Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
        return false;
    } else {
        alert("Message Sent Successfully ✅");
        return true;
    }
}