import { useLoaderData } from "react-router-dom";
import News from "../../Components/News/News";
import Haeder from "../Shared/Header/Haeder";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
    const allNews = useLoaderData();
    console.log(allNews)


    return (
        <div>
            <Haeder></Haeder>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6 mt-5">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2">
                <h2 className="card-title -mb-5">Dragon News Home</h2>
                    {
                         allNews.map(news => <News key={news._id} news={news}></News>)
                    }
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;