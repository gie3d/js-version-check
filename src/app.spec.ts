import Checker from './app';

test('compares with the same length, compared at the end', () => {
    expect(Checker('1.0.0.0', '1.0.0.1')).toBe(-1);
})

test('compares with the same length, compared at the beginning', () => {
    expect(Checker('2.0.0.0', '1.9.9.10')).toBe(1);
})

test('compares with the same length, compared at the middle', () => {
    expect(Checker('2.0.0.0', '2.9.9.10')).toBe(-1);
})

test('compares with differ length', () => {
    expect(Checker('2.0', '2.19.9.10')).toBe(-1);
})

test('compares with differ length - 2', () => {
    expect(Checker('2.20', '2.19.9.10')).toBe(1);
})

test('same versions', () => {
    expect(Checker('2.0', '2.0')).toBe(0);
})