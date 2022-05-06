import {multiply, splitIntoWords, sum} from './01';
// Создаю тест
// Название текст, функция

let a: number;
let b: number;
let c: number;

beforeEach( () => {
    // Перед каждым тестом
    a = 1;
    b = 2;
    c = 3;
})


test('sum should be correct', () => {
    // Подготовительные данные (data)

    // Действие (action)
    const result1 = sum(a, b);
    a = 100;
    const result2 = sum(a, c);
    const result3 = sum(b, c);

    // Результат (expect)
    expect(result1).toBe(3);
    expect(result2).toBe(103);
    expect(result3).toBe(5);
});

test('Multiply should be correct', () => {
    const result1 = multiply(a, b);
    const result2 = multiply(a, c);
    const result3 = multiply(b, c);

    expect(result1).toBe(2);
    expect(result2).toBe(3);
    expect(result3).toBe(6);
});

test('Splitting into words should be correct', () => {
    const sent1 = "Hello my friends!";
    const sent2 = "UPPER lower  Case  plus many  words";

    const result1 = splitIntoWords(sent1);
    const result2 = splitIntoWords(sent2);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe("hello");
    expect(result1[1]).toBe("my");
    expect(result1[2]).toBe("friends!");

    expect(result2.length).toBe(6);
    expect(result2[0]).toBe("upper");
    expect(result2[1]).toBe("lower");
    expect(result2[2]).toBe("case");
    expect(result2[3]).toBe("plus");
    expect(result2[4]).toBe("many");
    expect(result2[5]).toBe("words");
});