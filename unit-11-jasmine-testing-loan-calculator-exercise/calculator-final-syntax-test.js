beforeEach(function() {
  loanInput.value = 100000;
  yearsInput.value = 10;
  rateInput.value = .04;
});

afterEach(function() {
  loanInput.value = '';
  yearsInput.value = '';
  rateInput.value = '';
  monthlyPaymentDiv.innerHTML = '';
  let values = {};
});

describe('grabValues() should create an object with input values', ()=> {
  it('should create an object in grabValues()', ()=> {
    expect(grabValues()).toEqual({ p: 100000, t: 10, i: .04 });
  });

  it('should create numbers in values object values', ()=> {
    grabValues();
    expect(values.p).toEqual(100000);
    expect(values.t).toEqual(10);
    expect(values.i).toEqual(.04);
    expect(grabValues()).not.toContain({ p: '100000', t: '10', i: '.04' });
  });

  it('should not create strings in values object values', ()=> {
    grabValues();
    expect(values.p).not.toEqual('100000');
    expect(values.t).not.toEqual('10');
    expect(values.i).not.toEqual('.04');
  });

  it('values object length should have a value of 3', ()=> {
    grabValues();
    let objectLength = Object.keys(values).length;
    expect(objectLength).toEqual(3);
  });

  it('values object length should have a value of 4', ()=> {
    grabValues();
    values = {p: 50000, t: 10, i: .04, four: 4};
    let objectLength = Object.keys(values).length;
    expect(objectLength).toEqual(4);
  });

  it('pInput defines amount input as its stored value', ()=> {
    grabValues();
    let pInput = document.getElementById("amount");
    expect(pInput).toBeDefined('<input type="number" placeholder="type a whole number" onfocus="placeholder=""" id="amount" name="loan-amount">');
  });

  it('tInput defines years input as its stored value', ()=> {
    grabValues();
    let tInput = document.getElementById("years");
    expect(tInput).toBeDefined('<input type="number" placeholder="type a whole number" onfocus="placeholder=""" id="years" name="loan-years">');
  });

  it('iInput defines rate input as its stored value', ()=> {
    grabValues();
    let iInput = document.getElementById("rate");
    expect(iInput).toBeDefined('<input type="number" placeholder="type the decimal version of the percentage" onfocus="placeholder=""" step="0.001" min="0" id="rate" name="loan-rate">');
  });
});

describe('loan() calculates monthly payments', ()=> {
  it('should have values.p data, 100000/10/.04', ()=> {
    grabValues();
    expect(values.p).toEqual(100000);
  });

  it('should have values.t data, 100000/10/.04', ()=> {
    grabValues();
    expect(values.t).toEqual(10);
  });

  it('should have values.i data, 100000/10/.04', ()=> {
    grabValues();
    expect(values.i).toEqual(.04);
  });

  it('should have amount defined, 100000/10/.04', ()=> {
    grabValues();
    expect(amount).toBeDefined(100000);
  });

  it('should have years defined, 100000/10/.04', ()=> {
    grabValues();
    expect(years).toBeDefined(10);
  });

  it('should have rate defined, 100000/10/.04', ()=> {
    grabValues();
    expect(rate).toBeDefined(.04);
  });

  it('should calculate monthly payment through input values, 100000/10/.04', ()=> {
    grabValues();
    expect(loan()).toEqual(1012.45);
  });

  it('should have returnFinalPayment defined, 100000/10/.04', ()=> {
    let returnFinalPayment = 1012.45;
    expect(returnFinalPayment).toBeDefined();
    expect(returnFinalPayment).toEqual(1012.45);
  });

  it('should be defined', ()=> {
    grabValues();
    loan();
    expect(loan()).not.toEqual(undefined);
  });

  it('should be undefined', ()=> {
    loanInput.value = '';
    yearsInput.value = '';
    rateInput.value = '';
    monthlyPaymentDiv.innerHTML = '';
    values = {};
    expect(loan()).toEqual(undefined);
  });

  it('should calculate monthly payment through input values, 50000/10/.04', ()=> {
    loanInput.value = 50000;
    yearsInput.value = 10;
    rateInput.value = .04;
    values = {p: 50000, t: 10, i: .04};
    expect(loan()).toEqual(506.23);
  });

  it('should calculate monthly payment through input values, 10000/20/.04', ()=> {
    loanInput.value = 10000;
    yearsInput.value = 20;
    rateInput.value = .04;
    values = {p: 10000, t: 20, i: .04};
    expect(loan()).toEqual(60.60);
  });

  it('should calculate monthly payment through input values, 20000000/20/.04', ()=> {
    loanInput.value = 20000000;
    yearsInput.value = 20;
    rateInput.value = .04;
    values = {p: 20000000, t: 20, i: .04};
    expect(loan()).toEqual(121196.07);
  });
});

describe('appendPaymentToDiv(), appends final payment from loan() to the DOM', ()=> { 
  it('should assign div to monthlyPaymentDiv', ()=> {
    grabValues();
    loan();
    let fP = loan();
    let monthlyPaymentDiv = document.getElementById("monthly-payment");
    let div = document.createElement('div');
    monthlyPaymentDiv.appendChild(div);
    expect(monthlyPaymentDiv.children).toContain(div);
  });

  it('fP should contain the retured value from loan(), 1012.45', ()=> {
    grabValues();
    loan();
    let fP = loan();
    let monthlyPaymentDiv = document.getElementById("monthly-payment");
    let div = document.createElement('div');
    monthlyPaymentDiv.appendChild(div);
    appendPaymentToDiv();
    expect(fP).toEqual(1012.45);
  });

  it('appendPaymentToDiv() should be defined', ()=> {
    grabValues();
    loan();
    appendPaymentToDiv();
    expect(appendPaymentToDiv()).toBeDefined();
  });
});

describe('testLoan(), function that loan() derives from', ()=> {  
  it('should calculate monthly payment through function, 100000/10/.06', ()=> {
    expect(testLoan(100000, 10, .06)).toEqual(1110.21);
  });

  it('should calculate monthly payment through function, 500000/10/.07', ()=> {
    expect(testLoan(500000, 10, .07)).toEqual(5805.42);
  });

  it('should calculate monthly payment through function, 30000/5/.09', ()=> {
    expect(testLoan(30000, 5, .09)).toEqual(622.75);
  });
});
