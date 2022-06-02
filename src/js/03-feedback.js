import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const LOCAL_STORAGE_SAVE_KEY = 'feedback-form-state';

formRef.addEventListener('input', throttle(onFeedbackFormInput, 500));
formRef.addEventListener('submit', onFeedbackFormSubmit);

loadSavedData();

function onFeedbackFormInput(event) {
  const dataToSave = {
    email: formRef.email.value,
    message: formRef.message.value,
  };

  saveToLocalStorage(LOCAL_STORAGE_SAVE_KEY, dataToSave);
}

function onFeedbackFormSubmit(event) {
  event.preventDefault();
  console.log({
    email: event.currentTarget.elements.email.value,
    message: event.currentTarget.elements.message.value,
  });
  removeFromLocalStorage(LOCAL_STORAGE_SAVE_KEY);
  event.currentTarget.reset();
}

function loadSavedData() {
  const loadedString = localStorage.getItem(LOCAL_STORAGE_SAVE_KEY);
  if (!loadedString) {
    formRef.email.value = '';
    formRef.message.value = '';
    return;
  }
  const loadedObject = JSON.parse(loadedString);
  formRef.email.value = loadedObject?.email;
  formRef.message.value = loadedObject?.message;
}

function saveToLocalStorage(key, value = {}) {
  localStorage.setItem(key, JSON.stringify(value));
}

function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}
