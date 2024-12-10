import Marquee from "react-fast-marquee";  //

const BreakingNews = () => {
    return (
        <div className="flex flex-col md:flex-row mx-auto my-5 p-2 bg-slate-700 rounded-lg">
            <button className="btn btn-warning mb-2 md:mb-0 md:me-4">Breaking News</button>
            <Marquee
                className="text-white font-poppins"
                pauseOnHover={true}
                speed={80}
            >
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>
    
    );
};

export default BreakingNews;