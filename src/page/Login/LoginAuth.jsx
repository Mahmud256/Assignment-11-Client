import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { FcGoogle } from 'react-icons/fc';
import React, { useState } from 'react';
import app from '../../firebase/firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
//import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'


const LoginAuth = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    //const { logINAuth } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const loginuser = result.user;
                console.log('User Info:', loginuser); // Check if the user object is correctly populated
    
                setUser(loginuser);
                navigate(location?.state ? location.state : '/');
    
                // Display a success message with SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successful!',
                    text: 'You have successfully logged in with Google.',
                });
            })
            .catch((error) => {
                console.error('Error:', error); // Log the error to see if there are any issues
                // Handle the error as needed
    
                // Display an error message with SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Google login failed. Please try again later.',
                });
            });
    }
    


    return (
        <div>
            <p className='text-center'>Or Login with <button onClick={handleGoogleSignIn} className='btn text-[2rem] w-full'><FcGoogle></FcGoogle>
                Google</button></p>
            {user &&
                <div>
                    <h2>User:{user.displayName}</h2>
                </div>
            }
        </div>
    );
};

export default LoginAuth;