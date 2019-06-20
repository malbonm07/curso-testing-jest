import {callback, callbackHell} from '../callback.js';

describe('Probando un callback', () => {
    test('Callback', done => {
        console.log('se resolvio')
        function otherCallback(data) {
            expect(data).toBe('Hola Javascript')
            // done();
        }
        callbackHell(otherCallback);
    })
})