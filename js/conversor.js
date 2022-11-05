const currencyOne = document.getElementById('currency-one');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

async function calculate() {
  const currency_one = currencyOne.value;
  const currency_two = currencyTwo.value;
  const res = await fetch('https://open.exchangerate-api.com/v6/latest');
  // console.log('res', res);
  const data = await res.json();
  // console.log('data', data);
  const rate = data.rates[currency_two] / data.rates[currency_one];
  rate.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
  amountTwo.value = (amountOne.value * (rate)).toFixed(2);
}

currencyOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

calculate();

swap.addEventListener('click', () => {
  const temp = currencyOne.value;
  currencyOne.value = currencyTwo.value;
  currencyTwo.value = temp;
  calculate();
});



