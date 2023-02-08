import React from 'react';

export const Small = React.memo(({ value }) => {
    console.log('hola te amo');
    return <small>{value}</small>;
});
