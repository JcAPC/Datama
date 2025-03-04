// Show only the selected tab
function showTab(tab) {
    const sections = ["home", "order", "transactions", "supply", "products"];
    sections.forEach(id => {
        document.getElementById(id).style.display = (id === tab) ? "block" : "none";
    });
}

// Add row functionality for orders
document.addEventListener("DOMContentLoaded", function() {
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

    loadTransactions();
    loadProducts();
});

// Transactions Data
const transactionsData = [
    { id: 1, customer: "Juan Dela Cruz", items: "Soft Drinks (5)", total: "₱250", date: "2025-03-04" },
    { id: 2, customer: "Maria Santos", items: "LPG Gas (1)", total: "₱900", date: "2025-03-05" }
];

const supplyData = [
    { id: 101, supplier: "ABC Supplier", product: "Soft Drinks", quantity: 50, date: "2025-03-02" },
    { id: 102, supplier: "XYZ Supplier", product: "LPG Gas", quantity: 10, date: "2025-03-01" }
];

const productsData = [
    { name: "Soft Drinks", wholesale: "₱45", customer: "₱50" },
    { name: "LPG Gas", wholesale: "₱850", customer: "₱900" }
];

// Load Transactions
function loadTransactions() {
    const customerReceipts = document.getElementById("customer-receipts");
    const supplyTransactions = document.getElementById("supply-transactions");

    transactionsData.forEach(tx => {
        let row = `<tr>
            <td>${tx.id}</td>
            <td>${tx.customer}</td>
            <td>${tx.items}</td>
            <td>${tx.total}</td>
            <td>${tx.date}</td>
        </tr>`;
        customerReceipts.innerHTML += row;
    });

    supplyData.forEach(tx => {
        let row = `<tr>
            <td>${tx.id}</td>
            <td>${tx.supplier}</td>
            <td>${tx.product}</td>
            <td>${tx.quantity}</td>
            <td>${tx.date}</td>
        </tr>`;
        supplyTransactions.innerHTML += row;
    });
}

// Load Products
function loadProducts() {
    const productList = document.getElementById("product-list");

    productsData.forEach(product => {
        let row = `<tr>
            <td>${product.name}</td>
            <td>${product.wholesale}</td>
            <td>${product.customer}</td>
        </tr>`;
        productList.innerHTML += row;
    });
}
