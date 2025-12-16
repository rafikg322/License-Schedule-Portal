/* Element Selection and Variable Initialization */
const TableL1 = document.getElementById('L1-Table');
const SelectDayL1 = document.getElementById('select-day-L1');
const SelectGroupL1 = document.getElementById('select-Group-L1');
const SelectTimeL1 = document.getElementById('select-Time-L1');
const SelectTypeL1 = document.getElementById('select-Type-L1');
const SelectModuleL1 = document.getElementById('select-Module-L1');
const SelectPlaceL1 = document.getElementById('select-Place-L1');
const ButtonL1 = document.getElementById('Change-btn-L1');
const ColorPickerL1 = document.getElementById('color-picker-L1');
let indexL1 = 0;

const TableL2 = document.getElementById('L2-Table');
const SelectDayL2 = document.getElementById('select-day-L2');
const SelectGroupL2 = document.getElementById('select-Group-L2');
const SelectTimeL2 = document.getElementById('select-Time-L2');
const SelectTypeL2 = document.getElementById('select-Type-L2');
const SelectModuleL2 = document.getElementById('select-Module-L2');
const SelectPlaceL2 = document.getElementById('select-Place-L2');
const ButtonL2 = document.getElementById('Change-btn-L2');
const ColorPickerL2 = document.getElementById('color-picker-L2');
let indexL2 = 0;

const TableL3 = document.getElementById('L3-Table');
const SelectDayL3 = document.getElementById('select-day-L3');
const SelectGroupL3 = document.getElementById('select-Group-L3');
const SelectTimeL3 = document.getElementById('select-Time-L3');
const SelectTypeL3 = document.getElementById('select-Type-L3');
const SelectModuleL3 = document.getElementById('select-Module-L3');
const SelectPlaceL3 = document.getElementById('select-Place-L3');
const ButtonL3 = document.getElementById('Change-btn-L3');
const ColorPickerL3 = document.getElementById('color-picker-L3');
let indexL3 = 0;

/*----------------------------------------------------------------*/


/*--------------------- Load Storage -------------------------*/
for (let i = 0; i < localStorage.length; i++) {
    let storageKeyL1 = 'storageL1-' + i;
    let storageKeyL2 = 'storageL2-' + i;
    let storageKeyL3 = 'storageL3-' + i;

    let storageValueL1 = localStorage.getItem(storageKeyL1);
    let storageValueL2 = localStorage.getItem(storageKeyL2);
    let storageValueL3 = localStorage.getItem(storageKeyL3);


    if (TableL1 && storageValueL1 !== null) {
        let storageObjectL1 = JSON.parse(storageValueL1);
        TableL1.rows[storageObjectL1.row].cells[storageObjectL1.cell].style.backgroundColor = storageObjectL1.color;
        TableL1.rows[storageObjectL1.row].cells[storageObjectL1.cell].innerText = storageObjectL1.text1 + " - " + storageObjectL1.text2 + " - " + storageObjectL1.text3;
        indexL1++;
    }
    if (TableL2 && storageValueL2 !== null) {
        let storageObjectL2 = JSON.parse(storageValueL2);
        TableL2.rows[storageObjectL2.row].cells[storageObjectL2.cell].style.backgroundColor = storageObjectL2.color;
        TableL2.rows[storageObjectL2.row].cells[storageObjectL2.cell].innerText = storageObjectL2.text1 + " - " + storageObjectL2.text2 + " - " + storageObjectL2.text3;
        indexL2++;
    }
    if (TableL3 && storageValueL3 !== null) {
        let storageObjectL3 = JSON.parse(storageValueL3);
        TableL3.rows[storageObjectL3.row].cells[storageObjectL3.cell].style.backgroundColor = storageObjectL3.color;
        TableL3.rows[storageObjectL3.row].cells[storageObjectL3.cell].innerText = storageObjectL3.text1 + " - " + storageObjectL3.text2 + " - " + storageObjectL3.text3;
        indexL3++;
    }
}
/* -------------------------------------------------*/








