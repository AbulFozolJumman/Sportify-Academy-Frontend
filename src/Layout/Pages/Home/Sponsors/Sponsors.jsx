import { Slide } from "react-awesome-reveal";

const Sponsors = () => {
    return (
        <div className="py-10 max-w-7xl mx-auto">
        <hr className="border-dotted border-2 border-green-300 w-[300px] mx-auto"></hr>
        <Slide>
            <h2 className="text-4xl font-bold text-center text-blue-500">Our Sponsors</h2>
        </Slide>
        <hr className="border-dotted border-2 border-green-300 w-[300px] mx-auto mb-8 mt-2"></hr>
            <div className="flex items-center justify-around flex-wrap gap-5 md:gap-0">
                <img className="w-80 h-80 p-4 rounded-lg bg-green-300 animate-pulse" src="https://i.ibb.co/5FxfQyB/Addidas.jpg" alt="Addidas Logo" />
                <img className="w-80 h-80 p-4 rounded-lg bg-green-300 animate-pulse" src="https://i.ibb.co/Pjz59Pb/Emirates.jpg" alt="Emirates" />
                <img className="w-80 h-80 p-4 rounded-lg bg-green-300 animate-pulse" src="https://i.ibb.co/BwTqWdk/EA.jpg" alt="EA Sports" />
            </div>
        </div>
    );
};

export default Sponsors;