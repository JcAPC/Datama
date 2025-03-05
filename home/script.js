document.addEventListener("DOMContentLoaded", function () {
    // Handle tab switching
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            const tab = this.getAttribute("data-tab");
            document.querySelectorAll(".content-tab").forEach(section => {
                section.classList.remove("active");
            });
            document.getElementById(tab).classList.add("active");
        });
    });

    // Function to show specific pages inside sections
    window.showPage = function (pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('d-none');
        });
        document.getElementById(pageId).classList.remove('d-none');
    };
});
