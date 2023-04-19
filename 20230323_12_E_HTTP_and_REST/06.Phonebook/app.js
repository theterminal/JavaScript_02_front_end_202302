function attachEvents() {
    const phoneBookContainer = document.getElementById('phonebook');
    const inputPerson = document.getElementById('person');
    const inputPhone = document.getElementById('phone');
    const btnLoad = document.getElementById('btnLoad');
    const btnCreate = document.getElementById('btnCreate');
    const BASE_URL = 'http://localhost:3030/jsonstore/phonebook/';

    btnLoad.addEventListener('click', loadPhoneBookHandler);
    btnCreate.addEventListener('click', createPhoneBookHandler);

    async function loadPhoneBookHandler() {
        try {
            const phoneBookRes = await fetch(BASE_URL);
            let phoneBookData = await phoneBookRes.json();

            phoneBookData = Object.values(phoneBookData);
            phoneBookContainer.innerHTML = '';

            for (const {phone, person, _id} of phoneBookData) {
                const li = document.createElement('li');
                const btnDelete = document.createElement('button');
                btnDelete.textContent = 'Delete';
                btnDelete.id = _id;
                btnDelete.addEventListener('click', deletePhoneBookHandler);
                li.innerHTML = `${person}: ${phone}`;
                li.appendChild(btnDelete);
                phoneBookContainer.appendChild(li);
            }
        } catch (err) {
            console.error(err);
        }
    }

    function createPhoneBookHandler() {
        const person = inputPerson.value;
        const phone = inputPhone.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person, phone})
        }

        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                loadPhoneBookHandler();
                inputPerson.value = '';
                inputPhone.value = '';
            })
            .catch((err) => console.error(err))
    }

    async function deletePhoneBookHandler() {
        const id = this.id; // e.currentTarget.id (it will also work)
        const httpHeaders = {
            method: 'DELETE'
        }
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((res) => res.json())
            .then(loadPhoneBookHandler)
            .catch((err) => {
                console.error(err);
            });
    }
}

attachEvents();