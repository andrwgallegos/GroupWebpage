/**
 * Handles navigation between page sections and individual bio toggles.
 * Built to be easy for teammates to maintain and expand.
 */

document.addEventListener("DOMContentLoaded", function () {
    setupSectionNavigation();
    setupBioToggles();
});

/**
 * Adds click behavior for navigation buttons.
 */
function setupSectionNavigation() {
    const navButtons = document.querySelectorAll(".nav-btn");
    const sections = document.querySelectorAll(".section");

    navButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetSectionId = button.dataset.section;

            sections.forEach(function (section) {
                section.classList.add("hidden-section");
                section.classList.remove("active-section");
            });

            navButtons.forEach(function (navBtn) {
                navBtn.classList.remove("active");
            });

            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.classList.remove("hidden-section");
                targetSection.classList.add("active-section");
            }

            button.classList.add("active");
        });
    });
}

/**
 * Adds click behavior for bio expansion buttons.
 */
function setupBioToggles() {
    const toggleButtons = document.querySelectorAll(".toggle-btn");

    toggleButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const targetId = button.dataset.target;
            const targetElement = document.getElementById(targetId);

            if (!targetElement) {
                return;
            }

            const isOpen = targetElement.classList.contains("show");

            targetElement.classList.toggle("show");
            button.setAttribute("aria-expanded", String(!isOpen));
            button.textContent = isOpen ? "Show Bio & Moodboard" : "Hide Bio & Moodboard";
        });
    });
}
