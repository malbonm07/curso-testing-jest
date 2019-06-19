import numbers from "../numbers.js";
import { exportAllDeclaration } from "@babel/types";

describe('Comparacion de numeros', () => {
    test('Mayor que', () => {
        expect(numbers(2,2)).toBeGreaterThan(3);
    });
    test("Mayor que o igual que", () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(4);
    });
})