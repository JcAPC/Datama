document.addEventListener("DOMContentLoaded", function () {
    // Handle tab switching
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", function () {
            const tab = this.getAttribute("data-tab");
            document.querySelectorAll(".content-tab").forEach(section => {
                section.classList.remove("active");
            });
            document.getElementById(tab).classList.add("active");
        });
    });

    // Handle transactions tab switching
    const transactionTabs = document.querySelectorAll("#transactionTabs .nav-link");
    transactionTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            document.querySelectorAll("#transactions .tab-pane").forEach(pane => {
                pane.classList.remove("show", "active");
            });
            document.querySelector(this.getAttribute("href")).classList.add("show", "active");
        });
    });

    // Handle products tab switching
    const productTabs = document.querySelectorAll("#productTabs .nav-link");
    productTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            document.querySelectorAll("#products .tab-pane").forEach(pane => {
                pane.classList.remove("show", "active");
            });
            document.querySelector(this.getAttribute("href")).classList.add("show", "active");
        });
    });

    // Adding a new row to order list
    document.getElementById("add-row-btn").addEventListener("click", function () {
        const tableBody = document.getElementById("order-list");
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td><input type="number" class="form-control order-amount" min="1" value="1"></td>
            <td><input type="text" class="form-control order-product" placeholder="Enter product"></td>
            <td><input type="number" class="form-control order-price" min="1" placeholder="Price (₱)"></td>
            <td><button class="btn btn-danger remove-row">Remove</button></td>
        `;
        tableBody.appendChild(newRow);

        // Remove row event
        newRow.querySelector(".remove-row").addEventListener("click", function () {
            newRow.remove();
        });
    });

    // Handle adding supply transactions
    document.getElementById("supply-form").addEventListener("submit", function (e) {
        e.preventDefault();
        const product = document.getElementById("supply-product").value;
        const quantity = document.getElementById("supply-quantity").value;
        const price = document.getElementById("supply-price").value;

        const supplyList = document.getElementById("supplier-price-list");
        const row = document.createElement("tr");
        row.innerHTML = `<td>${product}</td><td>${quantity}</td><td>₱${price}</td>`;
        supplyList.appendChild(row);

        this.reset();
    });
});
