document.addEventListener("DOMContentLoaded", function () {
    // Handle tab switching
    document.querySelectorAll(".nav-link[data-tab]").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            const tab = this.getAttribute("data-tab");

            // Hide all content tabs
            document.querySelectorAll(".content-tab").forEach(section => {
                section.classList.remove("active");
            });

            // Show the selected content tab
            document.getElementById(tab).classList.add("active");

            // Deactivate all nav-links
            document.querySelectorAll(".nav-link[data-tab]").forEach(navLink => {
                navLink.classList.remove("active");
            });

            // Activate the clicked nav-link
            this.classList.add("active");
        });
    });

    // Transaction tab switching
    document.querySelectorAll('[data-transaction-tab]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tab = this.getAttribute('data-transaction-tab');
            document.querySelectorAll('.transaction-tab').forEach(t => t.classList.add('d-none'));
            document.getElementById(tab).classList.remove('d-none');
            document.querySelectorAll('[data-transaction-tab]').forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Products tab switching
    document.querySelectorAll('[data-product-tab]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const tab = this.getAttribute('data-product-tab');
            document.querySelectorAll('.product-tab').forEach(t => t.classList.add('d-none'));
            document.getElementById(tab).classList.remove('d-none');
            document.querySelectorAll('[data-product-tab]').forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Order form submission
    const orderForm = document.getElementById("order-form");
    const orderConfirmation = document.getElementById("order-confirmation");
    const orderTotalDisplay = document.getElementById("order-total");

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const product = document.getElementById("product").value;
        const quantity = parseInt(document.getElementById("quantity").value);

        const prices = {
            Softdrink: 20,
            Lpg: 500,
            Junkfood: 50,
        };

        const total = prices[product] * quantity;
        orderTotalDisplay.textContent = `₱${total.toFixed(2)}`;
        orderConfirmation.style.display = "block";
    });

    // Example data population
    const prices = [
        { product: "Softdrink", stock: 100, price: 15 },
        { product: "Lpg", stock: 50, price: 450 },
        { product: "Junkfood", stock: 200, price: 40 },
    ];

    const customerPrices = [
        { product: "Softdrink", price: 20 },
        { product: "Lpg", price: 500 },
        { product: "Junkfood", price: 50 },
    ];

    // Populate prices
    const priceTableBody = document.getElementById("price-list");
    prices.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.stock}</td>
            <td>₱${item.price.toFixed(2)}</td>
        `;
        priceTableBody.appendChild(row);
    });

    // Populate customer prices
    const customerPriceTableBody = document.getElementById("customer-price-list");
    customerPrices.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.product}</td>
            <td>₱${item.price.toFixed(2)}</td>
        `;
        customerPriceTableBody.appendChild(row);
    });
});