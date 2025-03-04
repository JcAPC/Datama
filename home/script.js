document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            const target = this.getAttribute("data-tab");

            contents.forEach(content => {
                content.classList.remove("active");
            });

            document.getElementById(target).classList.add("active");
        });
    });

    // Order Adding Logic with Validation
    document.getElementById("add-row-btn").addEventListener("click", function() {
        const orderList = document.getElementById("order-list");
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td><input type="number" class="form-control" value="1" min="1" required></td>
            <td><input type="text" class="form-control" placeholder="Enter product name" required></td>
            <td><input type="number" class="form-control" placeholder="Enter price" required></td>
            <td><button class="btn btn-danger remove-btn">✖</button></td>
        `;

        orderList.appendChild(newRow);

        newRow.querySelector(".remove-btn").addEventListener("click", function() {
            newRow.remove();
        });
    });

    // Customer Receipts and Supply Transactions
    const receiptList = document.getElementById("receipt-list");
    const supplyList = document.getElementById("supply-list");

    // Function to add a new receipt
    function addReceipt(id, customerName, amount) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${id}</td>
            <td>${customerName}</td>
            <td>${amount}</td>
            <td>${new Date().toLocaleDateString()}</td>
        `;
        receiptList.appendChild(row);
    }

    // Function to add a new supply transaction
    function addSupplyTransaction(id, supplierName, amount) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${id}</td>
            <td>${supplierName}</td>
            <td>${amount}</td>
            <td>${new Date().toLocaleDateString()}</td>
        `;
        supplyList.appendChild(row);
    }

    // Example: Adding some receipts and supply transactions
    addReceipt(1, "John Doe", 150);
    addReceipt(2, "Jane Smith", 200);
    addSupplyTransaction(1, "Supplier A", 500);
    addSupplyTransaction(2, "Supplier B", 300);

    // Products and Supply Connection
    const productList = document.getElementById("product-list");
    const supplyStock = {
        "Coke 1L": { supplierPrice: 25, customerPrice: 30, stock: 10 },
        "Sprite 1L": { supplierPrice: 23, customerPrice: 28, stock: 5 },
        "LPG 11kg": { supplierPrice: 700, customerPrice: 850, stock: 3 }
    };

    for (let product in supplyStock) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${product}</td>
            <td>${supplyStock[product].supplierPrice}</td>
            <td>${supplyStock[product].customerPrice}</td>
            <td>${supplyStock[product].stock}</td>
        `;
        productList.appendChild(row);
    }

    // Add Product Logic
    document.getElementById("add-product-btn").addEventListener("click", function() {
        const productName = prompt("Enter product name:");
        const supplierPrice = prompt("Enter supplier price:");
        const customerPrice = prompt("Enter customer price:");
        const stock = prompt("Enter stock:");

        if (productName && supplierPrice && customerPrice && stock) {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${productName}</td>
                <td>${supplierPrice}</td>
                <td>${customerPrice}</td>
                <td>${stock}</td>
            `;
            productList.appendChild(row);
        } else {
            alert("All fields are required!");
        }
    });
});