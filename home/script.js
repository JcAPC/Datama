document.addEventListener("DOMContentLoaded", function() {
    // Handle tab switching
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-tab");

    function showTab(targetTab) {
        // Hide all sections
        sections.forEach(section => section.classList.remove("active"));

        // Show only the selected one
        document.getElementById(targetTab).classList.add("active");

        // Remove active class from all links and add to the clicked one
        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            showTab(this.getAttribute("data-tab"));
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
