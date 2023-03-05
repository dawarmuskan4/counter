const countValue = document.querySelector('#counter')

const increment = () => {
  //get value from ui
  let value = parseInt(countValue.innerText);

  //increment value
  value = value + 1;

  //update value
  countValue.innerText = value;
}

const decrement = () => {
  //get value from ui
  let value = parseInt(countValue.innerText);

  //decrement value
  value = value - 1;

  //update value
  countValue.innerText = value;
}