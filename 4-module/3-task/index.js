function highlight(table) {
  const rows = table.querySelectorAll('tbody tr');

  for (const row of rows) {
    const statusCell = row.cells[3];
    if (statusCell.hasAttribute('data-available')) {
      const isAvailable = statusCell.dataset.available === 'true';
      row.classList.add(isAvailable ? 'available' : 'unavailable');
    } else {
      row.hidden = true;
    }

    const genderCell = row.cells[2];
    if (genderCell.textContent === 'm') {
      row.classList.add('male');
    } else if (genderCell.textContent === 'f') {
      row.classList.add('female');
    }

    const ageCell = row.cells[1];
    if (parseInt(ageCell.textContent) < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
