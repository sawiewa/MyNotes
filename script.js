const addBtn = document.querySelector('.add');
const addSave = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.getElementsByClassName('delete-note'); //żywe kolekcje dlatego getElement
const btnDeleteAll = document.querySelector('.delete-all');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('.error');
let selectedValue;
let cardID = 0; //każda karta bedzie miała unikalne id

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	error.style.visibility = 'hidden'; //czysci error w przypadku gdy wystąpił podczas dodawania formularza
	textarea.value = ''; //czyści po kliknięciu anuluj, żeby przy ponownym otwarciu pole było puste
	category.selectedIndex = 0; // wybiera domyślny indeks, --wybierz kategorie--
};

const addNote = () => {
	if (
		textarea.value !== '' &&
		category.options[category.selectedIndex].value !== '0' //dostajemy się do konkretnej wartości value wybranej opcji
	) {
		createNote(); // jeżeli wszystkie pola uzupełnione to będzie wywoływana funkcja która stworzy notatkę i tu ją wywołamy
		error.style.visibility = 'hidden';
	} else {
		error.style.visibility = 'visible';
	}
};

const createNote = () => {
	const newNote = document.createElement('div');
	newNote.classList.add('note');
	newNote.setAttribute('id', cardID);
	newNote.innerHTML = `<div class="note-header">
	<h3 class="note-title">${selectedValue}</h3>
	<button class="delete-note"><i class="fas fa-times icon"></i></button>

</div>
<div class="note-body">
	${textarea.value}
</div>`;
	checkColor(newNote);
	noteArea.appendChild(newNote);
	cardID++; //zmieniamy id o 1
	textarea.value = ''; //czyści po kliknięciu anuluj, żeby przy ponownym otwarciu pole było puste
	category.selectedIndex = 0;
	closePanel();
	console.log(selectedValue);
};

const selectValue = () => {
	selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = (note) => {
	//funkcja która dodanie odpowiednie kolory do kazdej kategorii notatki
	switch (selectedValue) {
		case 'Zakupy':
			note.style.backgroundColor = 'rgb(72,255,0)';
			break;
		case 'Praca':
			note.style.backgroundColor = 'rgb(255,243,0)';
			break;
		case 'Inne':
			note.style.backgroundColor = 'rgb(0,170,255)';
			break;
	}
};



addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
addSave.addEventListener('click', addNote);
