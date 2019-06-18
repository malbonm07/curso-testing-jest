import {sumar, multiplicar, dividir, restar} from '../maths.js'

describe('Calculos matematicos', () => {
    test('pruebas de sumas', () => {
        expect(sumar(1,1)).toBe(2);
    });
    test('pruebas de multiplicar', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
});