import { createContext, useState, useEffect} from "react";
import React from 'react';
import {useNavigate} from 'react-router-dom';
export const AuthContext = createContext();

//!!user é para transformar o user em boleano
//criar provider

export const AuthContextProvider = ({children})=>{
    const navigate = useNavigate();
    const[user, setUser] = useState(null);
    const[token, setToken] = useState(null);
    const[loading, setLoading] = useState(true)

    useEffect(()=>{
        const recoveredUser = localStorage.getItem('user');
        if(recoveredUser){
            setUser(JSON.parse(recoveredUser))
        }
        setLoading(false)
    },[])
    
    const login = (usuario, password) => {
        console.log('login', {usuario, password});

        const loggedUser = {
            id: '123',
            usuario
        }
        localStorage.setItem("user", JSON.stringify(loggedUser));

        if(password=='@@#123mudar'){
            navigate('/vendas')
            setUser(loggedUser)
        }
           
    }

    const logout= () =>{
        setUser(null);
        localStorage.removeItem('user');
        navigate('/login')
    }

    return (
        <AuthContext.Provider value={{authenticated: !!user, user, login, logout, loading}}>
            {children}
        </AuthContext.Provider>
    )
}



