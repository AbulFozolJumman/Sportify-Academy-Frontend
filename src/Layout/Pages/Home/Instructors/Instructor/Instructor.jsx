

const Instructor = ({coach}) => {
    const {name, image, email} = coach;
    return (
        <div className="max-w-[400px] rounded shadow-lg mx-auto bg-green-100">
            <img className="w-full h-[300px] rounded" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base mb-2">
                    <span className="font-bold">Email:</span> {email}
                </p>
            </div>
        </div>
    );
};

export default Instructor;