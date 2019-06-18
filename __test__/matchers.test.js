describe('Comparadores comunes', () => {
    const user = {
        name: 'Oscar',
        lastname:'bajaras'
    }
    const user2 = {
        name: 'Oscar2',
        lastname:'bajaras2'        
    }

    test("igualdad de elementos", () => {
        expect(user).toEqual(user2);
    });

    test("No son exactamente iguales", () => {
        expect(user).not.toEqual(user2);
    });
});