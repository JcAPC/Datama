document.addEventListener("DOMContentLoaded", function() {
    // Handle tab switching
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-tab");

    function showTab(targetTab) {
        sections.forEach(section => section.classList.remove("active"));
        document.getElementById(targetTab).classList.add("active");

        navLinks.forEach(link => link.classList.remove("active"));
        document.querySelector(`[data-tab="${targetTab}"]`).classList.add("active");
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            showTab(this.getAttribute("data-tab"));
        });
    });

    // Add row functionality for Orders
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

        newRow.querySelector('.remove-btn').addEventListener('click', function() {
            newRow.remove();
        });
    });

    // Initialize Products & Supply System
    const products = [
        { name: "Coke", stock: 50, price: 20, customerPrice: 25 },
        { name: "Pepsi", stock: 40, price: 18, customerPrice: 23 },
        { name: "Gas Tank", stock: 10, price: 500, customerPrice: 550 }
    ];

    function updateProductList() {
        const productList = document.getElementById("product-list");
        productList.innerHTML = "";
        products.forEach(product => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td>${product.stock}</td>
                <td>${product.price}</td>
                <td>${product.customerPrice}</td>
            `;
            productList.appendChild(row);
        });
    }

    updateProductList();
});
