import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
   
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    console.log(createContext);
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return  signInWithPopup(auth, googleProvider);

    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


        useEffect(() => {
            const unSubsCribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser)
                if(currentUser){
                    const userInfo = {email : currentUser.email}
                    axiosPublic.post('/jwt', userInfo)
                    .then(res =>{
                        if(res.data.token){
                            localStorage.setItem('access-token', res.data.token);

                        }
                    })
                }else{
                    // do something 
                    localStorage.removeItem('access-token')
                }
                setLoading(false)
                console.log(currentUser, "observe user");
            })
            return unSubsCribe
        }, [axiosPublic])
        const value = {
            user,
            loading,
            createUser,
            googleSignIn,
            login,
            logOut


        }
        return (
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>

        );
    };

    export default AuthProvider;