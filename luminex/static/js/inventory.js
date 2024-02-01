function updateInventory() {
    var inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];

    var tableBody = document.getElementById("inventoryBody");
    tableBody.innerHTML = "";

    inventoryData.forEach(function (item) {
        var newRow = tableBody.insertRow(tableBody.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);

        cell1.innerHTML = item.item;
        cell2.innerHTML = item.quantity;
        cell3.innerHTML = "₱" + item.price.toFixed(2);
        cell4.innerHTML = "₱" + item.total.toFixed(2);
        cell5.innerHTML = '<span class="remove-btn" onclick="removeItem(this)">Remove</span>';
    });
}

function removeItem(row) {
    var index = row.parentNode.parentNode.rowIndex;
    var item = document.getElementById("inventoryTable").rows[index].cells[0].innerHTML;

    // Remove the item from inventory
    var inventoryData = JSON.parse(localStorage.getItem('inventoryData')) || [];
    inventoryData = inventoryData.filter(function (inventory) {
        return inventory.item !== item;
    });
    localStorage.setItem('inventoryData', JSON.stringify(inventoryData));

    // Update the inventory table
    updateInventory();
}