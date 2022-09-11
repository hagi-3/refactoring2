{
  /**
   * plusボタン押下時の処理
   */
  const onClickPlusAge = () => {
    const age = ageCalculation(document.querySelector(".js-age").textContent,'plus');
    document.querySelector(".js-age").textContent = age;
  };

  /**
   * minusボタン押下時の処理
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

  /**
   * 引数opeで指定された四則演算を行い、その結果を返す
   * @param {string} age - 年齢 
   * @param {string} ope - 演算子
   * @param {number} value - 加算/減算する値 
   * @returns {number} age と valueの計算結果を返す
   */
  const ageCalculation = (age,ope=null,value=1) => {
    if(ope === 'plus') return Number(age) + value;
    if(ope === 'minus') return Number(age) - value;
  }