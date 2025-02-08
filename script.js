// Toggle Mobile Menu
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// Skill Bar Slowing on Hover
document.querySelector('.skill-bar').addEventListener('mouseenter', () => {
    document.querySelector('.skills').style.animationDuration = "30s";
});

document.querySelector('.skill-bar').addEventListener('mouseleave', () => {
    document.querySelector('.skills').style.animationDuration = "15s";
});

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollSmoother);

    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5, // Adjust for smoother scrolling (1 = default, higher = smoother)
        effects: true
    });

    console.log("GSAP ScrollSmoother initialized!"); // Debugging
});
