import Marquee from "react-fast-marquee";

const Facilities = () => {
    return (
        <div className="py-12">
            <h2 className="text-4xl font-bold text-center text-blue-500 pb-12">Our Academy Facilities</h2>
            <Marquee>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://i.ibb.co/SXNGNFT/PISTAS-NUEVO-PABELLON-BALONCESTO-PCA0456-3.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-black">Indoor Training Ground</h3>
                </div>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://universidadeuropea.com/resources/media/images/ciudad-real-madrid-valdebevas.2e16d0ba.fill-524x295.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-black">Outdoor Training Ground</h3>
                </div>
                <div className="bg-green-100 rounded mx-5 p-5">
                <img className="w-[400px] h-[300px] rounded" src="https://cdn.resfu.com/scripts/tmp_images/dugout_m37d4ytk_poster.jpg?size=1000x&lossy=1" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-black">Swimming Pool</h3>
                </div>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://s3.amazonaws.com/thelab.bleacherreport.com/blitline/image-867-small-1024.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-black">Gymnasium</h3>
                </div>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://rmfcampslosangeles.com/wp-content/uploads/2020/02/collage-@leodavincipro-4610.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-black">Dressing Room</h3>
                </div>
                <div className="bg-green-100 rounded mx-5 p-5">
                    <img className="w-[400px] h-[300px] rounded" src="https://i.dailymail.co.uk/i/pix/2015/04/14/13/278F090800000578-3038186-image-a-52_1429013110611.jpg" />
                    <h3 className="pt-4 text-center font-semibold text-xl text-black">Dining</h3>
                </div>
            </Marquee>
        </div>
    );
};

export default Facilities;