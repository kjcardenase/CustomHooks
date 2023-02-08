import PropTypes from 'prop-types';

/*const newMessage = {
    message: 'Samantha Milagros',
    tittle: 'Rojas Cárdenas',
};

const MatematicasBasicas = {
    numerosPares: '2,4,6,8',
    numerosImpares: '1,3,5,7,9',
};

const operacionesMatematicas = (a, b) => {
    return a + b;
};

export const FirstApp = () => {
    return (
        <>
            <h1>{operacionesMatematicas(200, 2)}</h1>
            <code>{JSON.stringify(MatematicasBasicas)}</code>
            <h1>{newMessage.message}</h1>
            <code>{/*JSON.stringify(newMessage)*/ /*}</code>
            <h1>keyla Cárdenas!!!</h1>
            <p>Desde Bogotá</p>
            <p>Pinar de alámos 2</p>
            <p>04/01/2023</p>
        </>
    );
};*/

export const FirstApp = ({ title, subTitle, name }) => {
    //console.log(props);

    return (
        <>
            <h1 data-testid="test-title">{title}</h1>
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
    title: 'No hay Título',
    subTitle: 'No hay subtítulo',
    name: 'Keyla Cárdenas!!!',
};
