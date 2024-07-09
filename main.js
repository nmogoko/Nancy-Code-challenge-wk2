const inputBox = document.querySelector("#input-box");
const addButton = document.querySelector("#add-button");
const clearButton = document.querySelector("#clear-button");
const list = document.querySelector(".list-container");
const form = document.querySelector("#input-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const item = inputBox.value;

  const listItem = document.createElement("li");
  listItem.textContent = item;

  const purchasedButton = document.createElement("button");
  purchasedButton.textContent = "Mark Purchased";
  purchasedButton.classList.add("form-button");

  listItem.appendChild(purchasedButton);
  list.appendChild(listItem);

  inputBox.value = "";
});

list.addEventListener("click", (event) => {
  if (event.target.matches(".form-button")) {
    const listItem = event.target.parentElement;
    listItem.classList.add("purchased");
  }
});

clearButton.addEventListener("click", () => {
  list.innerHTML = "";
});
