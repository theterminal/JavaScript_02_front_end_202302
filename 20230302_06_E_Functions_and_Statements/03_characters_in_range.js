// 20230302 - JavaScript Front-End 202302 - JS Functions and Statements - Exercise
// 03 - Characters in Range - judge: https://judge.softuni.org/Contests/Compete/Index/3789#2


// ____________ version 3 ______________


function charactersInRange2(char1, char2) {
  let start = char1.charCodeAt(0);
  let end = char2.charCodeAt(0);
  
  if (start > end) {                                        // swaps the value of the variables
    [start, end] = [end, start];
  }

  let result = '';
  
  for (let i = start + 1; i < end; i++) {
      result += `${String.fromCharCode(i)} `;
    }
  
    console.log(result);
}


charactersInRange2("a", "d");
charactersInRange2("#", ":");
charactersInRange2("C", "#");


// ____________ version 2 ______________


function charactersInRange2(char1, char2) {
    let code1 = char1.charCodeAt(0);
    let code2 = char2.charCodeAt(0);
    let start = Math.min(code1, code2);
    let end = Math.max(code1, code2);
    let result = '';
    
    for (let i = start + 1; i < end; i++) {
        result += `${String.fromCharCode(i)} `;
      }
    
      console.log(result);
}


charactersInRange2("a", "d");
charactersInRange2("#", ":");
charactersInRange2("C", "#");


// ____________ version 1 ______________


function charactersInRange1(char1, char2) {
  let code1 = char1.charCodeAt(0);
  let code2 = char2.charCodeAt(0);
  let start = 0;
  let end = 0;
  let result = "";

  if (code1 > code2) {
    start = code2;
    end = code1;
  } else {
    start = code1;
    end = code2;
  }

  for (let i = start + 1; i < end; i++) {
    result += `${String.fromCharCode(i)} `;
  }

  console.log(result);
}

charactersInRange1("a", "d");
charactersInRange1("#", ":");
charactersInRange1("C", "#");
