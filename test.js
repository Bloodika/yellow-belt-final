const Main = require('./index.js');

describe('Description', function() {
  it('should work', function() {
    const main = new Main();
    expect(main.main()).toBe(0);
  });
});
