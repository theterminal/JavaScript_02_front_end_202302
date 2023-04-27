// 20230316 - JavaScript Front-End - DOM and Events - Exercise
// 02 - Sections - judge: https://judge.softuni.org/Contests/Practice/Index/3795#1


// ___________ version 01 ______________



function create(words) {
   const divContent = document.getElementById('content');

   for (const word of words) {
      let div = document.createElement('div');
      let p = document.createElement('p');
      p.setAttribute('style', 'display: none');
      p.textContent = word;
      div.appendChild(p);
      div.addEventListener('click', () => {
         p.setAttribute('style', 'display: block');
      });
      divContent.appendChild(div);
   }
}


// ___________ version 02 ______________


function create(words) {
   const divContent = document.getElementById('content');

   for (const word of words) {
      let div = document.createElement('div');
      div.innerHTML = `<p style="display: none;">${word}</p>`;
      divContent.appendChild(div);
   }

   const ps = document.querySelectorAll('p');
   for (const p of ps) {
      p.parentElement.addEventListener('click', () => {
         p.style.display = 'block';
      });
   }
}