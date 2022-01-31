import React , {createContext , useState} from 'react'

export const AuthContext = createContext();

function AuthContextProvider(props) {


    const [auth,setAuth] = useState({
        username:'',
        password:'',
        isLoggedIn:false
    })

    const logIn = (username,password) => {
        setAuth({
            username: username,
            password: password,
            isLoggedIn: true
        })
    }

    const logOut = () => {
        setAuth({
            username: '',
            password: '',
            isLoggedIn: false
        })
    }

    return (
        <AuthContext.Provider  value={{auth , logIn , logOut}} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider
