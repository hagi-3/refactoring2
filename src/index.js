{
  const user = {
    name: "nobu",
    age: 26
  };
  document.querySelector(".js-name").textContent = user.name;
  document.querySelector(".js-age").textContent = user.age;
}

const onClickPlusAge = () => {
  const age = document.querySelector(".js-age").textContent;
  document.querySelector(".js-age").textContent = Number(age) + 1;
};

const onClickMinusAge = () => {
  const age = document.querySelector(".js-age").textContent;
  if (age <= 0) return;
  document.querySelector(".js-age").textContent = Number(age) - 1;
};

document
  .querySelector(".js-age-plus-button")
  .addEventListener("click", () => onClickPlusAge());

document
  .querySelector(".js-age-minus-button")
  .addEventListener("click", () => onClickMinusAge());
