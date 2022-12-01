describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function() {
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function() {
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server to allServers on submitServerInfo()', function() {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should generate two tds within our table', function() {
    submitServerInfo();
    updateServerTable()
    let td = document.querySelectorAll('#serverTable tbody tr td')
    expect(td.length).toEqual(3);
  });

  it('should generate Alice within the first td', function() {
    submitServerInfo();
    updateServerTable()
    let td = document.querySelectorAll('#serverTable tbody tr td')
    expect(td[0].innerText).toEqual('Alice');
  });

  it('should generate $0.00 within the second td', function() {
    submitServerInfo();
    updateServerTable()
    let td = document.querySelectorAll('#serverTable tbody tr td')
    expect(td[1].innerText).toEqual('$0.00');
  });

afterEach(function() {
  // teardown logic
  allServers = {};
  serverTbody.innerHTML = '';
});
});
