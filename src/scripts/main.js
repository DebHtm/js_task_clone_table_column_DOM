'use strict';

const globalTr = document.querySelectorAll('table tr');

function addColumn(allTr) {
  for (let k = 0; k < allTr.length; k++) {
    const row = allTr[k];
    const copy = row.cells[1];
    const last = row.cells[row.cells.length - 1];
    const clone = copy.cloneNode(true);

    row.insertBefore(clone, last);
  }
}

addColumn(globalTr);
