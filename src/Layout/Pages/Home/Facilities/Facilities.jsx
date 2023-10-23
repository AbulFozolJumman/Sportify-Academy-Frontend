import { Slide } from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

const Facilities = () => {
    return (
        <div className="py-10">
        <hr className="border-dotted border-2 border-green-300 w-[330px] mx-auto"></hr>
        <Slide>
            <h2 className="text-4xl font-bold text-center text-blue-500">Academy Facilities</h2>
        </Slide>
        <hr className="border-dotted border-2 border-green-300 w-[330px] mx-auto mb-8 mt-2"></hr>
            <Marquee pauseOnHover={true}>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://i.ibb.co/SXNGNFT/PISTAS-NUEVO-PABELLON-BALONCESTO-PCA0456-3.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-green-600">Indoor Training Ground</h3>
                </div>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://i.ibb.co/FbptSHw/ciudad-real-madrid-valdebevas-2e16d0ba-fill-524x295.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-green-600">Outdoor Training Ground</h3>
                </div>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://i.ibb.co/b7t67FQ/dugout-m37d4ytk-poster.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-green-600">Swimming Pool</h3>
                </div>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://i.ibb.co/G78hS5m/image-867-small-1024.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-green-600">Gymnasium</h3>
                </div>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://i.ibb.co/6mqcft2/dressing-room.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-green-600">Dressing Room</h3>
                </div>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://i.ibb.co/7VCS50Y/278-F090800000578-3038186-image-a-52-1429013110611.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-green-600">Dining</h3>
                </div>
            </Marquee>
        </div>
    );
};

export default Facilities;