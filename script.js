const IncreaseNum = function () {
  const inputElement = document.querySelector('.value');
  let value = inputElement.innerText;
  value = Number(value) + 1;
  inputElement.innerText = value;
  console.log(value);
}


const DecreaseNum = function () {
  const inputElement = document.querySelector('.value');
  let value = inputElement.innerText;
  value = Number(value) - 1;
  inputElement.innerText = value;
  console.log(value);
}

const ResetNum = function () {
  const inputElement = document.querySelector('.value');
  let value = 0;
  inputElement.innerText = value;
  console.log(value);
}
