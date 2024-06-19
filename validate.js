document.querySelector('form').addEventListener('submit', validateForm);
function validateForm(event) {
  // Get all form fields
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const subscriptionPreferences = document.getElementsByName('subscription-preferences');

  // Validate each field
  if (!validateFirstName(firstName)) {
    event.preventDefault();
    displayErrorMessage(firstName, 'Please enter a valid first name');
  } else {
    removeErrorMessage(firstName);
  }
  if (!validateLastName(lastName)) {
    event.preventDefault();
    displayErrorMessage(lastName, 'Please enter a valid last name');
  } else {
    removeErrorMessage(lastName);
  }
  if (!validateEmail(email)) {
    event.preventDefault();
    displayErrorMessage(email, 'Please enter a valid email address');
  } else {
    removeErrorMessage(email);
  }
  if (!validatePassword(password)) {
    event.preventDefault();
    displayErrorMessage(password, 'Please enter a valid password');
  } else {
    removeErrorMessage(password);
  }
  if (!validateSubscriptionPreferences(subscriptionPreferences)) {
    event.preventDefault();
    displayErrorMessage(subscriptionPreferences[0], 'Please select at least one subscription preference');
  } else {
    removeErrorMessage(subscriptionPreferences[0]);
  }
}

// Function to validate first name
function validateFirstName(field) {
  return field.value.trim().length > 0;
}

// Function to validate last name
function validateLastName(field) {
  return field.value.trim().length > 0;
}

// Function to validate email
function validateEmail(field) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(field.value);
}

// Function to validate password
function validatePassword(field) {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*]).{8,}$/;
  return passwordRegex.test(field.value);
}

// Function to validate subscription preferences
function validateSubscriptionPreferences(fields) {
  return Array.prototype.some.call(fields, function(field) {
    return field.checked;
  });
}

// Function to display error message
function displayErrorMessage(field, message) {
  const errorMessageDiv = field.parentNode.querySelector('.error-message');
  if (!errorMessageDiv) {
    const newErrorMessageDiv = document.createElement('div');
    newErrorMessageDiv.classList.add('error-message');
    newErrorMessageDiv.textContent = message;
    field.parentNode.appendChild(newErrorMessageDiv);
  } else {
    errorMessageDiv.textContent = message;
  }
}

// Function to remove error message
function removeErrorMessage(field) {
  const errorMessageDiv = field.parentNode.querySelector('.error-message');
  if (errorMessageDiv) {
    errorMessageDiv.remove();
  }
}