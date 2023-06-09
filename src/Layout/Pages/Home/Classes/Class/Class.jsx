

const Class = ({ course}) => {
    const {image, name, instructor, price, seats} = course;
    return (
        <div className="max-w-[400px] rounded shadow-lg mx-auto mb-3 bg-green-100">
            <img className="w-full rounded" src={image} alt={name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base mb-2">
                    Instructor: {instructor}
                </p>
                <p className="text-gray-700 text-base mb-2">
                    Available Seats: {seats}
                </p>
                <p className="text-gray-700 text-base mb-2">
                    Price: {price}
                </p>
            </div>
            <div className="px-6 py-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply
                </button>
            </div>
        </div>
    );
};

export default Class;