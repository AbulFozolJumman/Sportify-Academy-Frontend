

const FAQ = () => {
    return (
        <section className="my-12 max-w-[1536px] xl:px-24 lg:px-12 md:px-8 px-5 mx-auto">
            <div className="bg-green-100 py-5 md:py-8 px-5 md:px-[75px] mb-8">
                <h4 className="text-green-600 text-2xl md:text-[30px] font-semibold mb-3">Frequently Asked Questions</h4>
                <p className="text-green-600">Here are a few of the questions we get the most. If you don&#39;t see what&#39;s on your
                    mind, reach out to
                    us anytime on phone, chat, or email.</p>
            </div>

            <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
                <label className="grow px-4 py-5 font-semibold md:text-[18px]" htmlFor="collapse">How does Sportify Academy work?</label>
                <input
                    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                    type="checkbox" name="collapse" id="collapse" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-[67px] w-[67px] display md:block transition-all duration-0 text-white bg-[#23A6F0]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <div
                    className="-transparent w-full absolute -translate-y-full scale-75 scale-y-0 px-4 py-7 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-white text-black peer-checked:opacity-100">
                    This is a Sports Academy where sports lovers can get professional training to achieve their goal of becoming an athlete
                </div>
            </div>

            <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
                <label className="grow px-4 py-5 font-semibold md:text-[18px]" htmlFor="collapse2">How do I enroll?</label>
                <input
                    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                    type="checkbox" name="collapse2" id="collapse2" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-[67px] w-[67px] display md:block transition-all duration-0 text-white bg-[#23A6F0]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <div
                    className="-transparent absolute w-full -translate-y-full scale-75 scale-y-0 px-4 py-7 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-white text-black peer-checked:opacity-100">
                    Just select your favorite class and pay through Stripe and get started.
                </div>
            </div>

            <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
                <label className="grow px-4 py-5 font-semibold md:text-[18px]" htmlFor="collapse3">Do you offer Paypal as a
                    payment
                    option?</label>
                <input
                    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                    type="checkbox" name="collapse3" id="collapse3" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-[67px] w-[67px] display md:block transition-all duration-0 text-white bg-[#23A6F0]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <div
                    className="-transparent absolute w-full -translate-y-full scale-75 scale-y-0 px-4 py-7 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-white text-black peer-checked:opacity-100">
                    Sorry to say, right now we are accepting payment with Stripe only.
                </div>
            </div>

            <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
                <label className="grow px-4 py-5 font-semibold md:text-[18px]" htmlFor="collapse4">Can I purchase dual class?</label>
                <input
                    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                    type="checkbox" name="collapse4" id="collapse4" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-[67px] w-[67px] display md:block transition-all duration-0 text-white bg-[#23A6F0]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <div
                    className="-transparent absolute w-full -translate-y-full scale-75 scale-y-0 px-4 py-7 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-white text-black peer-checked:opacity-100">
                    Yes, you can. In case we will give you a perfect schedule to maintain both.
                </div>
            </div>

            <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
                <label className="grow px-4 py-5 font-semibold md:text-[18px]" htmlFor="collapse5">How do I maintain time as a student?</label>
                <input
                    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                    type="checkbox" name="collapse5" id="collapse5" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-[67px] w-[67px] display md:block transition-all duration-0 text-white bg-[#23A6F0]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <div
                    className="-transparent absolute w-full -translate-y-full scale-75 scale-y-0 px-4 py-7 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-white text-black peer-checked:opacity-100">
                    No problem. We have special time schedule plan for students.
                </div>
            </div>

            <div className="flex flex-wrap justify-start overflow-hidden bg-green-100 text-green-600 shadow-md mb-2">
                <label className="grow px-4 py-5 font-semibold md:text-[18px]" htmlFor="collapse6">What is difference between
                    PRO
                    and Standard plans?</label>
                <input
                    className="peer mx-4 my-3 h-0 w-0 appearance-none rounded border text-slate-800 accent-slate-600 opacity-0"
                    type="checkbox" name="collapse6" id="collapse6" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-[67px] w-[67px] display md:block transition-all duration-0 text-white bg-[#23A6F0]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <div
                    className="-transparent absolute w-full -translate-y-full scale-75 scale-y-0 px-4 py-7 opacity-0 transition-all duration-0 peer-checked:relative peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:scale-y-100 peer-checked:bg-white text-black peer-checked:opacity-100">
                    Standard plan is only available for one year purchase. And pro plan is a lifetime purchase.
                </div>
            </div>

        </section>
    );
};

export default FAQ;