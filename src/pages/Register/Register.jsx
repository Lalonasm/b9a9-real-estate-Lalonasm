import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false)


    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password must have one uppercase character.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password must have one lowercase character.');
            return;
        }


        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('You are Registered Successfully')
            })
            .catch(error => {
                setRegisterError(error.message)
                console.error(error)
            })



    }
    return (

        <div>
            <Navbar></Navbar>
            <div className="text-center">
                <h2>Please Login</h2>
                <form onSubmit={handleRegister} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>

                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="password" name="password" className="input input-bordered" required />
                        <span onClick={() => setShowPassword(!showPassword)}>
                            {
                                showPassword ?  <FaEyeSlash></FaEyeSlash>:<FaEye></FaEye>
                            }

                        </span>

                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#ADEAF2] ">Register</button>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-700 font-bold mb-4">{registerError}</p>
                }
                {
                    success && <p className="text-green-700 font-bold mb-4">{success}</p>
                }
                <p className="mb-10">Already Have an Account? Please <Link className="text-[#ADEAF2] font-bold rounded-xl p-4" to={'/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;