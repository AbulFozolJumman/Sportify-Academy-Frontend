
const Instructor = ({ coach }) => {
    const { name, image, email } = coach;
    return (
        <>
            <div className=" text-gray-900">
                <div>

                    <img src={image} className="w-full h-[300px] object-cover object-center rounded-lg shadow-md" />

                        <div className="relative px-4 -mt-16  ">
                            <div className="bg-white p-6 rounded-lg shadow-lg">

                                <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{name}</h4>
                                <div className="mt-4">
                                    <span className="text-teal-600 text-md font-semibold">{email} </span>
                                </div>
                            </div>
                        </div>

                </div>
            </div>
        </>
    );
};

export default Instructor;


{/* <div className="w-full md:max-w-[400px] rounded shadow-lg md:mx-auto bg-green-100 mb-3">
            <img className="w-full md:w-[400px] h-[300px] rounded" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base mb-2">
                    <span className="font-bold">Email:</span> {email}
                </p>
            </div>
        </div> */}