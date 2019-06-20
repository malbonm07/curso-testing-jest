import { exportAllDeclaration } from "@babel/types";

describe('Comprobar cadenas de texto', () => {
    const text = 'un bonito texto';
    test('debe contener el siguiente text', () => {
        expect(text).toMatch(/bonito/);
    });
    test('No contiene el siguiente texto', () => {
        expect(text).not.toMatch(/nuevo/);
    });
})