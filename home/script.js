document.addEventListener("DOMContentLoaded", function() {
    // Handle tab switching
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-tab");
    const introSection = document.getElementById("intro-section");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute("data-tab");

            // Hide all sections and show only the selected one
            sections.forEach(section => section.style.display = "none");
            document.getElementById(targetTab).style.display = "block";

            // Hide introduction section when any tab is clicked
            introSection.style.display = "none";

            // Remove active class from all links and add to the clicked one
            navLinks.forEach(link => link.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Order table row functionality
    document.getElementById('add-row-btn').addEventListener('click', function() {
        const orderList = document.getElementById('order-list');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td><input type="number" class="form-control" value="1" min="1"></td>
            <td><input type="text" class="form-control" placeholder="Enter product name"></td>
            <td><input type="number" class="form-control" placeholder="Enter price"></td>
            <td><button class="btn btn-danger remove-btn">✖</button></td>
        `;
        orderList.appendChild(newRow);

        // Remove row when the button is clicked
        newRow.querySelector('.remove-btn').addEventListener('click', function() {
            newRow.remove();
        });
    });
});
