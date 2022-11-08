const validateValue = require("./validateValue.js");

test("Валидация значения", () => {
    expect(validateValue(50)).toBe(true);
});

describe("validateValue", () => {
    test("Корректное значение", () => {
        expect(validateValue(50)).toBe(true);
    });
    test("Меньше значения", () => {
        expect(validateValue(-1)).toBe(false);
    });
    test("Больше значения", () => {
        expect(validateValue(101)).toBe(false);
    });
    test("Пограничное значения снизу", () => {
        expect(validateValue(0)).toBe(true);
    });
    test("Пограничное значение сверху", () => {
        expect(validateValue(100)).toBe(true);
    });
});
