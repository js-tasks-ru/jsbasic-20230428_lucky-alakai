/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.elem = this.#render(rows);
  }

  #deleteOnClick(event) {
  const row = event.target.closest('tr');
  if (row) {
    row.remove();
  }
}

  #render(rows) {
    const element = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const thNames = ['Имя', 'Возраст', 'Зарплата', 'Город', ' '];
    for (let a = 0; a < thNames.length; a++) {
      let th = document.createElement('th');
      th.innerHTML = thNames[a];
      thead.appendChild(th);
    }

    element.appendChild(thead);

    const nameArr = [];
    const ageArr = [];
    const salariesArr = [];
    const citiesArr = [];

    rows.forEach(person => {
      Object.keys(person).forEach(key => {
        if (key === 'name') {
          nameArr.push(person[key]);
        }
        if (key === 'age') {
          ageArr.push(person[key]);
        }
        if (key === 'salary') {
          salariesArr.push(person[key]);
        }
        if (key === 'city') {
          citiesArr.push(person[key]);
        }
      });
    });

    for (let n = 0; n < rows.length; n++) {
      let user = [];
      user.push(nameArr[n]);
      user.push(ageArr[n]);
      user.push(salariesArr[n]);
      user.push(citiesArr[n]);
      user.push('<button class="delete-button">X</button>');
      let tr = document.createElement('tr');

      for (let i = 0; i < user.length; i++) {
        let td = document.createElement('td');
        td.innerHTML = user[i];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
    element.appendChild(tbody);

    tbody.addEventListener('click', this.#deleteOnClick);
    return element;
  }
}
