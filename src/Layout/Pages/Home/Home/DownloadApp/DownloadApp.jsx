

const DownloadApp = () => {
    return (
        <section className="bg-[#108bf833]">
            <div className="py-10 md:py-[150px] max-w-[1536px] xl:px-24 lg:px-12 md:px-8 px-5 mx-auto ">
                <div
                    className="rounded-[5px] bg-gradient-to-r from-[#0969FA] to-[#17A9F7] max-w-[847px] py-5 md:py-0 md:h-[250px] mx-auto flex flex-col md:flex-row items-center justify-center">
                    <img src="https://i.ibb.co/7STtbny/mobile.png" alt="" />
                    <div className="p-5 md:p-12">
                        <h3 className="text-white text-xl md:text-[35px] font-bold mb-3 md:mb-5">Get Mobile Apps
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