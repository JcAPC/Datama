document.addEventListener("DOMContentLoaded", function() {
    // Tab switching logic
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const tab = this.getAttribute("data-tab");

            document.querySelectorAll(".content-tab").forEach(section => {
                section.classList.remove("active");
            });

            document.getElementById(tab).classList.add("active");
        });
    });

    // Add row to order list
    document.getElementById("add-row-btn").addEventListener("click", function() {
        const orderList = document.getElementById("order-list");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input type="number" class="form-control" min="1"></td>
            <td><input type="text" class="form-control"></td>
            <td>₱<input type="number" class="form-control" min="1"></td>
            <td><button class="btn btn-danger remove-row">Remove</button></td>
        `;

        orderList.appendChild(row);

        // Remove row event
        row.querySelector(".remove-row").addEventListener("click", function() {
            row.remove();
        });
    });

    // Transactions Tab Switching
    document.querySelectorAll(".transaction-tabs button").forEach(button => {
        button.addEventListener("click", function() {
            document.querySelectorAll(".transaction-tabs button").forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const target = this.getAttribute("data-target");
            document.querySelectorAll(".transaction-content").forEach(content => {
                content.style.display = "none";
            });

            document.getElementById(target).style.display = "block";
        });
    });

    // Default active transaction tab
    document.querySelector(".transaction-tabs button").click();
});
