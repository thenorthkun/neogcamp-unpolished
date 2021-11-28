const dateOfBirth = document.querySelector("#birthday-date");
const luckyNumber = document.querySelector("#lucky-number");
const button = document.querySelector("#check-Btn");
const output = document.querySelector("#output");

// function checkBirthdayIsLucky() {
//   const dob = dateOfBirth.value;
//   const sum = CalculateSum;
// }
// const dob = dateOfBirth.value;
// // console.log(dob)

// button.addEventListener("click", function CalculateSum(dob) {
//   dob = dob.replaceAll("-", "");
//   let sum = 0;
//   for (let letter of dob) {
//     sum = sum + Number(letter);
//   }
//   console.log(sum);
// });

button.addEventListener("click", function clickHandler() {
  const inputval = dateOfBirth.value.split("-").join("");
  const luckval = luckyNumber.value;
  console.log(inputval);
  let sum = 0;
  for (letter of inputval) {
    sum = sum + Number(letter);
  }
  if (sum % luckval == 0) {
    output.innerHTML = `WoW! You are lucky ! 😎`;
  } else {
    output.innerHTML = "Not so lucky afterall. 😐";
  }
});