if (ButtonL1) ButtonL1.addEventListener('click', ChangeL1);
if (ButtonL2) ButtonL2.addEventListener('click', ChangeL2);
if (ButtonL3) ButtonL3.addEventListener('click', ChangeL3);

function ChangeL1() {
    let selectedValue = Number(SelectGroupL1.value) + Number(SelectDayL1.value) * 3;
    const selectedValue2 = SelectTimeL1.value; 
    /*------------------- Storage L1 -------------------------*/ 
    let key = 'storageL1-' + indexL1; 
    let storageObjectL1 = {
        row: selectedValue,
        cell: selectedValue2,
        color: ColorPickerL1.value,
        text1: SelectTypeL1.value,
        text2: SelectModuleL1.value,
        text3: SelectPlaceL1.value
    };
    localStorage.setItem(key, JSON.stringify(storageObjectL1));
    indexL1++;
    /* -------------------------------------------------*/
    TableL1.rows[selectedValue].cells[selectedValue2].style.backgroundColor = ColorPickerL1.value;
    TableL1.rows[selectedValue].cells[selectedValue2].innerText = SelectTypeL1.value + " - " + SelectModuleL1.value + " - " + SelectPlaceL1.value;

}

function ChangeL2() {
    let selectedValue = Number(SelectGroupL2.value) + Number(SelectDayL2.value) * 3;
    const selectedValue2 = SelectTimeL2.value; 
    /*------------------- Storage L2 -------------------------*/ 
    let key = 'storageL2-' + indexL2; 
    let storageObjectL2 = {
        row: selectedValue,
        cell: selectedValue2,
        color: ColorPickerL2.value,
        text1: SelectTypeL2.value,
        text2: SelectModuleL2.value,
        text3: SelectPlaceL2.value
    };
    localStorage.setItem(key, JSON.stringify(storageObjectL2));
    indexL2++;
    /* -------------------------------------------------*/
    TableL2.rows[selectedValue].cells[selectedValue2].style.backgroundColor = ColorPickerL2.value;
    TableL2.rows[selectedValue].cells[selectedValue2].innerText = SelectTypeL2.value + " - " + SelectModuleL2.value + " - " + SelectPlaceL2.value;

}

function ChangeL3() {
    let selectedValue = Number(SelectGroupL3.value) + Number(SelectDayL3.value) * 3;
    const selectedValue2 = SelectTimeL3.value; 
    /*------------------- Storage L1 -------------------------*/ 
    let key = 'storageL3-' + indexL3; 
    let storageObjectL3 = {
        row: selectedValue,
        cell: selectedValue2,
        color: ColorPickerL3.value,
        text1: SelectTypeL3.value,
        text2: SelectModuleL3.value,
        text3: SelectPlaceL3.value
    };
    localStorage.setItem(key, JSON.stringify(storageObjectL3));
    indexL3++;
    /* -------------------------------------------------*/
    TableL3.rows[selectedValue].cells[selectedValue2].style.backgroundColor = ColorPickerL3.value;
    TableL3.rows[selectedValue].cells[selectedValue2].innerText = SelectTypeL3.value + " - " + SelectModuleL3.value + " - " + SelectPlaceL3.value;

}


function updateLocalStorageSize() {
    let total = 0;
    for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
            total += ((localStorage[key].length + key.length) * 2); 
        }
    }

    let sizeText = '';
    if (total < 1024) {
        sizeText = total + ' bytes';
    } else if (total < 1024 * 1024) {
        sizeText = (total / 1024).toFixed(2) + ' KB';
    } else {
        sizeText = (total / (1024 * 1024)).toFixed(2) + ' MB';
    }

    document.getElementById('storage-size').innerText = ` (${sizeText})`;
}


updateLocalStorageSize();


function clearCache() {
    localStorage.clear();
    location.reload();
}
