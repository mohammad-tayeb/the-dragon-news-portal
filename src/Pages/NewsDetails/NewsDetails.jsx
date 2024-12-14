import { useParams } from "react-router-dom";
import Haeder from "../Shared/Header/Haeder";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Navbar from "../Shared/Navbar/Navbar";


const NewsDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <Haeder></Haeder>
            <Navbar></Navbar>
            <div className="flex flex-row mt-5">
                <div className="w-3/4 border">
                    <h2 className="">Dragon News</h2>
                    <div>
                        <h2 className="card-title my-2 px-4 ">{id}</h2>
                        <img className="w-full px-4 rounded" src="" alt="" />
                        <p className="mt-2 text-sm px-4 ">details...

                        </p>
                        <hr className="mt-3 px-4 border-gray-700" />
                        <div className="flex flex-row items-center justify-between mt-3 px-4 pb-4">
                            <div className="flex flex-row text-orange-400 ms-2">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <p className="text-sm text-white ms-3">rating</p>
                            </div>
                            <div className="flex flex-row items-center">
                                <FaEye className="hover:text-white" />
                                <p className="text-sm ms-3 me-3 text-white">total-view</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border ms-5"><RightSideNav></RightSideNav></div>
            </div>
        </div>

    );
};

export default NewsDetails;