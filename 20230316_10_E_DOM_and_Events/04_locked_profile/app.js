// 20230316 - JavaScript Front-End - DOM and Events - Exercise
// 04 - Locked Profile - judge: https://judge.softuni.org/Contests/Practice/Index/3795#3


// ___________ version 01 ___________ shorter vershion using 'forLoop'


function lockedProfile() {
    const divIdUser1HiddenFields = document.getElementById('user1HiddenFields');
    const divIdUser2HiddenFields = document.getElementById('user2HiddenFields');
    const divIdUser3HiddenFields = document.getElementById('user3HiddenFields');
    let fields = [divIdUser1HiddenFields, divIdUser2HiddenFields, divIdUser3HiddenFields];

    const btns = document.querySelectorAll('button');

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', () => {
            let currentParentDiv = fields[i].parentElement;
            let lock = currentParentDiv.querySelector('.profile > input');

            if (lock.checked === false) {
                if (fields[i].style.display !== 'block') {
                     fields[i].style.display = 'block';
                     btns[i].textContent = 'Hide it';
                } else if (fields[i].style.display === 'block') {
                     fields[i].style.display = 'none';
                     btns[i].textContent = 'Show more';
                }
            }
        })
    }
}


// ___________ version 02 ______________ Longer version not using loops


function lockedProfile() {
    const divIdUser1HiddenFields = document.getElementById('user1HiddenFields');
    const divIdUser2HiddenFields = document.getElementById('user2HiddenFields');
    const divIdUser3HiddenFields = document.getElementById('user3HiddenFields');

    const btns = document.querySelectorAll('button');

    btns[0].addEventListener('click', () => {
        let currentParentDiv = divIdUser1HiddenFields.parentElement;
        let lock = currentParentDiv.querySelector('.profile > input');

        if (lock.checked === false) {
            if (divIdUser1HiddenFields.style.display !== 'block') {
                divIdUser1HiddenFields.style.display = 'block';
                btns[0].textContent = 'Hide it';
            } else if (divIdUser1HiddenFields.style.display === 'block') {
                divIdUser1HiddenFields.style.display = 'none';
                btns[0].textContent = 'Show more';
            }
        }
    })

    btns[1].addEventListener('click', () => {
        let currentParentDiv = divIdUser2HiddenFields.parentElement;
        let lock = currentParentDiv.querySelector('.profile > input');

        if (lock.checked === false) {
            if (divIdUser2HiddenFields.style.display !== 'block') {
                divIdUser2HiddenFields.style.display = 'block';
                btns[1].textContent = 'Hide it';
            } else if (divIdUser2HiddenFields.style.display === 'block') {
                divIdUser2HiddenFields.style.display = 'none';
                btns[1].textContent = 'Show more';
            }
        }
    })

    btns[2].addEventListener('click', () => {
        let currentParentDiv = divIdUser3HiddenFields.parentElement;
        let lock = currentParentDiv.querySelector('.profile > input');

        if (lock.checked === false) {
            if (divIdUser3HiddenFields.style.display !== 'block') {
                divIdUser3HiddenFields.style.display = 'block';
                btns[2].textContent = 'Hide it';
            } else if (divIdUser3HiddenFields.style.display === 'block') {
                divIdUser3HiddenFields.style.display = 'none';
                btns[2].textContent = 'Show more';
            }
        }
    })
}