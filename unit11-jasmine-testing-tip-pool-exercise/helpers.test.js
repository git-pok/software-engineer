describe("Helpers test (with setup and tear down)", function() {
  beforeEach(function() {
    billAmtInput.value = 200;
    tipAmtInput.value = 50;
    submitPaymentInfo();
  });

  it('should sum the total bill amount of all payments on sumPaymentTotal()', function() {
    expect(sumPaymentTotal('billAmt')).toEqual(200);
    billAmtInput.value = 400;
    tipAmtInput.value = 150;
    submitPaymentInfo()
    expect(sumPaymentTotal('billAmt')).toEqual(600);
  });

  it('should sum the total tip amount of all payments on sumPaymentTotal()', function() {
    expect(sumPaymentTotal('tipAmt')).toEqual(50);
    billAmtInput.value = 400;
    tipAmtInput.value = 150;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(200);
  });

  it('should sum the total tip percentage on sumPaymentTotal()', function() {
    expect(sumPaymentTotal('tipPercent')).toEqual(25);
    billAmtInput.value = 400;
    tipAmtInput.value = 150;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipPercent')).toEqual(63);
  });

  it('should sum tip percent of a single tip on calculateTipPercent()', function() {
    expect(calculateTipPercent(200, 50)).toEqual(25);
    expect(calculateTipPercent(400, 200)).toEqual(50);
  });

  it('should generate new td from value and append to tr on appendTd(tr, value)', function() {
    let newTr = document.createElement('tr');
    appendTd(newTr, 'Alice');
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstElementChild.innerText).toEqual('Alice');
  });

  it('should generate delete td and append to tr on appendDeleteTr(tr, type)', function() {
    let newTr = document.createElement('tr');
    appendDeleteTd(newTr, 'payment');
    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstElementChild.innerText).toEqual('X');
  });

  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
  });
});
