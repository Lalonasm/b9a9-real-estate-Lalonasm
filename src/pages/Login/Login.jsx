import { Link, useLocation, useNavigate } from "react-router-dom";
// import Navbar from "../../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";




const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = (e) => {
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        console.log(form)
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)


        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => console.error(error))




    }
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className="text-center">
                <form onSubmit={handleLogin} className="card-body lg:w-1/2 md:w-3/4 mx-auto">
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
                        <button className="btn  bg-[#ADEAF2]">Login</button>
                    </div>
                </form>
                <p className="mb-10">Do Not Have an Account? Please <Link className="text-[#ADEAF2] font-bold rounded-xl p-4" to={'/register'}>Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;