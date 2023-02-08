import { useState } from 'react';
import { UserContext } from './UserContext';

// const user = {
//     id: 123,
//     name: 'Keyla Cárdenas',
//     email: 'keyla.16f@gmail.com',
// };

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState();

    return (
        // <UserContext.Provider value={{ Hola: 'Mundo ', user: user }}>

        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
