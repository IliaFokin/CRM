function createContactEntry(contactsList, contactsNew, entry = null) {
  const contactsCount = document.querySelectorAll('.contacts__entry');
  if (contactsCount.length === 9) contactsNew.style.display = 'none';

  const contactsItem = document.createElement('li');
  const contactEntry = document.createElement('ul');
  const contactsItemType = document.createElement('li');
  const contactsItemDropdown = document.createElement('li');
  const contactsItemValue = document.createElement('li');
  const valueInput = document.createElement('input');
  const contactsItemDelete = document.createElement('li');
  const dropdownList = document.createElement('ul');
  const dropdownPhone = document.createElement('li');
  const dropdownEmail = document.createElement('li');
  const dropdownVK = document.createElement('li');
  const dropdownFB = document.createElement('li');
  const dropdownOther = document.createElement('li');

  contactEntry.classList.add('contacts__entry');
  contactsItemType.classList.add('contacts__type');
  contactsItemDropdown.classList.add('contacts__dropdown');
  contactsItemValue.classList.add('contacts__value');
  valueInput.classList.add('contacts__input');
  contactsItemDelete.classList.add('contacts__delete');
  dropdownList.classList.add('dropdown__list');
  dropdownPhone.classList.add('dropdown__item');
  dropdownEmail.classList.add('dropdown__item');
  dropdownVK.classList.add('dropdown__item');
  dropdownFB.classList.add('dropdown__item');
  dropdownOther.classList.add('dropdown__item');

  contactsItemType.textContent = 'Телефон';
  dropdownPhone.textContent = 'Телефон';
  dropdownEmail.textContent = 'Email';
  dropdownVK.textContent = 'VK';
  dropdownFB.textContent = 'FB';
  dropdownOther.textContent = 'Другое';
  contactsItemDelete.innerHTML = 
  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_224_6681)">
  <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
  </g>
  <defs>
  <clipPath id="clip0_224_6681">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
  </svg>`;

  contactsItemType.addEventListener('click', () => {
    contactsItemDropdown.classList.add('contacts__dropdown--active');
  })
  dropdownPhone.addEventListener('click', () => {
    contactsItemDropdown.classList.remove('contacts__dropdown--active');
    contactsItemType.textContent = dropdownPhone.textContent;
  })
  dropdownEmail.addEventListener('click', () => {
    contactsItemDropdown.classList.remove('contacts__dropdown--active');
    contactsItemType.textContent = dropdownEmail.textContent;
  })
  dropdownVK.addEventListener('click', () => {
    contactsItemDropdown.classList.remove('contacts__dropdown--active');
    contactsItemType.textContent = dropdownVK.textContent;
  })
  dropdownFB.addEventListener('click', () => {
    contactsItemDropdown.classList.remove('contacts__dropdown--active');
    contactsItemType.textContent = dropdownFB.textContent;
  })
  dropdownOther.addEventListener('click', () => {
    contactsItemDropdown.classList.remove('contacts__dropdown--active');
    contactsItemType.textContent = dropdownOther.textContent;
  })
  contactsItemDelete.addEventListener('click', () => {
    contactEntry.remove();
    const contactsCount = document.querySelectorAll('.contacts__entry');
    if (contactsCount.length === 9) contactsNew.style.display = 'block';
  })

  if(entry !== null) {
    contactsItemType.textContent = entry.type;
    valueInput.value = entry.value;
  }

  dropdownList.append(dropdownPhone, dropdownEmail, dropdownVK, dropdownFB, dropdownOther);
  contactsItemDropdown.append(dropdownList);
  contactsItemValue.append(valueInput);
  contactEntry.append(contactsItemType, contactsItemDropdown, contactsItemValue, contactsItemDelete);
  contactsItem.append(contactEntry);
  contactsList.append(contactsItem);

  
}

async function createClientCard(id = null) {
  card.classList.add('card--visible');

  const cardBody = document.querySelector('.card__body');

  const cardTop = document.createElement('div');
  const cardSubtitle = document.createElement('h2');
  const cardCloseBtn = document.createElement('button');

  cardTop.classList.add('card__top');
  cardSubtitle.classList.add('card__subtitle');
  cardCloseBtn.classList.add('card__close');

  cardCloseBtn.innerHTML = `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2332 7.73332L21.2665 6.76665L14.4998 13.5333L7.73318 6.76668L6.76652 7.73335L13.5332 14.5L6.76654 21.2667L7.73321 22.2333L14.4998 15.4667L21.2665 22.2333L22.2332 21.2667L15.4665 14.5L22.2332 7.73332Z" fill="#B0B0B0"/>
  </svg>`;
  cardCloseBtn.addEventListener('click', () => {
    clearClientCard()
  });

  cardTop.append(cardSubtitle, cardCloseBtn);


  const cardForm = document.createElement('form');
  const surnameInputWrapper = document.createElement('div');
  const nameInputWrapper = document.createElement('div');
  const lastnameInputWrapper = document.createElement('div');
  const surnameInput = document.createElement('input');
  const nameInput = document.createElement('input');
  const lastnameInput = document.createElement('input');
  const surnamePlaceholder = document.createElement('label');
  const namePlaceholder = document.createElement('label');
  const lastnamePlaceholder = document.createElement('label');
  const contactsWrapper = document.createElement('div');
  const contactsList = document.createElement('ul');
  const contactsNew = document.createElement('div');
  const errorMessage = document.createElement('div');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');

  cardForm.classList.add('card__form');
  surnameInputWrapper.classList.add('card__input-wrapper');
  nameInputWrapper.classList.add('card__input-wrapper');
  lastnameInputWrapper.classList.add('card__input-wrapper');
  surnameInput.classList.add('card__input');
  nameInput.classList.add('card__input');
  lastnameInput.classList.add('card__input');
  surnamePlaceholder.classList.add('card__placeholder', 'card__placeholder--required');
  namePlaceholder.classList.add('card__placeholder', 'card__placeholder--required');
  lastnamePlaceholder.classList.add('card__placeholder');
  contactsWrapper.classList.add('card__contacts');
  contactsList.classList.add('contacts__list');
  contactsNew.classList.add('contacts__new');
  errorMessage.classList.add('card__error-message');
  saveBtn.classList.add('card__save');
  cancelBtn.classList.add('card__cancel');

  surnamePlaceholder.textContent = 'Фамилия';
  namePlaceholder.textContent = 'Имя';
  lastnamePlaceholder.textContent = 'Отчетсво';
  surnameInput.placeholder = ' ';
  nameInput.placeholder = ' ';
  lastnameInput.placeholder = ' ';
  surnameInput.id = 'surname';
  nameInput.id = 'name';
  lastnameInput.id = 'lastname';
  
  
  if(id !== null) {
    const client = await loadClient(id);
    cardSubtitle.textContent = 'Изменить данные';
    const cardId = document.createElement('div');
    cardId.classList.add('card__id');
    cardId.textContent = `ID: ${client.id}`;
    cardTop.append(cardId);

    surnameInput.value = client.surname;
    nameInput.value = client.name;
    lastnameInput.value = client.lastName;

    if (client.contacts.length === 10) contactsNew.style.display = 'none';

    client.contacts.forEach((entry) => {
      createContactEntry(contactsList, contactsNew, entry);
    })

    cancelBtn.textContent = 'Удалить клиента';

    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      createDeleteCard(client);
    })

    cardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveClientCard(errorMessage, client);
    })
  } else {
    cardSubtitle.textContent = 'Новый клиент';
    cancelBtn.textContent = 'Отмена';

    cancelBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clearClientCard();
    })

    cardForm.addEventListener('submit', (e) => {
      e.preventDefault();
      saveClientCard(errorMessage);
    })
  }

  surnameInputWrapper.append(surnameInput, surnamePlaceholder);
  nameInputWrapper.append(nameInput, namePlaceholder);
  lastnameInputWrapper.append(lastnameInput, lastnamePlaceholder);
  contactsNew.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_224_7997)">
    <path d="M7.99998 4.66671C7.63331 4.66671 7.33331 4.96671 7.33331 5.33337V7.33337H5.33331C4.96665 7.33337 4.66665 7.63337 4.66665 8.00004C4.66665 8.36671 4.96665 8.66671 5.33331 8.66671H7.33331V10.6667C7.33331 11.0334 7.63331 11.3334 7.99998 11.3334C8.36665 11.3334 8.66665 11.0334 8.66665 10.6667V8.66671H10.6666C11.0333 8.66671 11.3333 8.36671 11.3333 8.00004C11.3333 7.63337 11.0333 7.33337 10.6666 7.33337H8.66665V5.33337C8.66665 4.96671 8.36665 4.66671 7.99998 4.66671ZM7.99998 1.33337C4.31998 1.33337 1.33331 4.32004 1.33331 8.00004C1.33331 11.68 4.31998 14.6667 7.99998 14.6667C11.68 14.6667 14.6666 11.68 14.6666 8.00004C14.6666 4.32004 11.68 1.33337 7.99998 1.33337ZM7.99998 13.3334C5.05998 13.3334 2.66665 10.94 2.66665 8.00004C2.66665 5.06004 5.05998 2.66671 7.99998 2.66671C10.94 2.66671 13.3333 5.06004 13.3333 8.00004C13.3333 10.94 10.94 13.3334 7.99998 13.3334Z" fill="#9873FF"/>
    </g>
    <defs>
    <clipPath id="clip0_224_7997">
    <rect width="16" height="16" fill="white"/>
    </clipPath>
    </defs>
  </svg>
  Добавить контакт`;
  saveBtn.textContent = 'Сохранить';

  contactsNew.addEventListener('click', () => {
    createContactEntry(contactsList, contactsNew);
  })

  contactsWrapper.append(contactsList, contactsNew);
  cardForm.append(surnameInputWrapper, nameInputWrapper, lastnameInputWrapper, contactsWrapper, errorMessage, saveBtn, cancelBtn);
  cardBody.append(cardTop, cardForm);
}

