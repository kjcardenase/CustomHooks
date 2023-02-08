import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {
    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(
        `https://rickandmortyapi.com/api/character/${counter}`
    );

    const { image, name } = !!data && data;

    return (
        <>
            <h1 className="text-center">Rick And Morty</h1>
            <hr />

            {
                /*isLoading ? (
                <div className="alert alert-info text-center">Cargando...</div>
            ) : (
                <blockquote className="blockquote text-center">
                    <img src={`${image}`} />
                    <p className="mb-2">{name}</p>
                </blockquote>
            )*/

                isLoading ? (
                    <LoadingQuote />
                ) : (
                    <Quote image={image} name={name} />
                )
            }

            <button
                className="btn btn-primary btn-"
                onClick={() => increment(1)}
                disabled={isLoading}
            >
                Next
            </button>
        </>
    );
};
