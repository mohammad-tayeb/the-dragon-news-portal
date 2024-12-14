import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import qz1 from "../../../assets/playground.png"
import qz2 from "../../../assets/class.png"
import qz3 from "../../../assets/swimming.png"

const RightSideNav = () => {
    return (
        <div>
            <div className="text-white space-y-3 p-4">
                <h2 className="text-2xl font-bold">Login</h2>
                {/*Google login*/}
                <button className="btn btn-outline w-full text-white">
                    <FaGoogle />
                    Log In With Google
                </button>
                {/*Github login*/}
                <button className="btn btn-outline w-full text-white">
                    <FaGithub />
                    Log In With Github
                </button>
            </div>

            {/* follow us section */}
            <div className="text-white p-4">
                <h2 className="text-2xl font-bold text-white">Follow Us</h2>
                <div className="flex flex-row items-center border p-3 mt-2 rounded-t-md hover:bg-slate-700">
                    <FaSquareFacebook />
                    <p className="ms-4"><a className="font-medium" href="https://www.facebook.com/">Follow On Facebook</a></p>
                </div>
                <div className="flex flex-row items-center border p-3 hover:bg-slate-700">
                    <FaTwitterSquare />
                    <p className="ms-4"><a className="font-medium" href="https://www.twitter.com/">Follow On Twitter</a></p>
                </div>
                <div className="flex flex-row items-center border p-3 rounded-b-md hover:bg-slate-700">
                    <FaInstagramSquare />
                    <p className="ms-4"><a className="font-medium" href="https://www.instagram.com/">Follow On Instagram</a></p>
                </div>
            </div>
            
            {/* q zone */}
            <div className="text-white space-y-3 p-4 flex flex-col items-center md:items-start">
                <h2 className="text-2xl font-bold">Q Zone</h2>
                <img className="" src={qz2} alt="" />
                <img src={qz1} alt="" />
                <img src={qz3} alt="" />
            </div>


        </div>
    );
};

export default RightSideNav;