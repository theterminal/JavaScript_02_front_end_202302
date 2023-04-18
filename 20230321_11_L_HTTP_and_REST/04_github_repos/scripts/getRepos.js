// function loadRepos() {
//    const BASE_URL = 'https://api.github.com/users/testnakov/repos';
//    const resultContainer = document.getElementById('res');

//    fetch(BASE_URL, {method: 'GET'})
//       .then((res) => res.text())
//       .then((data) => {
//          resultContainer.textContent = data;
//       })
//       .catch((err) => {
//          console.error(err);
//       })
// }


// ________ could have this syntax too )_______


function loadRepos() {
   const BASE_URL = 'https://api.github.com/users/testnakov/repos';
   const result = document.getElementById('res');

   const fetchAllRepos = fetch(BASE_URL, {method: 'GET'});      // Promise
   
   fetchAllRepos
      .then((res) => res.text())
      .then((data) => {
         result.textContent = data;
      })
      .catch((err) => {
         console.error(err); 
      })
}


// ________ use the following for JSON _______ above fro text ______


// function loadRepos() {
//    const BASE_URL = 'https://api.github.com/users/testnakov/repos';
//    const resultContainer = document.getElementById('res');

//    fetch(BASE_URL, {method: 'GET'})
//       .then((res) => res.json())                // above is text
//       .then((data) => {
//          resultContainer.textContent = data;
//          console.log(data);                     // here we log it
//       })
//       .catch((err) => {
//          console.error(err);
//       })
// }