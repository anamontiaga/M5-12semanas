"use strict";
// const writeThis = (word, number) => {
//   for (let i = 0; i < number; i++) {
//     console.log(word);
//   }
// };

// const getRandomNumber = max => {
//   return Math.ceil(Math.random() * max);
// };

// writeThis("carambola", getRandomNumber(10));

const myWordList = [
  {
    text: "Pencil",
    total: 6
  },
  {
    text: "Thermo",
    total: 2
  },
  {
    text: "TV",
    total: 8
  },
  {
    text: "Phone",
    total: 4
  }
];

const writeMyArray = arr => {
  for (let i = 0; i < arr.lenght; i++) {
    for (let i = 0; i < arr[i].total; i++) {
      console.log(arr[i].text);
    }
  }
};

writeMyArray(myWordList);
