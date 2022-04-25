// Store the wallet amount to your local storage with key "amount"

let moneyArray=JSON.parse(localStorage.getItem("amount"))||[0];
document.getElementById("wallet").innerText=moneyArray[0];
function addMoney(){
    let amount=document.getElementById("amount").value;
    amount=+(amount);

    // console.log(moneyArray[0]);

    moneyArray[0]=moneyArray[0]+amount;
    // console.log(amount);
    console.log(moneyArray);
    document.getElementById("wallet").innerText=moneyArray[0];
    localStorage.setItem("amount",JSON.stringify(moneyArray));
    document.getElementById("amount").value=null;
}
