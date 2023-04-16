import axios from "axios";
import { useState, useContext, createContext, useEffect } from "react";


// Create Auth Context
const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        user: null,
        token: '',
        loaded: false
    })

    
    useEffect(()=>{
        const data = localStorage.getItem('auth')
        if(data) {
            const parseData = JSON.parse(data)
            
            setAuth({
                loaded: true,
                user: parseData.user,
                token: parseData.token,
    
            })
        }else {
            setAuth({
                ...auth,
                loaded: true
            })
        }
    },[])
    
    // Default axios
    axios.defaults.headers.common.Authorization = auth?.token;

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
const useAuth = () => useContext(AuthContext)


export { useAuth, AuthProvider };