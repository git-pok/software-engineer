describe("Payments test (with setup and tear down)", function() {
  beforeEach(function() {
    billAmtInput.value = 200;
    tipAmtInput.value = 50;
  });

  it('should add a new payment to allPayments on submitPaymentInfo()', function() {
    submitPaymentInfo()
    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('200');
    expect(allPayments['payment1'].tipAmt).toEqual('50');
    expect(allPayments['payment1'].tipPercent).toEqual(25);
  });

  it('should not add a new payment on submitPaymentInfo() with empty input', function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    submitPaymentInfo()
    expect(Object.keys(allPayments).length).toEqual(0);
  });

  it('should payment update #paymentTable on appendPaymentTable()', function() {
    // creating the variable and argument that go in appendPaymentTable(), check the js file to see it takes a parameter 
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment
    appendPaymentTable(curPayment)
    
    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual('$200');
    expect(curTdList[1].innerText).toEqual('$50');
    expect(curTdList[2].innerText).toEqual('25%');
  });

  it('should create a new payment on createCurPayment()', function() {
    // creating the variable and argument that go in appendPaymentTable(), check the js file to see it takes a parameter 
    const expectedPayment = {
      billAmt: '200',
      tipAmt: '50',
      tipPercent: 25
    }

    expect(createCurPayment()).toEqual(expectedPayment);
  });

  it('should not create payment with empty input on createCurPayment()', function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let curPayment = createCurPayment();
    expect(curPayment).toEqual(undefined);
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
