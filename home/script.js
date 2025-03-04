document.addEventListener("DOMContentLoaded", function() {
    // Handle active link styling
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            // Show only the selected section
            const targetSection = this.getAttribute("data-target");
            document.querySelectorAll("section").forEach(section => {
                section.classList.remove("active");
                if (section.id === targetSection) {
                    section.classList.add("active");
                }
            });
        });
    });

    // Add new row to order table
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

        // Remove row
        newRow.querySelector('.remove-btn').addEventListener('click', function() {
            newRow.remove();
        });
    });
});
