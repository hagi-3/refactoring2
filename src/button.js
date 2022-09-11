{
  /**
   * ageをplus1する
   */
  const onClickPlusAge = () => {
    const age = ageCalculation(document.querySelector(".js-age").textContent,'plus');
    document.querySelector(".js-age").textContent = age;
  };

  /**
   * ageをminus1する
   */
  const onClickMinusAge = () => {
    const age = ageCalculation(document.querySelector(".js-age").textContent,'minus');
    document.querySelector(".js-age").textContent = age;
  };

  document
  .querySelector(".js-age-plus-button")
  .addEventListener("click", () => onClickPlusAge());

  document
  .querySelector(".js-age-minus-button")
  .addEventListener("click", () => onClickMinusAge());
  }

  const ageCalculation = (age,ope,value=1) => {
    if(ope === 'plus') return Number(age) + value;
    if(ope === 'minus') return Number(age) - value;
  }