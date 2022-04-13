const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

//1
const names = (array) => {
  const names = array.map(function (person) {
    return person.name;
  });
  return names;
};

console.log(names(data));

//2
const year = (array) => {
  const yearArr = [];
  array.forEach(function (person) {
    const newArr = person.birthday.split("-");
    if (newArr[2] < 1990) {
      yearArr.push(person);
    }
  });
  return yearArr;
};

console.log(year(data));

//3
const food = (array) => {
  const obj = {};
  array.forEach(function (person) {
    for (const foods in person.favoriteFoods) {
      person.favoriteFoods[foods].forEach(function (dish) {
        if (obj[dish]) {
          obj[dish] += 1;
        } else {
          obj[dish] = 1;
        }
      });
    }
  });

  return obj;
};

console.log(food(data));
