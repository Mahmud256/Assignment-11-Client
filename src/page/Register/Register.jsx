import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import RegisterAuth from './RegisterAuth';
import { updateProfile } from 'firebase/auth';
import Navbar from '../../components/Header/Navbar';
import { AuthContext } from '../../providers/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const [registerError, setRegisterError] = useState('');

    const [user, setUser] = useState(null);

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get("photo");
        const email = form.get('email');
        const password = form.get('password');

        setRegisterError('');

        const specialCharacterRegex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;

        if (password.length < 6) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should be at least 6 characters or longer!'
            });
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        } else if (!/[A-Z]/.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should have at least one uppercase character!'
            });
            setRegisterError('Password should have at least one uppercase character.');
            return;
        } else if (!specialCharacterRegex.test(password)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password should have at least one special character!'
            });
            setRegisterError('Password should have at least one special character.');
            return;
        }

        try {
            const result = await createUser(email, password);
            const user = result.user;
            setUser(user);
            console.log("IM:", user);

            await updateProfile(user, {
                displayName: name, // Set the display name
                photoURL: photo,   // Set the photo URL
            });



            Swal.fire({
                icon: 'success',
                title: 'Your Account Created Successfully!',
                showConfirmButton: false,
                timer: 10000 // 10 seconds
            });

            navigate(location?.state ? location.state : '/');
        } catch (error) {
            console.error(error);
            setRegisterError(error.message);
        }
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                                </div>

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
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>

                            {registerError && <div className="alert alert-error">{registerError}</div>}

                            <RegisterAuth></RegisterAuth>

                            {user &&
                                <div>
                                    <h2>User:{user.displayName}</h2>
                                </div>
                            }
                            <p className='text-center'>Already have an account <Link className='text-blue-700' to="/login">Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
