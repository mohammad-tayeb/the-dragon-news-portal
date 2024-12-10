import Haeder from "../Shared/Header/Haeder";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews/BreakingNews";

const Home = () => {
    return (
        <div>
            <Haeder></Haeder>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6 mt-5">
                <div><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2 border">Middle Double part holding news</div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;