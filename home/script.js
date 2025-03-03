document.addEventListener("DOMContentLoaded", function() {
    const addRowBtn = document.getElementById("add-row-btn");
    const orderList = document.getElementById("order-list");

    // Function to add a new row
    addRowBtn.addEventListener("click", function() {
        const newRow = document.createElement("tr");

        newRow.innerHTML = `
            <td><input type="number" value="1" min="1"></td>
            <td><input type="text" placeholder="Enter product name"></td>
            <td><input type="number" placeholder="Enter price"></td>
            <td><button class="remove-btn">✖</button></td>
        `;

        orderList.appendChild(newRow);

        // Add event listener to the new remove button
        newRow.querySelector(".remove-btn").addEventListener("click", function() {
            newRow.remove();
        });
    });

    // Add event listener for existing remove button
    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function() {
            button.parentElement.parentElement.remove();
        });
    });
});
