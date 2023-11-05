import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginAuth from './LoginAuth';
import Swal from 'sweetalert2'
import { useState } from 'react';
import Navbar from '../../components/Header/Navbar';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const [user, setUser] = useState(null);


    const { logIN } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log("Login", location);

    

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        try {
            // Login User
            const result = await logIN(email, password);
            const user = result.user;
            console.log("Se:",user);
            setUser(user);

            // Display a success message with SweetAlert2
            Swal.fire({
                icon: 'success',
                title: 'Login Successful!',
                text: 'You have successfully logged in.',
            });

            navigate(location?.state ? location.state : '/');
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;

            // Display an error message with SweetAlert2
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email or Password does not match',
            });
        }
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>

                            <LoginAuth></LoginAuth>

                            <p className='text-center'>Don't have an account <Link className='text-blue-700' to="/register">Register</Link></p>
                            {user &&
                                <div>
                                    <h2>User:{user.displayName}</h2>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;