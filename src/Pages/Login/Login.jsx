import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

    const { login } = useContext(AuthContext)
    const location = useLocation(); // AuthProvider e state set kore dile location e ekta state/loaction pawa jabe
    const navigate = useNavigate(); // Navigate use kore oi state e patano jabe after login

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        //login using auth
        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                navigate(location.state ? location.state : "/")
            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-3xl font-bold text-white mt-3">Login</h2>
            <div className="w-1/2 mx-auto -mt-5">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-white">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-white">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover  text-white">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary  text-white">Login</button>
                    </div>
                </form>
                <p className="text-center text-sm text-white -mt-4">Dont Have An Acoount? <span className="text-red-600 font-semibold"><NavLink to="/register">Register</NavLink></span></p>
            </div>
        </div>
    );
};

export default Login;