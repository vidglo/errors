const http = require('./http');
const main = require('./index');

describe('package exports', () => {
  test('named main export should be equal to exported http module', () => {
    expect(main.http).toStrictEqual(http);
  });
});
