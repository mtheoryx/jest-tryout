//Sum is exported
const sum = require('./index').sum

test('sum is exported correctly', () => {
  expect(sum()).toBeDefined()
});
