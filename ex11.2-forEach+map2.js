numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//1
const doubleValues = (array) => {
  return array.map((num) => num * 2);
};

console.log(doubleValues(numbers));

//2
const onlyEvenValues = (array) => {
  const arr = [];
  array.forEach(function (num) {
    if (num % 2 === 0) {
      arr.push(num);
    }
  });
  return arr;
};

console.log(onlyEvenValues(numbers));

//3
words = ["hello", "my", "name", "is", "Liat"];
const showFirstAndLast = (array) => {
  const arr = [];
  array.forEach(function (word, idx) {
    if (idx === 0) {
      arr.push(word);
    }
    if (idx === array.length - 1) {
      arr.push(word);
    }
  });
  return arr;
};

console.log(showFirstAndLast(words));

//4
const vowelCount = (str) => {
  const vowels = ["a", "u", "i", "e", "o"];
  const strSplit = str.split(""); //the string as an array so i can use forEach
  const obj = {};
  strSplit.forEach(function (letter) {
    if (vowels.includes(letter)) {
      if (obj[letter]) {
        obj[letter] += 1;
      } else {
        obj[letter] = 1;
      }
    }
  });

  return obj;
};

console.log(vowelCount("Helloaaao"));

//5
const capitalize = (str) => {
  const arr = str.split("");
  const arr2 = arr.map(function (letter) {
    return letter.toUpperCase();
  });
  return arr2.join("");
};

console.log(capitalize("Hello I'm Liat"));

//6
const shiftLetters = (str) => {
  const arrStr = str.split("");
  const newArr = arrStr.map(function (letter) {
    let newLetter = letter.charCodeAt(0) - 1; //charCodeAt Get the Unicode of the first character in a string
    newLetter = String.fromCharCode(newLetter);
    return newLetter;
  });
  return newArr.join("");
};

console.log(shiftLetters("wonderfull"));

//7
const swapCase = (str) => {
  const arr = str.split(" ");
  const newArr = arr.map(function (word) {
    return capitalize(word);
  });
  return newArr.join(" ");
};

console.log(swapCase("Hello World"));
