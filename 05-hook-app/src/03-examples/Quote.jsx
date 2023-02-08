import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ image, name }) => {
    const pRef = useRef();

    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [name]);
    return (
        <>
            <blockquote
                className="blockquote text-center"
                style={{ display: 'flex' }}
            >
                <img src={`${image}`} />
                <p ref={pRef} className="mb-2">
                    {name}
                </p>
            </blockquote>
            <code> {JSON.stringify(boxSize)}</code>
        </>
    );
};
