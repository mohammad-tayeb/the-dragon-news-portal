import moment from "moment";
import logo from "../../../assets/logo.png"

const Haeder = () => {
    return (
        <div className="flex flex-col items-center space-y-2 mt-5 text-white">
            <img src={logo} alt="" /> 
            <h2 className="font-semibold">Journalsim Without Fear</h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>           
        </div>
    );
};

export default Haeder;