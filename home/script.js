document.addEventListener("DOMContentLoaded", function () {
    const navButtons = document.querySelectorAll(".nav-button");
    const sections = document.querySelectorAll(".section-content");
    const tabs = document.querySelectorAll(".tab-button");

    // Navigation tabs functionality
    navButtons.forEach(button => {
        button.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");

            sections.forEach(section => section.classList.remove("active"));
            document.getElementById(targetId).classList.add("active");

            navButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Product and Transaction tabs functionality
    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");

            document.querySelectorAll(".tab-content").forEach(content => {
                content.classList.remove("active");
            });

            tabs.forEach(btn => btn.classList.remove("active"));

            document.getElementById(targetId).classList.add("active");
            this.classList.add("active");
        });
    });
});
