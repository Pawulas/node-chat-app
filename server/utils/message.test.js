const expect = require('expect');
var { generateMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {

    const from = 'emil'
    const text = 'simple test';
    const msgObject = generateMessage(from, text);
    
    expect(msgObject.from).toBe(from);
    expect(msgObject.text).toBe(text);
    expect(msgObject.createdAt).toBeA('number');

    expect(msgObject).toInclude({from, text});
  });
});