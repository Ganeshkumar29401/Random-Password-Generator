const toogleBtn = document.getElementById("btn");
const social_media_panel = document.querySelector(".social-media-panel");
const removeBtn = document.querySelector(".closebtn");
const getGenerateBtnVal = document.querySelector(".btn_large");
const showResult = document.getElementById("result");
const passLength = document.getElementById("count");
const passUpper = document.getElementById("uCase");
const passLower = document.getElementById("lCase");
const passNum = document.getElementById("num");
const passSymbols = document.getElementById("sKey");
const clipBoard = document.querySelector(".copy_btn");


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

getGenerateBtnVal.addEventListener("click", () => {
  const lengthVal = +passLength.value;
  const hasLower = passLower.checked;
  const hasUpper = passUpper.checked;
  const hasNumber = passNum.checked;
  const hasSymbol = passSymbols.checked;
  showResult.innerText = generateResult(
    lengthVal,
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbol
  );
});

const generateResult = (value, upper, lower, number, symbols) => {
  let generatedResult = "";
  const countCheck = upper + lower + number + symbols;
  const filteredArr = [{ upper }, { lower }, { number }, { symbols }].filter(
    item => Object.values(item)[0]
  );

  // console.log(filteredArr);

  if(countCheck !==0 && value >= 5 && value <= 20){
    for (let i = 0; i < value; i+=countCheck) {
        filteredArr.forEach(type => {
          const funcName = Object.keys(type)[0];
          generatedResult += getRandomFun[funcName](); 
        });
    }
    let finalPass = generatedResult.slice(0, value);
    return finalPass;
  }else{
    alert('Password length is in between 5 and 20 OR select atleast one option.Please try again!!')
    finalPass = '';
    return finalPass;
  }
  

};

// clipboard

clipBoard.addEventListener("click", () => {
  let password = showResult.innerText;
  navigator.clipboard
    .writeText(password);
    alert('password copied to clipboard');
});

//modal togle

toogleBtn.addEventListener("click", () => {
  social_media_panel.classList.toggle("visible");
});

removeBtn.addEventListener("click", () => {
  social_media_panel.classList.remove("visible");
});
