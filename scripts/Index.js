const popup = document.querySelector('.popup'); //переменная для всего popup
const profileEditButton = document.querySelector('.profile__edit-button');
const popupExitButton = popup.querySelector('.popup__exit-button');
const formElement = document.querySelector('.popup__form');
const popupFieldName = popup.querySelector('.popup__field_input_name');
const popupFieldDescription = popup.querySelector('.popup__field_input_description');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

// const popupToggle = function() {
//   popup.classList.toggle('popup_opened');
// }



// profileEditButton.addEventListener('click', popupToggle);
// popupExitButton.addEventListener('click', popupToggle);

const popupOpen = function() {
  popup.classList.add('popup_opened');
  
  //2 метода ниже добавляют в форму попапа содержимое из профиля
  popupFieldName.value = profileName.textContent;
  popupFieldDescription.value = profileDescription.textContent;
}

const popupClose = function() {
  popup.classList.remove('popup_opened')
}

profileEditButton.addEventListener('click', popupOpen);
popupExitButton.addEventListener('click', popupClose);

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popupFieldName.value;
  profileDescription.textContent = popupFieldDescription.value;
  popupClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);