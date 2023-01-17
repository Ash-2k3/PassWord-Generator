
/* Generated password section */
const  passwordGenerated = document.querySelector("section.generated-password");
// console.log(passwordGenerated.innerText);

/* Character-length numeric */
const  passLength = document.querySelector(".num-length");
// console.log(passLength.innerText);

/* Password length slider */
const lengthSlider = document.querySelector("input[type=range");
// console.log(lengthSlider);

/*CheckBoxes */
const cbUppercase = document.querySelector("input#uppercase");
// console.log(isUppercaseChecked.checked = true);

const cbLowercase = document.querySelector("input#lowercase");
// console.log(isLowercaseChecked.checked = false)

const cbNumber = document.querySelector("input#numbers");
// console.log(isNumberChecked.checked);

const cbSymbols = document.querySelector("input#symbols");
// console.log(isSymbolsAllowed.checked=true);

/* Password Strength */
const passStrength = document.querySelector(".password-strength");
// console.log(passStrength);

/* Generate Button */
const generateBtn = document.querySelector("button.generate");
// console.log(generateBtn);


lengthSlider.addEventListener("input", (evt) => {
         passLength.innerText = evt.target.value;
})



/** Password Generating Function/Method  */

var randomUppercase = () => {
         return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
}

var randomLowercase = () => {
         return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
}

var randomNumber = () => (Math.floor(Math.random() * 10));

var randomSymbol = () => {
         const symbols = "!@#$%^&*()";
         return symbols.charAt(Math.floor(Math.random() * symbols.length));
}

/* Check for what cb are checked */

var isNumberChecked = () => (cbNumber.checked === true)

var isSymbolsChecked = () => (cbSymbols.checked === true)

var isLowercaseChecked = () => (cbLowercase.checked === true)

var isUppercaseChecked = () => (cbUppercase.checked === true)



/* Check for what are checked */
function checkedParameters() {
         const makePassOutOf = [];
         // console.log(isLowercaseChecked());
         if (isNumberChecked() === true) {
                  makePassOutOf.push("Number");
         }
         if (isSymbolsChecked() === true) {
                  makePassOutOf.push("Symbol");
         }
         if (isUppercaseChecked() === true) {
                  makePassOutOf.push("UpperCase");
         }
         if (isLowercaseChecked() === true) {
                  makePassOutOf.push("LowerCase");
         }

         return makePassOutOf;
}

function makePassword(makePassOutOf) {
         var result ="";
         if (makePassOutOf.length === 0) {
                  prompt("You need to have atleast one option selected")
         } else {
                  let count = 0;
                  console.log(passLength.innerText)
                  while (count < passLength.innerText) {
                           let optionIndex = Math.floor(Math.random() * makePassOutOf.length);
                           const option = makePassOutOf[optionIndex];
                           switch (option) {
                                    case "Number":
                                             result += randomNumber();
                                             break;
                                    case "Symbol":
                                             result += randomSymbol();
                                             break;
                                    case "LowerCase":
                                             result += randomLowercase();
                                             break;
                                    case "UpperCase":
                                             result += randomUppercase();
                                    default:
                                             break;
                           }
                           count++;
                  }
                  return result
         }
}


/* Handling what to do after generate button is clicked */
generateBtn.addEventListener("click", () => {
         const makePassOutOf = checkedParameters();
         // console.log(makePassOutOf);
         const resultPass = makePassword(makePassOutOf);
         // console.log(resultPass);
         passwordGenerated.innerText = resultPass ;

})

