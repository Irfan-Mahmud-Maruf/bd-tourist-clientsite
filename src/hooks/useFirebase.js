// Firebase Config
import { firebaseInitializeAuth } from "../config/firebase"
// Firebase Modules
import { 
    getAuth, 
    signInWithPopup, 
    createUserWithEmailAndPassword, 
    GoogleAuthProvider, 
    GithubAuthProvider, 
    FacebookAuthProvider,
    signInWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    updateProfile,
    signOut } from 'firebase/auth'
// React Core
import { useState, useEffect } from 'react'
// UI Components 


// Firebase Authentication Initializing.
firebaseInitializeAuth()


const useFirebase = () => {
    const [user, setUser] = useState({})  // User state
    const [message, setMessage] = useState('')  // Warning message state.
    // User Auth
    const auth = getAuth()


    /**
     * Auth0 Handler
     */
     const signinWith0Handler = type => {
        let provider0

        if ( type === 'google') {
            provider0 = new GoogleAuthProvider()  // Google Provider
        } else if ( type === 'github') {
            provider0 = new GithubAuthProvider()  // Github Provider
        } else if ( type === 'facebook') {
            provider0 = new FacebookAuthProvider()  // Facebook Provider
        }

        // Sign in with popup
        signInWithPopup( auth, provider0)
        .then(result=> {
            setUser(result.user)
            setMessage('')
            // console.log('Provider0: ', type)
        })
        .catch(error => setMessage(error.message))
    }
    

    /**
     * Signin Form Handler
     */ 
    const signinWithFormHandler = values => {;

        signInWithEmailAndPassword(auth, values.email, values.password)
        .then(result=> {
            setUser(result.user)
            setMessage('Signed in successfully')
        })
        .catch(error => setMessage(error.message))
    }


    /**
     * Signup Form Handler
     */ 
    const signupWithFormHandler = values => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(result=> {
            setUser(result.user)
            setMessage('Account created successfully')
        })
        .catch(error => setMessage(error.message))
    }


    /**
     * Account Info Update
     */ 
    const accountUpdateHandler = () => {
        const info = {
            displayName: ''
        }

        updateProfile(auth, info)
    }


    /**
     * Sign out Handler 
     */ 
    const signoutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser({})
            setMessage('Successfully Sign out')
        })
        .catch(error => setMessage(error.message))
    }


    /**
     * User Auth State 
     */ 
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])


    // Function Return
    return {
        auth, 
        user,
        message,
        signupWithFormHandler,
        signinWithFormHandler,
        signinWith0Handler,
        signoutHandler
    }
}

export default useFirebase
