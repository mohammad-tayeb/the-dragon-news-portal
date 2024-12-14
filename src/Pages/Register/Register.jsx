import { NavLink } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
    // getting data from AuthProvider using AuthContext
   const {createUser} = useContext(AuthContext)
    
   //after submit button clicked data is received here
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(name,email, password)

        // create user by calling a function declared in "AuthProvider" shared by "AuthContext"
        createUser(name,email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-3xl font-bold text-white mt-3">Create An Account</h2>
            <div className="w-1/2 mx-auto -mt-5">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text  text-white">Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="name"
                            className="input input-bordered"
                            required />
                    </div>
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
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary  text-white">Register</button>
                    </div>
                </form>
                <p className="text-center text-sm text-white -mt-4">Already Have An Account? <span className="text-red-600 font-semibold"><NavLink to="/login">Login</NavLink></span></p>
            </div>
        </div>
    );
};

export default Register;