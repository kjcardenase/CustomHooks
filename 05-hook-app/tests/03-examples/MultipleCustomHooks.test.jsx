import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks/> ', () => {
    test('Debe de mostrar el comportamiento por defecto', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Loading...'));
        expect(screen.getByText('Rick And Morty'));

        const nextButton = screen.getByRole('button', { name: 'Next' });

        expect(nextButton.disabled).toBeTruthy();

        //screen.debug();
    });

    test('Debe de mostar un Quote', () => {
        useFetch.mockReturnValue({
            data: [{ author: 'Keyla', quote: 'Samantha' }],
            isLoading: false,
            hasError: null,
        });

        render(<MultipleCustomHooks />);

        expect(screen.getByText('Samantha')).toBeTruthy();
        expect(screen.getByText('Keyla')).toBeTruthy();
    });
});
