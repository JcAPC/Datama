document.addEventListener("DOMContentLoaded", function () {
    // Initial product list
    const products = [
        { name: "Coke", stock: 50, supplierPrice: 15, customerPrice: 25 },
        { name: "Pepsi", stock: 40, supplierPrice: 14, customerPrice: 23 },
        { name: "Gas Tank", stock: 10, supplierPrice: 480, customerPrice: 550 }
    ];

    // Function to update the product table
    function updateProductList() {
        const productList = document.getElementById("product-list");
        productList.innerHTML = "";
        products.forEach((product, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${product.name}</td>
                <td id="stock-${index}">${product.stock}</td>
                <td id="supplier-price-${index}">$${product.supplierPrice}</td>
                <td>$${product.customerPrice}</td>
            `;
            productList.appendChild(row);
        });
    }

    // Function to add a supply transaction and update stock
    function addSupplyTransaction(productName, quantity, price) {
        const supplyTransactionsList = document.getElementById("supply-transactions");

        // Find the product
        const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

        if (!product) {
            alert("Product not found!");
            return;
        }

        // Update stock and supplier price
        product.stock += parseInt(quantity);
        product.supplierPrice = parseFloat(price);
        updateProductList();

        // Add transaction entry
        const listItem = document.createElement("li");
        listItem.textContent = `Supplied ${quantity} units of ${productName} at $${price} each.`;
        listItem.classList.add("list-group-item");
        supplyTransactionsList.appendChild(listItem);
    }

    // Handle form submission for supply transactions
    document.getElementById("supply-form").addEventListener("submit", function (event) {
        event.preventDefault();

        const productName = document.getElementById("supply-product").value.trim();
        const quantity = document.getElementById("supply-quantity").value;
        const price = document.getElementById("supply-price").value;

        if (productName && quantity > 0 && price > 0) {
            addSupplyTransaction(productName, quantity, price);

            // Clear form inputs
            document.getElementById("supply-product").value = "";
            document.getElementById("supply-quantity").value = "";
            document.getElementById("supply-price").value = "";
        } else {
            alert("Please enter valid values!");
        }
    });

    // Handle navigation between tabs
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            let selectedTab = this.getAttribute("data-tab");

            // Hide all sections
            document.querySelectorAll(".content-tab").forEach(tab => {
                tab.classList.remove("active");
            });

            // Show the selected section
            document.getElementById(selectedTab).classList.add("active");

            // Update active link
            document.querySelectorAll(".nav-link").forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });
    });

    updateProductList();
});
