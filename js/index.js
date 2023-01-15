
/* Generated password section */
var passwordGenerated = document.querySelector("section.generated-password");
// console.log(passwordGenerated.innerText);

/* Character-length numeric */
var passLength = document.querySelector(".num-length");
// console.log(passLength.innerText);

/* Password length slider */
var lengthSlider = document.querySelector("input[type=range");
// console.log(lengthSlider);

/*CheckBoxes */
var cbUppercase = document.querySelector("input#uppercase");
// console.log(isUppercaseChecked.checked = true);

var cbLowercase = document.querySelector("input#lowercase");
// console.log(isLowercaseChecked.checked = false)

var cbNumber = document.querySelector("input#numbers");
// console.log(isNumberChecked.checked);

var cbSymbols = document.querySelector("input#symbols");
// console.log(isSymbolsAllowed.checked=true);

/* Password Strength */
var passStrength = document.querySelector(".password-strength");
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
                  makePassOutOf.push("Uppercase");
         }
         if (isLowercaseChecked() === true) {
                  makePassOutOf.push("LowerCase");
         }

         return makePassOutOf;
}


/* Handling what to do after generate button is clicked */
generateBtn.addEventListener("click", () => {
         const makePassOutOf = checkedParameters();
         console.log(makePassOutOf);
         
})

