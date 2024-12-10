import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            </div>
        </div>
    );
};

export default LeftSideNav;