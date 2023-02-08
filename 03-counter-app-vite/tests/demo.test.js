/*test('Esta prueba no debe de fallar', () => {
    if (0 === 1) {
        throw new Error('No puede dividir entre 0');
    }
});
*/
describe('Pruebas en ,DemoComponent/>', () => {
    test('Esta prueba no debe de fallar', () => {
        //1. inicialización

        const message1 = 'Hola Mundo';

        //2. estímulo

        const message2 = message1.trim();

        //3.observar el comportamiento.....esperado

        //expect(message1).toBe(message2);

        expect(message2).toBe(message1);
    });
});
