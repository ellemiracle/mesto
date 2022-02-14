const popupElement = document.querySelector('.popup'); //переменная для всего popup
const editProfile = document.querySelector('.edit-profile'); //переменная для открытия редактирования профиля
const closeButton = popupElement.querySelector('.popup__close-button'); //переменная для закрытия редактирования
const saveButton = document.querySelector('.popup__save-button'); //переменная для кнопки сохранить
const userName = document.querySelector('.profile__user-name'); //переменная имени профиля на странице
const userJop = document.querySelector('.profile__user-jop'); //переменная работы на странице

	let nameInput = document.querySelector('.popup__user-name');
	let jobInput = document.querySelector('.popup__user-jop');

function openPopup() {
	popupElement.classList.remove('popup_opened');
}

function closePopup() {
	popupElement.classList.add('popup_opened');
}

editProfile.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)


// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
nameInput.value = userName.textContent;
jobInput.value = userJop.textContent;

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
	evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

	// Находим поля формы в DOM

	// Получите значение полей из свойства value
	userName.textContent = nameInput.value;
	userJop.textContent = jobInput.value;

	closePopup();
	// Выберите элементы, куда должны быть вставлены значения полей

	// Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 