function createDeleteCard(client) {
  card.classList.add('card--visible');

  const cardBody = document.querySelector('.card__body');
  const cardTitle = document.createElement('h2');
  const cardDescr = document.createElement('p');
  const yesBtn = document.createElement('button');
  const noBtn = document.createElement('button');
  
  cardBody.classList.add('card__body--confirm');
  cardTitle.classList.add('card__subtitle');
  cardDescr.classList.add('card__descr');
  yesBtn.classList.add('card__save');
  noBtn.classList.add('card__cancel');
  
  cardBody.innerHTML = '';
  cardTitle.textContent = 'Удалить клиента';
  cardDescr.textContent = 'Вы действительно хотите удалить данного клиента?';
  yesBtn.textContent = 'Удалить';
  noBtn.textContent = 'Отмена';

  cardBody.append(cardTitle, cardDescr, yesBtn, noBtn);

  yesBtn.addEventListener('click', async () => {
    const status = await deleteClient(client);
    if (status === 200) {
      clearClientCard();
      start();
    } else {
      const errorMessage = document.createElement('div');
      errorMessage.classList.add('card__error-message');
      errorMessage.style.margin = 0;
      errorMessage.textContent = 'Что-то пошло не так';
      cardBody.append(errorMessage);
    }
  });
  noBtn.addEventListener('click', () => {
    clearClientCard();
  });
}

