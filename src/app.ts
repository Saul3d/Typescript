import { AccountingDept }  from './accounting.js';

const ReconAccounting = new AccountingDept(1, 55);
console.log(ReconAccounting.getPeople);


const displayDiv = document.querySelector("#displayValue");
const employeeInput = document.querySelector('input');

employeeInput.addEventListener('change', updateValue);

function updateValue () {
  ReconAccounting.setPeople = parseInt(employeeInput.value);
  displayDiv.innerHTML = `${ReconAccounting.getPeople}`;
}

