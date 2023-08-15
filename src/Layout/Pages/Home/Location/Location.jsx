import { Slide } from "react-awesome-reveal";


const Location = () => {
    return (
        <section className="py-10 max-w-7xl mx-auto">
        <hr className="border-dotted border-2 border-green-300 w-[300px] mx-auto"></hr>
        <Slide>
            <h2 className="text-4xl font-bold text-center text-blue-500">Our Location</h2>
        </Slide>
        <hr className="border-dotted border-2 border-green-300 w-[300px] mx-auto mb-8 mt-2"></hr>
            <div className="mx-5 lg:mx-0">
                <img src="https://i.ibb.co/Fk1gcrw/Google-Maps.png" alt="Google Maps" />
            </div>
        </section>
    );
};

export default Location;
