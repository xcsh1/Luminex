function updateOrderStatus() {
    var orderData = JSON.parse(localStorage.getItem('orderData')) || [];

    var tableBody = document.getElementById("orderStatusBody");
    tableBody.innerHTML = "";

    orderData.forEach(function (order) {
        var newRow = tableBody.insertRow(tableBody.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);

        cell1.innerHTML = order.item;

        // Make the "Address" column editable
        cell2.innerHTML = '<div class="editable" contenteditable="true" onBlur="updateAddress(this)">' + order.address + '</div>';

        cell3.innerHTML = order.status;

        if (order.status.toLowerCase() === 'delivered') {
            cell4.innerHTML = '<span class="remove-btn" onclick="removeOrderItem(this)">Remove</span>';
        } else {
            cell4.innerHTML = '<span class="mark-delivered-btn" onclick="markDeliveredItem(this)">Mark Delivered</span>';
        }
    });
}

function markDeliveredItem(row) {
    var index = row.parentNode.parentNode.rowIndex;
    var item = document.getElementById("orderStatusTable").rows[index].cells[0].innerHTML;

    // Mark the item as delivered in order status
    var orderData = JSON.parse(localStorage.getItem('orderData')) || [];
    for (var i = 0; i < orderData.length; i++) {
        if (orderData[i].item === item) {
            orderData[i].status = 'Delivered';
            break;
        }
    }
    localStorage.setItem('orderData', JSON.stringify(orderData));

    // Update the order status table
    updateOrderStatus();
}

function removeOrderItem(row) {
    var index = row.parentNode.parentNode.rowIndex;
    var item = document.getElementById("orderStatusTable").rows[index].cells[0].innerHTML;

    // Remove the item from order status
    var orderData = JSON.parse(localStorage.getItem('orderData')) || [];
    orderData = orderData.filter(function (order) {
        return order.item !== item;
    });
    localStorage.setItem('orderData', JSON.stringify(orderData));

    // Update the order status table
    updateOrderStatus();
}

function updateAddress(element) {
    var index = element.parentNode.parentNode.rowIndex;
    var item = document.getElementById("orderStatusTable").rows[index].cells[0].innerHTML;

    // Update the address in order status
    var orderData = JSON.parse(localStorage.getItem('orderData')) || [];
    for (var i = 0; i < orderData.length; i++) {
        if (orderData[i].item === item) {
            orderData[i].address = element.innerText;
            break;
        }
    }
    localStorage.setItem('orderData', JSON.stringify(orderData));
}