import { Slide } from "react-awesome-reveal";

const Sponsors = () => {
    return (
        <div className="py-12 max-w-7xl mx-auto">
            <Slide>
                <h2 className="text-4xl font-bold text-center text-blue-500 pb-12">Our Sponsors</h2>
            </Slide>
            <div className="flex items-center justify-around flex-wrap bg-green-100">
                <img className="w-80 h-80 m-5" src="https://i.ibb.co/5FxfQyB/Addidas.jpg" alt="Addidas Logo" />
                <img className="w-80 h-80 m-5" src="https://i.ibb.co/BwTqWdk/EA.jpg" alt="EA Sports" />
                <img className="w-80 h-80 m-5" src="https://i.ibb.co/Pjz59Pb/Emirates.jpg" alt="Emirates" />
            </div>
        </div>
    );
};

export default Sponsors;