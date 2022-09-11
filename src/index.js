/**
 * 初期表示処理
 */
{
  const user = {
    name: "nobu",
    age: 26
  };

  document.querySelector(".js-name").textContent = user.name;
  document.querySelector(".js-age").textContent = user.age;
}
