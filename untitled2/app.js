let amount = document.getElementById("amount");
console.log(amount);
let interest = document.getElementById("interest");
console.log(interest);
let total= document.getElementById("total-payment");
console.log(total);
let years = document.getElementById("years");
console.log(years);
let calculate = document.getElementById("btn");
console.log(calculate);
let monthly = document.getElementById("monthly-payment");
console.log(monthly);
let totalInterest = document.getElementById("total-interest");
console.log(totalInterest);

calculate.addEventListener("click",calculatefunction);

function calculatefunction(e){
    if(amount.value==""||years.value==""||interest.value==""){
        let error = document.createElement("div");
        error.className="alert alert-danger";
        error.innerText="Please fill all the cases";

        let windw= document.querySelector(".newcolor");
        windw.insertBefore(error,document.getElementById("title"));
        setTimeout(function(){error.style.display="none";},2000);
    }else{
        console.log("this is it");
         document.body.scrollIntoView(false);
         total.value = parseInt(parseInt(amount.value)+parseInt(amount.value*interest.value/100));
         monthly.value = parseInt(parseInt(total.value)/parseInt(years.value*12));
         totalInterest.value = parseInt(total.value-amount.value);
         e.preventDefault();
    }
}


