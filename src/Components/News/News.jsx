// import authorIcon from "../../assets/user.png"
import { FaRegBookmark } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const News = ({ news }) => {
    const { title, author, image_url, details, rating, total_view, _id } = news

    return (
        <>
            <div className="border border-gray-500 mt-10">
                <div className="">
                    <div className="rounded-t-sm flex flex-row items-center justify-between bg-slate-500 px-2 py-1">
                        <div className="flex flex-row items-center">
                            {/* <FaRegUserCircle className="text-white me-3  text-3xl" /> */}
                            <img className="w-8 h-8 m-3 rounded-full" src={author.img} alt="Rounded avatar"></img>
                            <div className="flex flex-col text-white">
                                <p className="text-sm">{author.name? author.name: 'Classified'}</p>
                                <p className="text-xs text-gray-300">{author.published_date}</p>
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <FaRegBookmark className="me-3 hover:text-white" />
                            <CiShare2 className="hover:text-white" />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title my-2 px-4 ">{title}</h2>
                    <img className="w-full px-4 rounded" src={image_url} alt="" />
                    <p className="mt-2 text-sm px-4 ">{details.slice(0, 300)}...
                        <span className="font-bold text-orange-800"><Link to={`/newsDetails/${_id}`}>Read More</Link></span>
                    </p>
                    <hr className="mt-3 px-4 border-gray-700" />
                    <div className="flex flex-row items-center justify-between mt-3 px-4 pb-4">
                        <div className="flex flex-row text-orange-400 ms-2">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <p className="text-sm text-white ms-3">{rating.number}</p>
                        </div>
                        <div className="flex flex-row items-center">
                            <FaEye className="hover:text-white" />
                            <p className="text-sm ms-3 me-3 text-white">{total_view}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

News.propTypes = {
    news: PropTypes.object.isRequired
}
export default News;