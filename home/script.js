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
                <td>$${product.supplierPrice}</td>
                <td>$${product.customerPrice}</td>
            `;
            productList.appendChild(row);
        });
    }

    // Function to add a new order
    function addOrderRow() {
        const orderList = document.getElementById("order-list");
        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input type="number" class="form-control order-amount" min="1" value="1"></td>
            <td>
                <select class="form-control order-product">
                    ${products.map(product => `<option value="${product.name}">${product.name}</option>`).join('')}
                </select>
            </td>
            <td class="order-price">$0</td>
            <td><button class="btn btn-danger btn-sm delete-row">Remove</button></td>
        `;

        orderList.appendChild(row);
        updateOrderPrice(row);

        // Event listeners for changes
        row.querySelector(".order-amount").addEventListener("input", () => updateOrderPrice(row));
        row.querySelector(".order-product").addEventListener("change", () => updateOrderPrice(row));
        row.querySelector(".delete-row").addEventListener("click", () => row.remove());
    }

    // Function to update order price based on selected product
    function updateOrderPrice(row) {
        const productName = row.querySelector(".order-product").value;
        const product = products.find(p => p.name === productName);
        const quantity = row.querySelector(".order-amount").value;
        const priceCell = row.querySelector(".order-price");

        if (product) {
            priceCell.textContent = `$${(product.customerPrice * quantity).toFixed(2)}`;
        }
    }

    // Handle "Add Row" button click
    document.getElementById("add-row-btn").addEventListener("click", addOrderRow);

    // Function to add a supply transaction and update stock
    function addSupplyTransaction(productName, quantity, price) {
        const supplyTransactionsList = document.getElementById("supply-transactions");
        const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

        if (!product) {
            alert("Product not found!");
            return;
        }

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
