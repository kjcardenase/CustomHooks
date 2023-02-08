import {
    getHeroeById,
    getHeroesByOwner,
} from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';
heroes;

describe('Pruebas en 08-imp-exp', () => {
    /*test('getHeroById debe de retornar un héroe por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    });

    test('getHeroById debe de retornar undefined si no exist e', () => {
        const id = 100;
        const hero = getHeroeById(id);

        expect(hero).toBeFalsy();
    });*/

    test('getHeroesByOwner debe de retornar 3 heroes de DC', () => {
        const owner = 'DC';
        const heros = getHeroesByOwner(owner);

        expect(heros).toEqual([
            {
                id: 1,
                name: 'Batman',
                owner: 'DC',
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC',
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC',
            },
        ]);

        expect(heroes).toEqual(heroes.filter((heroe) => heroe));
    });

    test('getHeroesByOwner debe de retornar 2 heroes de Marvel', () => {
        const owner = 'Marvel';
        const heros = getHeroesByOwner(owner);

        expect(heros).toEqual([
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel',
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel',
            },
        ]);

        expect(heroes).toEqual(heroes.filter((heroe) => heroe));
    });
});
