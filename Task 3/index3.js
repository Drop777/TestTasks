const newName = document.querySelector('.input #new-name');
const newSurname = document.querySelector('.input #new-surname');
const newEmail = document.querySelector('.input #new-email');
const addButton = document.querySelector('.add-btn');

let dataTable = [];
initialRenderList(dataTable);

addButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (newName.value.length === 0 || newSurname.value.length === 0 || newEmail.value.length === 0) {
    return undefined;
  };

  const newData = {
    name: newName.value.trimLeft(),
    surname: newSurname.value.trimLeft(),
    email: newEmail.value.trimLeft(),
    time: new Date().toUTCString(),
  };

  newEmail.value = '';
  newName.value = '';
  newSurname.value = '';

  renderNewItem(newData);
})

function initialRenderList(list) {

  const newList = list.map(item => {
    const newElementName = document.createElement('td');
    const newElementSurname = document.createElement('td');
    const newElementEmail = document.createElement('td');
    const newElementTime = document.createElement('td');
    const newElementActions = document.createElement('td');

    const editBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    editBtn.innerText = 'Edit';
    deleteBtn.innerText = 'Delete';

    deleteBtn.classList.add('delete');
    editBtn.classList.add('edit');

    newElementActions.append(editBtn, deleteBtn);

    newElementName.classList.add('item');
    newElementSurname.classList.add('item');
    newElementEmail.classList.add('item');
    newElementTime.classList.add('item');
    newElementActions.classList.add('item');

    newElementName.innerHTML = item.name;
    newElementSurname.innerHTML = item.surname;
    newElementEmail.innerHTML = item.email;
    newElementTime.innerHTML = item.time;

    const row = document.createElement('tr');
    row.append(newElementName, newElementSurname, newElementEmail, newElementTime, newElementActions);

    return row;
  })

  return newList;
}

function renderNewItem({ name, surname, email, time }) {
  const newElementName = document.createElement('td');
  const newElementSurname = document.createElement('td');
  const newElementEmail = document.createElement('td');
  const newElementTime = document.createElement('td');
  const newElementActions = document.createElement('td');

  const editBtn = document.createElement('button');
  const deleteBtn = document.createElement('button');

  editBtn.innerText = 'Edit';
  deleteBtn.innerText = 'Delete';

  deleteBtn.classList.add('delete');
  editBtn.classList.add('edit');

  newElementActions.append(editBtn, deleteBtn);

  newElementName.classList.add('item');
  newElementSurname.classList.add('item');
  newElementEmail.classList.add('item');
  newElementTime.classList.add('item');
  newElementActions.classList.add('item-actions');

  newElementName.innerHTML = name;
  newElementSurname.innerHTML = surname;
  newElementEmail.innerHTML = email;
  newElementTime.innerHTML = time;

  const row = document.createElement('tr');
  row.classList.add('tableEl');
  row.append(newElementName, newElementSurname, newElementEmail, newElementTime, newElementActions);

  row.addEventListener('click', (event) => {
    if (!event.target.classList.contains('delete')) {
      return;
    }
    console.log('hi')
    const rootEl = event.target.parentElement.parentElement;
  
    document.querySelector('tbody').removeChild(rootEl);
  });

  row.addEventListener('click', (event) => {
    if (!event.target.classList.contains('edit')) {
      return;
    }
    const inputName = document.createElement('input');
    const inputSurname = document.createElement('input');
    const inputEmail = document.createElement('input');
    const inputTime = document.createElement('input');

    const row = event.target.parentElement.parentElement;

    const currentName = row.childNodes[0].innerText;
    const currentSurname = row.childNodes[1].innerText;
    const currentEmail = row.childNodes[2].innerText;
    const currentTime = row.childNodes[3].innerText;

    inputName.value = currentName;
    inputSurname.value = currentSurname;
    inputEmail.value = currentEmail;
    inputTime.value = currentTime;

    inputName.classList.add('edit-input');
    inputSurname.classList.add('edit-input');
    inputEmail.classList.add('edit-input');
    inputTime.classList.add('edit-input');

    row.childNodes[0].innerText = '';
    row.childNodes[0].append(inputName);
    row.childNodes[1].innerText = '';
    row.childNodes[1].append(inputSurname);
    row.childNodes[2].innerText = '';
    row.childNodes[2].append(inputEmail);
    row.childNodes[3].innerText = '';
    row.childNodes[3].append(inputTime);

    console.log(currentName, currentSurname, currentEmail, currentTime);
  });

  row.addEventListener('keypress',(event) => {
    if (event.key === 'Enter') {
      const editedItem = {
        name: row.childNodes[0].childNodes[0].value,
        surname: row.childNodes[1].childNodes[0].value,
        email: row.childNodes[2].childNodes[0].value,
        time: row.childNodes[3].childNodes[0].value,
      } 
      const child = [row.childNodes[0].firstChild, row.childNodes[1].firstChild, row.childNodes[2].firstChild, row.childNodes[3].firstChild]

      row.childNodes[0].removeChild(child[0]);
      row.childNodes[1].removeChild(child[1]);
      row.childNodes[2].removeChild(child[2]);
      row.childNodes[3].removeChild(child[3]);

      row.childNodes[0].innerText = editedItem.name;
      row.childNodes[1].innerText = editedItem.surname;
      row.childNodes[2].innerText = editedItem.email;
      row.childNodes[3].innerText = editedItem.time;
      
      // console.log(editedItem);
      // renderNewItem(editedItem);
    }
});

  document.querySelector('tbody').append(row);
}
