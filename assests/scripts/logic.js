const showResult = document.getElementById("result");

const getLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumbers = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

const getSymbols = () => {
  const symbols = "!@#$%^&*(){}[]?<>";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const getRandomFun = {
  upper: getUpperCase,
  lower: getLowerCase,
  number: getNumbers,
  symbols: getSymbols,
};



export { showResult, getRandomFun };
