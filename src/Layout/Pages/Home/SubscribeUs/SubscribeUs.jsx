import { Slide } from "react-awesome-reveal";


const SubscribeUs = () => {
    return (
        <section className="bg-green-100 pt-12 pb-12 md:pb-[75px] xl:px-24 lg:px-12 md:px-8 px-5 mx-auto ">
            <hr className="border-dotted border-2 border-green-300 w-[250px] mx-auto"></hr>
            <Slide>
                <h2 className="text-4xl font-bold text-center text-blue-500">Subscribe Us</h2>
            </Slide>
            <hr className="border-dotted border-2 border-green-300 w-[250px] mx-auto mt-2 mb-8"></hr>
            <img className="mx-auto mb-5 " src="https://i.ibb.co/2hY4F7S/post-box.png" alt="" />
            <h2 className="text-[30px] font-semibold mb-3 md:text-center">Subscribe For the latest updates</h2>
            <p className="md:text-[18px] text-[#034760] mb-7 md:text-center">Subscribe to newsletter and never miss the new
                post
                every week.</p>
            <div className="flex justify-center flex-col md:flex-row gap-2">
                <input className="md:w-[456px] rounded-[5px] w-full h-[38px] border-2 border-[#D0D5DD] md:pl-10 pl-5 outline-[#23A6F0]"
                    type="text" placeholder="Enter your email here" />
                <a className="text-white font-medium bg-gradient-to-r from-[#17A9F7] to-[#0969FA] py-[7px] w-[120px] text-center rounded-[5px] text-[15px] hover:bg-gradient-to-r hover:from-[#FFFFFF] hover:to-[#FFFFFF] hover:border hover:border-[#128CED] hover:text-[#128CED]"
                    href="#">Subscribe</a>
            </div>
        </section>
    );
};

export default SubscribeUs;