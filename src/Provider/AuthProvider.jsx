import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext } from "react";
import auth from '../firebase/firebase.config';



export const AuthContext = createContext(null);


const AuthProvider = ({children}) => {

    // const [user, setUser] = useState(null)
    // const [loading, setLoading] = useState(true)


    // create user
    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign In user
    const logInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
  

    const authInfo ={
   
       createUser,
       logInUser,
  
     
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node,
}