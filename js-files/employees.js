EmployeeDatas.forEach(employee => {
    const tr = document.createElement('tr');
    const trContent = 
        `
        <td>${employee.no}</td>
        <td>${employee.employeeName}</td>
        <td>${employee.id}</td>
        <td>${employee.acceptedBy}</td>
        <td>${employee.joinDate}</td>
        `
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

// Sort Table
/**
 * Sort HTML
 *
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column the index of the column
 * @param {boolean} asc determines the sorting will be asc
*/

function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort Rows
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
        const bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();

        return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
    });

    // Remove existing tr from table
    while(tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    // Add newly sorted tr
    tBody.append(...sortedRows);

    // Remmember sorted columns
    table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${column + 1})`).classList.toggle("th-sort-desc", !asc);
}

document.querySelectorAll(".table-sortable th").forEach(headerCell => {
    headerCell.addEventListener('click', () => {
        const tableElement = headerCell.parentElement.parentElement.parentElement;
        const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
        const currentIsAscending = headerCell.classList.contains("th-sort-asc");

        sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
    });
});

// Search Function
const searchInput = document.getElementById("search");
const rows = document.querySelectorAll("tbody tr");

searchInput.addEventListener("keyup", function (event) {
    const q = event.target.value.toLowerCase();
    rows.forEach((row) => {
        row.querySelectorAll("td")[1].textContent.toLowerCase().startsWith(q) ? (row.style.display = "table-row") : (row.style.display = "none"); 
    });
});

// Input Field Validations
//  Get Data
const nameInput = document.getElementById('employee-name');
const idInput = document.getElementById('employee-id');
const acceptedInput = document.getElementById('accepted-by');

const errorNodes = document.getElementsByClassName('error');
const btn = document.getElementsByClassName('submit');

function validateForm() {

    clearMessages();

    if(nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(idInput.value.length < 1) {
        errorNodes[1].innerText = "ID cannot be blank";
        idInput.classList.add("error-border");
        errorFlag = true;
    }

    if(acceptedInput.value.length < 1) {
        errorNodes[2].innerText = "Field cannot be blank";
        acceptedInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag) {
        success.innerText = "Success!";
    }
}

// Clear Error
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    idInput.classList.remove("error-border");
    acceptedInput.classList.remove("error-border");
}