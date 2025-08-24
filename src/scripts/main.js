'use strict';

const thead = document.querySelector('thead');
const tfoot = document.querySelector('tfoot');
const tbody = document.querySelector('tbody');

function addColumn() {
  for (let i = 0; i < arguments.length; i++) {
    const rows = arguments[i].rows;

    for (let k = 0; k < rows.length; k++) {
      const row = rows[k];

      if (row.cells.length < 2) {
        continue;
      }

      const copy = row.cells[1];
      const last = row.cells[row.cells.length - 1];
      const clone = copy.cloneNode(true);

      row.insertBefore(clone, last);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  addColumn(thead, tfoot, tbody);
});
