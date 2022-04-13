const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

//1
function getCandy(candyStore, id) {
  const candyById = candyStore.candies.find((candy) => candy.id === id);
  return candyById;
}

console.log(getCandy(candyStore, "as12f"));

//2
function getPrice(candyStore, id) {
  const candyById = getCandy(candyStore, id);
  return candyById.price;
}

console.log(getPrice(candyStore, "5hd7y"));

//3
function addCandy(candyStore, id, name, price) {
  const newObj = {
    name: name,
    id: id,
    price: price,
  };
  candyStore.candies.push(newObj);
}

addCandy(candyStore, "12345", "Bamba", 4);
console.log(candyStore);

//4
function buy(candyStore, id) {
  const price = getPrice(candyStore, id);
  candyStore.cashRegister += price;
  getCandy(candyStore, id).amount -= 1;
}

buy(candyStore, "5hd7y");
console.log(candyStore);