async function saveClientCard(errorMessage, client = null) {
  const surname = document.getElementById('surname').value.substr(0, 1).toUpperCase() + document.getElementById('surname').value.substr(1).toLowerCase();
  const name = document.getElementById('name').value.substr(0, 1).toUpperCase() + document.getElementById('name').value.substr(1).toLowerCase();
  const lastName = document.getElementById('lastname').value.substr(0, 1).toUpperCase() + document.getElementById('lastname').value.substr(1).toLowerCase();


  const contactsType = document.querySelectorAll('.contacts__type');
  const contactsInputs = document.querySelectorAll('.contacts__input');

  let contacts = [];

  for (let i = 0; i < contactsType.length; i++) {
    if (contactsInputs[i].value === '') continue;
    contacts.push({
      type: contactsType[i].textContent,
      value: contactsInputs[i].value,
    })
  }

  errorMessage.innerHTML = '';

  if (surname.trim() === '') {
    errorMessage.innerHTML += 'Поле "Фамилия" должно быть заполнено<br>';
  };
  if (name.trim() === '') {
    errorMessage.innerHTML += 'Поле "Имя" должно быть заполнено<br>';
  };
  if (contacts.length === 0) {
    errorMessage.innerHTML += 'Внесите минимум 1 контакт';
  }
  
  let responseStatus;

  if (errorMessage.innerHTML === '') {
    if (client !== null) {
      let statusCheckList = [];
      if (surname !== client.surname) {
        responseStatus = await changeClient(client.id, 'surname', surname);
        statusCheckList.push(responseStatus);
      }
      if (name !== client.name) {
        responseStatus = await changeClient(client.id, 'name', name);
        statusCheckList.push(responseStatus);
      }
      if (lastName !== client.lastName) {
        responseStatus = await changeClient(client.id, 'lastName', lastName);
        statusCheckList.push(responseStatus);
      }
      if (JSON.stringify(contacts) !== JSON.stringify(client.contacts)) {
        responseStatus = await changeClient(client.id, 'contacts', contacts);
        statusCheckList.push(responseStatus);
      }

      if (!statusCheckList.includes(200)) {
        errorMessage.textContent = 'Что-то пошло не так';
      } else {
        clearClientCard();
        start();
      }
    } else {
      let client = {
        surname,
        name,
        lastName,
        contacts,
      };
      responseStatus = await createClient(client);
      if (responseStatus !== 201) {
        errorMessage.textContent = 'Что-то пошло не так';
      } else {
        clearClientCard();
        start();
      }
    }
  };
}

