document.addEventListener("DOMContentLoaded", function () {
    // ... (rest of the tab switching and order form code)

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
            <td><span class="math-inline">\{item\.product\}</td\>
<td\></span>{item.stock}</td>
            <td>₱${item.price.toFixed(2)}</td>
        `;
        priceTableBody.appendChild(row);
    });

    // Populate customer prices
    const customerPrice