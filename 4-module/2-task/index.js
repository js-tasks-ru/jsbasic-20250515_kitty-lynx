function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];  
    const cell = row.cells[i];
    cell.style.backgroundColor = 'red';
  }
}
