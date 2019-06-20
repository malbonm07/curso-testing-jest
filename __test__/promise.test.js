import {getDataFromApi} from '../promise.js';
import { exportAllDeclaration } from '@babel/types';

describe('Probando promesas', () => {
    test('Realizando una peticion a una Api', async (done) => {
        const api = 'https://rickandmortyapi.com/api/character/';

        let data = await getDataFromApi(api)
        // getDataFromApi(api).then(data => {
        //     console.log(data)
        //     expect(data).toBeGreaterThan(0);
        //     done();
        // });
    });
});