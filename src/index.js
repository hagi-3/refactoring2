/**
 * 
* @param {Number} age - 年齢
* @returns age + 1
*/
const plusAge = (age) => {
  return age + 1;
}
/**
  * 
  * @param {Number} age - 年齢
  * @returns age - 1
  */
const minusAge = (age) => {
  return age - 1;
}
  
/**
  * plusボタン押下時の処理
  * @param {*} data 
  * @returns data
  */
const onClickPlusButton = (data) => {
  data.age = plusAge(data.age);
  render(data);
}

/**
 * minusボタン押下時の処理
 * @param {*} data 
 * @returns data
 */
const onClickMinusButton = (data) => {
  data.age = minusAge(data.age);
  render(data);
}

/**
  * 画面描画処理
  * @param {*} data 
  */
const render = (data) => {
  const html = 
    `<div class='js-name'>${data.name}</div>
    <div class='js-age'>${data.age}</div>
    <div>
    <button class='js-age-plus-button'>+</button>
    <button class='js-age-minus-button'>-</button>
    </div>
    `;

  document.body.innerHTML = html;
  document
    .querySelector(".js-age-plus-button")
    .addEventListener("click", () => onClickPlusButton(data));

  document
    .querySelector(".js-age-minus-button")
    .addEventListener("click", () => onClickMinusButton(data));
}

/**
 * 初期表示処理
 */
 {
  const user = {
    name: "nobu",
    age: 26
  };
  const userData = user;
  render(userData);
}
