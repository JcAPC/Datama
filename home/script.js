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
