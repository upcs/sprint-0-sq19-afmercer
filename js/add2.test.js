const add2 = require('./functions');

test('adds 2 + 5 to equal 7', () => {
    expect(add2(2, 5)).toBe(7);
});

test('adds -13 + 5 to equal -8', () => {
    expect(add2(-13, 5)).toBe(0);
});