import React, { useContext, useState } from 'react';
import  firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';



// function Login() {

//     const[user ,setUser]=useState({
//         isSignedIn :false,
//         email:'',
//         password:'',
        
//     })  
const Login = () => {
     
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const[loggedInUser,setLoggedInUser]=useContext(userContext);
    const [isPasswordMatch, setIsPasswordMatch] = useState(null);
    const [loginInfo, setLoginInfo] = useState([])

    const history = useHistory();
    const location = useLocation();
                    
    const { from } = location.state || { from: { pathname: "/" } };
      
    const handleGoogleSignIn = () => {
        
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const {displayName ,email} = result.user;
                const signedInUser ={Name: displayName,email:email}
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });

    };

    


    return (
        
            <div>
                
            <button onClick={handleGoogleSignIn}>Google Sign in</button>
            </div>
        
    );
}

export default Login;