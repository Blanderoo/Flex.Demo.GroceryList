// ******* STATE *******
const state = {
  groceries: [
    {name: "apple",quantity: 2, price: 1.75 }, 
    {name: "banana", quantity: 4, price: 0.25},
  ],
};

const items = [
  { name: "apple", price: 1.75 },
  { name: "banana", price: 0.25 },
  { name: "orange", price: 1.0 },
  { name: "broccoli", price: 3.0 },
  { name: "cucumber", price: 1.0 },
  { name: "carrot", price: 1.0 },
  { name: "milk", price: 5.75 },
  { name: "cheddar cheese", price: 4.0 },
  { name: "sourdough loaf", price: 5.5 },
  { name: "eggs", price: 4.0 },
  { name: "cereal", price: 3.5 },
  { name: "rice", price: 5 },
];

// ******* REFERENCES *******
const form = document.querySelector(".grocery-form")
const tableBody = document.getElementById("table-body");
const clearButton = document.querySelector(".clear-btn");
console.log("body: ", tableBody);


// ******* EVENT LISTENERS *******
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = form.nextElem;
  const qty = Math.floor(Math.random() * 10);
  const price = Math.floor(Math.random() * 5);

  state.groceries.push({name: inputValue, quantiy: qty, price});
  
  console.log("groceries", state.groceries);
});
render();


// ******* RENDER *******
function render() {
  // we want to display all our groceries in the table
  const rowItems = state.groceries.map((item) => {
    console.log(item);
    const newRow = document.createElement("tr")
    
    const name = document.createElement("td")
    name.textContent = item.name;

    const quantity = document.createElement("td")
    qty.textContent = item.quantity;

    const price = document.createElement("td")
    price.textContent = item.price;

    newRow.replaceChild(name, qty, price);

    return newRow
  });
  console.log("row items: ", rowItems);
  tableBody.replaceChild(...rowItems);
}

// ******* FUNCTIONS *******
