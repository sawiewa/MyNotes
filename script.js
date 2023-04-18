const addBtn = document.querySelector('.add');
const addSave = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.getElementsByClassName('delete-note'); //żywe kolekcje dlatego getElement
const btnDeleteAll = document.querySelector('.delete-all');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textarea = document.querySelector('#text');
const error = document.querySelector('error');
let selectedValue;
let cardID = 0; //każda karta bedzie miała unikalne id

const openPanel = () => {
	notePanel.style.display = 'flex';
};

const closePanel = () => {
	notePanel.style.display = 'none';
	//error.style.visibility = 'hidden';
	textarea.value = ''; //czyści po kliknięciu anuluj, żeby przy ponownym otwarciu pole było puste
	category.selectedIndex = 0; // wybiera domyślny indeks, --wybierz kategorie--
};

addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel);
