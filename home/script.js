document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");

    // Bootstrap automatically handles tab switching, so no extra code is needed.
    // This script ensures everything works when dynamically adding elements.

    document.querySelectorAll('[data-bs-toggle="tab"]').forEach(tab => {
        tab.addEventListener("click", function (event) {
            event.preventDefault();
            const target = new bootstrap.Tab(tab);
            target.show();
        });
    });
});
