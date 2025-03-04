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
});

// Order Adding Logic
document.getElementById("add-row-btn").addEventListener("click", function() {
    const orderList = document.getElementById("order-list");
    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td><input type="number" class="form-control" value="1" min="1"></td>
        <td><input type="text" class="form-control" placeholder="Enter product name"></td>
        <td><input type="number" class="form-control" placeholder="Enter price"></td>
        <td><button class="btn btn-danger remove-btn">✖</button></td>
    `;

    orderList.appendChild(newRow);

    newRow.querySelector(".remove-btn").addEventListener("click", function() {
        newRow.remove();
    });
});

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
