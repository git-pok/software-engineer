let loanInput = document.getElementById("amount");
let yearsInput = document.getElementById("years");
let rateInput = document.getElementById("rate");
let calcForm = document.getElementById("calc-form");
let monthlyPaymentDiv = document.getElementById("monthly-payment");
let totalDivs = document.querySelectorAll("total > div");

// grabValues() returns an object from input values
function grabValues() {
  let pInput = document.getElementById("amount");
  let tInput = document.getElementById("years");
  let iInput = document.getElementById("rate");
  return values = {
    p: + pInput.value,
    t: + tInput.value,
    i: + iInput.value
  };
};

// loan() calculates monthly payments
function loan () {
  if (loanInput.value || yearsInput.value || rateInput.value) {
  let amount = values.p;
  let years = values.t;
  let rate = values.i;

    const loanTime = years * 12;
    const step1 = amount * rate;
    const step2 = step1 / 12;
    const step3 = 1 + rate / 12;
    const step4 = step3 ** loanTime;
    const step5 = step4 * step2;
    const bottomEquationStep1 = step3;
    const bottomEquationStep2 = step4;
    const bottomEquationStep3 = bottomEquationStep2 - 1;
    const finalAmount = step5 / bottomEquationStep3;
    const roundFinalAmount = finalAmount.toFixed(2);
    const returnFinalPayment = parseFloat(roundFinalAmount);
    return returnFinalPayment;
  }
};

function appendPaymentToDiv() {
  let fP = loan();
  let monthlyPaymentDiv = document.getElementById("monthly-payment");
  let div = document.createElement('div');
    monthlyPaymentDiv.appendChild(div);
    return div.innerText = fP;
}

// event listener
calcForm.addEventListener('submit', function(e) {
  e.preventDefault();
  grabValues();
  loan();
  appendPaymentToDiv();

  loanInput.value = '';
  yearsInput.value = '';
  rateInput.value = '';
});

// function for loan(), loan() includes input values, testLoan() is a test run
function testLoan (amount, years, rate) {
    const loanTime = years * 12;
    const step1 = amount * rate;
    const step2 = step1 / 12;
    const step3 = 1 + rate / 12;
    const step4 = step3 ** loanTime;
    const step5 = step4 * step2;
    const bottomEquationStep1 = step3;
    const bottomEquationStep2 = step4;
    const bottomEquationStep3 = bottomEquationStep2 - 1;
    const finalAmount = step5 / bottomEquationStep3;
    const roundFinalAmount = finalAmount.toFixed(2);
    const returnFinalPayment = parseFloat(roundFinalAmount);
    return returnFinalPayment;
};