document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab-button");

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");

            // Hide all tab contents
            document.querySelectorAll(".tab-content").forEach(content => {
                content.classList.remove("active");
            });

            // Remove active class from all buttons
            tabs.forEach(btn => btn.classList.remove("active"));

            // Show the selected tab content
            document.getElementById(targetId).classList.add("active");

            // Mark the clicked tab as active
            this.classList.add("active");
        });
    });
});
