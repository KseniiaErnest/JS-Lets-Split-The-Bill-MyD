'use strict'

const button = document.querySelector('#btn');
const addTip = document.querySelector('#addTip');

button.addEventListener('click', calc);
addTip.addEventListener('click', showTip);

function calc(e) {
e.preventDefault();
  const bill = document.querySelector('#bill').value;
  const people = document.querySelector('#people').value;
  const tip = document.querySelector('#tip').value;

  if (bill === '' || people === '' || people < 1) {
    alert('Please, do not leave empty fields')
  }

  let billPerPerson = bill / people;
  let tipPerPerson = (bill * tip) / people;
  let totalPerPerson = billPerPerson + tipPerPerson;
  console.log(tipPerPerson);

  document.querySelector('#devidedBill').textContent = billPerPerson.toFixed(2);
  document.querySelector('#devidedTip').textContent = tipPerPerson.toFixed(2);
  document.querySelector('#billAndTip').textContent = totalPerPerson.toFixed(2);

}

function showTip(e) {
e.preventDefault();
tip.style.display = 'block'
}