
function calculate() {
  let sum = (document.querySelector('.sum').value * 100).toFixed(2, 10);
  let price = (document.querySelector('.price').value * 100).toFixed(2, 10);
  
  const difference = sum - price;
  const dollars = (difference - (difference % 100)) / 100;
  const cents = difference % 100;
  const resultText = document.querySelector('.result-text');

  function findValues(centsAmount, dollarsAmount) {

    let real = [50, 25, 10, 5, 1];
    let divided = centsAmount;
    let result = [0, 0, 0, 0, 0];

    for (let i = 0; i < real.length; i++) {
      while (divided >= real[i]) {
        result[i] += 1;
        divided = (divided - real[i]).toFixed(2, 10);
      }
    }

    let resultValue = `Result: ${dollarsAmount} dollars`;

    for (let j = 0; j < result.length; j++) {
      if (result[j] !== 0) {
        resultValue += ` ${result[j] * real[j]} cents`
      }
    }
    resultText.innerText = resultValue;
  };

  document.querySelector('.sum').value = '';
  document.querySelector('.price').value = '';
  return findValues(cents, dollars);
};

document.querySelector('.btn').addEventListener('click', () => calculate());
