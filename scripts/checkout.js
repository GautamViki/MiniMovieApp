// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let amount = JSON.parse(localStorage.getItem("amount")) || [0];
console.log(amount[0]);
let remainAmount = amount[0];

let infoMovie = JSON.parse(localStorage.getItem("movie"));
console.log(infoMovie);

let detail = document.getElementById("movie");

infoMovie.forEach(function (el) {
  let box = document.createElement("div");

  let poster = document.createElement("img");
  poster.src = el.Poster;

  let title = document.createElement("p");
  title.innerText = `${el.Title} (${el.Year})`;
  title.style.fontSize = "20px";

  box.append(poster, title);
  detail.append(box);
});

// let remainAmount=JSON.parse(localStorage.getItem("amount"))||[0];
function bookConfirm() {
  if (remainAmount < 100) {
    alert("Insufficient Balance !");
    return;
  } else {
    alert("Booking Successful!");
  }
  remainAmount = remainAmount - 100;
  console.log(remainAmount);
  console.log("**********************");
  // moneyArray.push(remainAmount);
  moneyArray[0] = remainAmount;
  console.log(typeof moneyArray[0]);
  localStorage.setItem("amount", JSON.stringify(moneyArray));
  document.getElementById("wallet").innerText = moneyArray[0];
}
