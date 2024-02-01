function addItem() {
    var item = document.getElementById("item").value;
    var quantity = parseFloat(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("price").value);

    if (isNaN(quantity) || isNaN(price)) {
        alert("Please enter valid quantity and price.");
        return;
    }

    var total = quantity * price;

    var tableBody = document.getElementById("invoiceBody");
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = item;
    cell2.innerHTML = quantity;
    cell3.innerHTML = "₱" + price.toFixed(2);
    cell4.innerHTML = "₱" + total.toFixed(2);
    cell5.innerHTML = '<span class="remove-btn" onclick="removeItem(this)">Remove</span>';

    updateTotal();
}

function removeItem(row) {
    var index = row.parentNode.parentNode.rowIndex;
    document.getElementById("invoiceTable").deleteRow(index);
    updateTotal();
}

function updateTotal() {
    var total = 0;
    var table = document.getElementById("invoiceTable");
    for (var i = 1; i < table.rows.length; i++) {
        total += parseFloat(table.rows[i].cells[3].innerHTML.replace("₱", ""));
    }

    document.getElementById("total").innerHTML = "Total: ₱" + total.toFixed(2);
}