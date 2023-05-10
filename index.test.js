import { calculator, capitalize, caesarCipher, reverseString } from ".";

test('capitalize', () => {
    expect(capitalize('chicken')).toBe('Chicken');
});

test('reverse', () => {
    expect(reverseString('chicken')).toBe('nekcihc');
});

test('add', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('subtract', () => {
    expect(calculator.subtract(5, 4)).toBe(1);
});

test('divide', () => {
    expect(calculator.divide(8, 4)).toBe(2);
});

test('multiply', () => {
    expect(calculator.multiply(4, 2)).toBe(8);
});

test('cipher one', () => {
    expect(caesarCipher('abc', 0)).toBe('abc');
});

test('cipher punctuation', () => {
    expect(caesarCipher('a.b.c', 0)).toBe('a.b.c');
});

test('cipher shift letters', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
});

test('cipher shift wrap', () => {
    expect(caesarCipher('xyz', 1)).toBe('yza');
});

test('cipher case', () => {
    expect(caesarCipher('Jon', 2)).toBe('Lqp');
});

test('cipher long', () => {
    expect(caesarCipher('Jon is TestIng things!?', 7)).toBe('Qvu pz AlzaPun aopunz!?');
});