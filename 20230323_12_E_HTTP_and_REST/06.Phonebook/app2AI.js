// Select the HTML elements we will be working with
const phonebookUl = document.getElementById('phonebook');
const loadBtn = document.getElementById('btnLoad');
const createBtn = document.getElementById('btnCreate');
const personInput = document.getElementById('person');
const phoneInput = document.getElementById('phone');

// Define the base URL for the server
const baseUrl = 'http://localhost:3030/jsonstore/phonebook';

// Function to load phonebook entries from the server
async function loadPhonebook() {
  // Clear the existing phonebook entries
  phonebookUl.innerHTML = '';

  // Make a GET request to the server to get all phonebook entries
  const response = await fetch(baseUrl);
  const data = await response.json();

  // Iterate over the received entries and add them to the phonebook list
  for (const [key, {person, phone}] of Object.entries(data)) {
    const li = document.createElement('li');
    li.textContent = `${person}: ${phone}`;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', async () => {
      // When the delete button is clicked, make a DELETE request to the server to delete the entry
      await fetch(`${baseUrl}/${key}`, {method: 'DELETE'});
      // Reload the phonebook
      loadPhonebook();
    });
    li.appendChild(deleteBtn);
    phonebookUl.appendChild(li);
  }
}

// Add an event listener to the load button to load the phonebook on click
loadBtn.addEventListener('click', loadPhonebook);

// Add an event listener to the create button to create a new phonebook entry on click
createBtn.addEventListener('click', async () => {
  // Get the person and phone values from the input fields
  const person = personInput.value.trim();
  const phone = phoneInput.value.trim();

  // Make sure the input fields are not empty
  if (!person || !phone) {
    alert('Please enter a person and phone number.');
    return;
  }

  // Make a POST request to the server to create a new phonebook entry
  await fetch(baseUrl, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({person, phone})
  });

  // Clear the input fields
  personInput.value = '';
  phoneInput.value = '';

  // Reload the phonebook
  loadPhonebook();
});
