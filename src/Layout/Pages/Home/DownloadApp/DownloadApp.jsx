import { Slide } from "react-awesome-reveal";


const DownloadApp = () => {
    return (
        <section className="pt-12">
            <hr className="border-dotted border-2 border-green-300 w-[300px] mx-auto"></hr>
            <Slide>
                <h2 className="text-4xl font-bold text-center text-blue-500">Our Mobile App</h2>
            </Slide>
            <hr className="border-dotted border-2 border-green-300 w-[300px] mx-auto mt-2"></hr>
            <div className="py-10 md:py-[150px] max-w-[1536px] xl:px-24 lg:px-12 md:px-8 px-5 mx-auto ">
                <div
                    className="rounded-[5px] bg-green-100 max-w-[847px] py-5 md:py-0 md:h-[250px] mx-auto flex flex-col md:flex-row items-center justify-center">
                    <img src="https://i.ibb.co/7STtbny/mobile.png" alt="" />
                    <div className="p-5 md:p-12">
                        <h3 className="text-green-600 text-xl md:text-[35px] font-bold mb-3 md:mb-5">Get Mobile Apps
                            Version
                        </h3>
                        <div className="flex items-center">
                            <a href="#"><img src="https://i.ibb.co/x7PRhMQ/appstore.png" alt="" /></a>
                            <a href="#"><img src="https://i.ibb.co/KqtXHCw/googleplay.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadApp;