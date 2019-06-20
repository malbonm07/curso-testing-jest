import {arrayFruits, arrayColors} from '../arrays.js';
import { exportAllDeclaration } from '@babel/types';

describe('Comprobaremos si existe un elemento', () => {
    test('¿Tiene una banana?', () => {
        expect(arrayFruits()).toContain('sandia');
    });
    test('Comprobar el tamaño del arreglo', () => {
        expect(arrayFruits()).toHaveLength(5);
    });
})