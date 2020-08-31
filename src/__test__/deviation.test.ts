import deviation from '../index';

test('Extreme case', () => {
  expect(deviation('', '')).toBe(0);
});

test('Str1 longer than Str2 case', () => {
    expect(deviation('ab', 'a')).toBe(0.5);
});

test('Str2 longer than Str1 case', () => {
    expect(deviation('a', 'ab')).toBe(0.5);
});

test('Normal case', () => {
    expect(deviation('Hello', 'Hallo')).toBe(1);
});

test('Return percentage case', () => {
    expect(deviation('Hello', 'Hallo', {returnPercentage : true})).toBe(100);
});