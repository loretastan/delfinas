import { createContext, useState } from 'react';


export const Auth = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(_ => {
        const token = window.localStorage.getItem('token');
        const user = window.localStorage.getItem('user');
        return token ? {
            token,
            user
        } : null;
    });

    const logout = _ => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        setUser(null);
        window.location.href = '#login';
    }

    const login = (token, user) => {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user', user);
        setUser({
            token,
            user
        });
    }

    return (
        <Auth.Provider value={{ user, setUser, logout, login }}>
            {children}
        </Auth.Provider>
    );
}