function clearClientCard() {
  card.classList.remove('card--visible');
  const cardBody = document.querySelector('.card__body');
  cardBody.classList.remove('card__body--confirm');
  cardBody.innerHTML = '';
}

function createTable(clientsList) {
  const tableBody = document.querySelector('.table__body');

  if(tableBody.innerHTML !== '') tableBody.innerHTML = '';

  console.log(clientsList);

  clientsList.forEach((client) => {

  const row = document.createElement('tr');
  const idCell = document.createElement('td');
  const fullnameCell = document.createElement('td');
  const createdDateCell = document.createElement('td');
  const createdTimeCell = document.createElement('td');
  const updatedDateCell = document.createElement('td');
  const updatedTimeCell = document.createElement('td');
  const contactsCell = document.createElement('td');
  const updateCell = document.createElement('td');
  const deleteCell = document.createElement('td');

  row.classList.add('table__row');
  idCell.classList.add('table__cell');
  fullnameCell.classList.add('table__cell');
  createdDateCell.classList.add('table__cell');
  createdTimeCell.classList.add('table__cell');
  updatedDateCell.classList.add('table__cell');
  updatedTimeCell.classList.add('table__cell');
  contactsCell.classList.add('table__cell');
  updateCell.classList.add('table__cell');
  deleteCell.classList.add('table__cell');

  
  idCell.textContent = client.id;
  fullnameCell.textContent = getFullname(client);
  const clientDate = getDate(client);
  createdDateCell.textContent = clientDate.createdDate;
  createdTimeCell.textContent = clientDate.createdTime;
  updatedDateCell.textContent = clientDate.updatedDate;
  updatedTimeCell.textContent = clientDate.updatedTime;

  let contactsCount = 0;
  let contactsIcons = [];

  client.contacts.forEach((contact) => {
    contactsCount++;
    
    const contactIcon = document.createElement('div');
    const contactTooltip = document.createElement('span');
    contactIcon.classList.add('table__contact-icon');
    contactTooltip.classList.add('contact__tooltip');
    if (contactsCount > 4) contactIcon.style.display = 'none';
    switch (contact.type) {
      case 'Телефон':
        contactIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <circle cx="8" cy="8" r="8" fill="#9873FF"/>
        <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
        </g>
        </svg>`;
        break;
      case 'VK':
        contactIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
        </g>
        </svg>`;
        break;
      case 'FB':
        contactIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
        </g>
        </svg>`;
        break;
      case 'Email': 
        contactIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
        </svg>`;
        break;
      case 'Другое':
        contactIcon.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
        </g>
        </svg>`;
    }
    contactTooltip.textContent = contact.type + ': ' + contact.value;
    contactIcon.append(contactTooltip);
    contactsIcons.push(contactIcon);
    contactsCell.append(contactIcon);
  })

  if (contactsCount > 4) {
    const contactsMore = document.createElement('div');
    contactsMore.classList.add('table__contact-more');
    contactsMore.textContent = `+${contactsCount - 4}`;
    contactsCell.append(contactsMore);

    contactsMore.addEventListener('click', () => {
      contactsIcons.forEach((contact) => {
        contact.style.display = 'inline-block';
      })
      contactsMore.style.display = 'none';
    })
  }

  updateCell.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.7" clip-path="url(#clip0_224_2140)">
  <path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="#9873FF"/>
  </g>
  <defs>
  <clipPath id="clip0_224_2140">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
  </svg> Изменить`;
  deleteCell.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g opacity="0.7" clip-path="url(#clip0_224_2145)">
  <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/>
  </g>
  <defs>
  <clipPath id="clip0_224_2145">
  <rect width="16" height="16" fill="white"/>
  </clipPath>
  </defs>
  </svg> Удалить`;

  updateCell.addEventListener('click', () => {
    createClientCard(client.id);
  })

  deleteCell.addEventListener('click', () => {
    createDeleteCard(client);
  })

  row.append(idCell, fullnameCell, createdDateCell, createdTimeCell, updatedDateCell, updatedTimeCell, contactsCell, updateCell, deleteCell);
  tableBody.append(row);

  })
}

function sortClientsList(arr, prop, direction = 'asc') {
  let sortedArr = arr.sort((a, b) => {
    if (direction === 'asc') {
      if (a[prop] < b[prop]) return -1;
    } else {
      if (a[prop] > b[prop]) return -1;
    }
  });
  return sortedArr;
}

function resetSort() {
  const headCells = document.querySelectorAll('.table__headcell');
  const idCell = document.getElementById('id');
  headCells.forEach((cell) => {
    cell.classList.remove('table__headcell--asc');
    cell.classList.remove('table__headcell--desc');
  });
  idCell.classList.add('table__headcell--asc');
}

async function loadClientList() {
  loader.classList.add('loader--visible');
  const response = await fetch('http://localhost:3000/api/clients');
  const data = await response.json();
  loader.classList.remove('loader--visible');
  return data;
}

async function searchInClientList(str) {
  loader.classList.add('loader--visible');
  const response = await fetch(`http://localhost:3000/api/clients?search=${str}`);
  const data = await response.json();
  loader.classList.remove('loader--visible');
  return data;
}

async function createClient(client) {
  loader.classList.add('loader--visible');
  const response = await fetch('http://localhost:3000/api/clients', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(client)
  });
  loader.classList.remove('loader--visible');
  return response.status;
}

async function loadClient(id) {
  loader.classList.add('loader--visible');
  const response = await fetch(`http://localhost:3000/api/clients/${id}`);
  const data = await response.json();
  loader.classList.remove('loader--visible');
  return data;
}

async function changeClient(id, prop, value) {
  loader.classList.add('loader--visible');
  const response = await fetch(`http://localhost:3000/api/clients/${id}`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({[prop]: value})
  });
  loader.classList.remove('loader--visible');
  return response.status;
}

async function deleteClient(client) {
  loader.classList.add('loader--visible');
  const response = await fetch(`http://localhost:3000/api/clients/${client.id}`, {
    method: 'DELETE',
  });
  loader.classList.remove('loader--visible');
  return response.status;
}

function getDate(client) {
  const createdDateTime = client.createdAt.split('T');
  const createdDate = createdDateTime[0].split('-');
  const createdTime = createdDateTime[1].slice(0, 5);
  const updatedDateTime = client.updatedAt.split('T');
  const updatedDate = updatedDateTime[0].split('-');
  const updatedTime = updatedDateTime[1].slice(0, 5);
  const clientDate = {
    createdDate: `${createdDate[2]}.${createdDate[1]}.${createdDate[0]}`,
    createdTime,
    updatedDate: `${updatedDate[2]}.${updatedDate[1]}.${updatedDate[0]}`,
    updatedTime};
  return clientDate;
}

function getFullname(client) {
  const fullname = client.surname + ' ' + client.name + ' ' + client.lastName;
  return fullname;
}

async function searchClients() {
  clientsListFiltered = [...clientsList];
  if (search.value.trim() !== '') {
    clientsListFiltered = await searchInClientList(search.value);
    clientsListFiltered.forEach((client) => {
      client.fullname = getFullname(client);
    })
    console.log(clientsListFiltered);
  } 
  else start();

  resetSort();
  createTable(sortClientsList(clientsListFiltered, 'id'));
}

async function start()  {
  clientsList = await loadClientList();

  clientsList.forEach((client) => {
    client.fullname = getFullname(client);
  })

  clientsListFiltered = [...clientsList];

  resetSort();
  createTable(sortClientsList(clientsList, 'id'));
};






let clientsList = [];
let clientsListFiltered = [];

const loader = document.querySelector('.loader');

start();

const newClientBtn = document.querySelector('.main__btn');
const card = document.querySelector('.card');
const cardCloseBtn = document.querySelector('.card__close');
const cardBackground = document.querySelector('.card__background');

newClientBtn.addEventListener('click', () => {
  createClientCard();
});
cardBackground.addEventListener('click', () => {
  clearClientCard();
});


const headCells = document.querySelectorAll('.table__headcell');
let lastSorted = document.getElementById('id');

headCells.forEach((cell) => {
  cell.addEventListener('click', () => {
    if (cell.classList.contains('table__headcell--asc')) {
      cell.classList.remove('table__headcell--asc');
      cell.classList.add('table__headcell--desc');
      lastSorted = cell;
      createTable(sortClientsList(clientsListFiltered, cell.id, 'desc'));
    } else {
      lastSorted.classList.remove('table__headcell--asc', 'table__headcell--desc');
      cell.classList.remove('table__headcell--desc');
      cell.classList.add('table__headcell--asc');
      lastSorted = cell
      createTable(sortClientsList(clientsListFiltered, cell.id));
    }
  })
})

let timer;
const search = document.querySelector('.header__input');

search.addEventListener('input', () => {
  clearTimeout(timer);
  timer = setTimeout(searchClients, 1000);
})