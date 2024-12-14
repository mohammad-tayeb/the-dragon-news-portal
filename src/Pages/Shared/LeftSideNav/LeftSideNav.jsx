import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeNews from "../../../assets/demo-card-thumbnail.png"
import fakeNews2 from "../../../assets/fakeNews.jpeg"
import moment from "moment";
import { SlCalender } from "react-icons/sl";

const LeftSideNav = () => {
    const [categories, setCategorirs] = useState([]);

    useEffect(() => {
        fetch('../../../../public/categories.json')
            .then(res => res.json())
            .then(data => setCategorirs(data))
    }, [])
    return (
        <div className="text-white p-4">
            <h2 className="text-2xl font-bold mb-6">All Categories</h2>
            <div className="space-y-4 font-medium">

                {
                    categories.map(category => <Link
                        to={`/category/${category.id}`}
                        className="block hover:text-gray-400"
                        key={category.id}>
                        {category.name}</Link>)
                }

                {/* card here */}
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure>
                        <img
                            src={fakeNews}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            News
                        </h2>
                        <p className="text-sm"> Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="flex flex-row mt-3 text-sm text-gray-400">
                            <p>Sports</p>
                            <div className="flex flex-row items-center">
                                <SlCalender />
                                <p className="ms-2">{moment().format("MMM Do YY")}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* second card */}
                <div className="card bg-base-100 w-64 shadow-xl">
                    <figure>
                        <img
                            src={fakeNews2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            News
                        </h2>
                        <p className="text-sm">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                        <div className="flex flex-row mt-3 text-sm text-gray-400">
                            <p>National</p>
                            <div className="flex flex-row items-center">
                                <SlCalender />
                                <p className="ms-2">{moment().format("MMM Do YY")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSideNav;