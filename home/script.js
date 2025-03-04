// Add new row to the order list
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

    // Add remove functionality to new rows
    newRow.querySelector('.remove-btn').addEventListener('click', function() {
        newRow.remove();
    });
});

// Lightsaber effect on navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        this.classList.add('lightsaber-effect');
        setTimeout(() => this.classList.remove('lightsaber-effect'), 500);
    });
});

// Smooth scrolling for internal links
document.querySelectorAll('.nav-link[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
