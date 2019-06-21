import {getDataFromApi} from '../promise.js';
import { exportAllDeclaration } from '@babel/types';

describe('Probando promesas', () => {
    test('Realizando una peticion a una Api', async () => {
        const api = 'https://rickandmortyapi.com/api/character/';
        const getRick = 'https://rickandmortyapi.com/api/character/1';
        // let data = await getDataFromApi(api)
        let data = await getDataFromApi(api)
        expect(data.results.length).toBeGreaterThanOrEqual(0);
        // await getDataFromApi(api).then(data => {
        //     expect(data.results.length).toBeGreaterThanOrEqual(0);
        //     // done();
        // });

        // await getDataFromApi(getRick).then(data => {
        //     expect(data.name).toEqual('Rick Sanches')
        // }); 
    });
});