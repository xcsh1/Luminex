function addDeliveryItem() {
    var item = document.getElementById("item").value;
    var quantity = parseFloat(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("price").value);
    var status = document.getElementById("status").value;

    if (isNaN(quantity) || isNaN(price)) {
        alert("Please enter valid quantity and price.");
        return;
    }

    var total = quantity * price;

    var deliveryTableBody = document.getElementById("deliveryBody");
    var deliveryRow = deliveryTableBody.insertRow(deliveryTableBody.rows.length);
    var deliveryCell1 = deliveryRow.insertCell(0);
    var deliveryCell2 = deliveryRow.insertCell(1);
    var deliveryCell3 = deliveryRow.insertCell(2);
    var deliveryCell4 = deliveryRow.insertCell(3);
    var deliveryCell5 = deliveryRow.insertCell(4);

    deliveryCell1.innerHTML = item;
    deliveryCell2.innerHTML = quantity;
    deliveryCell3.innerHTML = "₱" + price.toFixed(2);
    deliveryCell4.innerHTML = status;
    deliveryCell5.innerHTML = '<span class="remove-btn" onclick="removeDeliveryItem(this)">Remove</span>';

    updateTotal();
    updateOrderStatus();
}

function removeDeliveryItem(row) {
    var index = row.parentNode.parentNode.rowIndex;
    document.getElementById("deliveryTable").deleteRow(index);
    updateTotal();
    updateOrderStatus();
}

function updateTotal() {
    var total = 0;
    var table = document.getElementById("deliveryTable");
    for (var i = 1; i < table.rows.length; i++) {
        total += parseFloat(table.rows[i].cells[2].innerHTML.replace("₱", ""));
    }

    document.getElementById("total").innerHTML = "Total: ₱" + total.toFixed(2);
}

function openOrderStatus() {
    var orderStatusWindow = window.open('order.html', '_blank');
    if (orderStatusWindow) {
        orderStatusWindow.onload = function() {
            orderStatusWindow.updateOrderStatus();
        };
    }
}

function updateOrderStatus() {
    var deliveryData = [];
    var table = document.getElementById("deliveryTable");

    for (var i = 1; i < table.rows.length; i++) {
        var status = table.rows[i].cells[3].innerHTML;
        var item = table.rows[i].cells[0].innerHTML;
        deliveryData.push({ item, status });
    }

    localStorage.setItem('deliveryData', JSON.stringify(deliveryData));
}

function importDeliveryData(data) {
    localStorage.setItem('deliveryData', JSON.stringify(data));
    updateOrderStatus();
}