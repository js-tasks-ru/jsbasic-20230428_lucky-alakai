function highlight(table) {
  for (let i = 0; i < table.rows.length; i++) {
    for (let a = 0; a < table.rows[i].cells.length; a++) {
      let current = table.rows[i].cells[a];

      if (current.nextElementSibling === null) {
      if (current.dataset.available === 'true') {
        table.rows[i].classList.add('available');
      } else if (current.dataset.available === 'false') {
        table.rows[i].classList.add('unavailable');
      } else {
        table.rows[i].setAttribute('hidden', 'true');
      }
    }

      if (current.textContent === 'm') {
        table.rows[i].classList.add('male');
        continue;
    }

    if (current.textContent === 'f') {
        table.rows[i].classList.add('female');
        continue;
    }

    if (parseInt(current.textContent, 10) < 18) {
      table.rows[i].style.textDecoration = 'line-through';
      continue;
    }
  }
  }
}

