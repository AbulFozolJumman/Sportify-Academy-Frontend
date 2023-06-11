const Class = ({ course }) => {
  const { image, name, instructor, price, seats } = course;

  const cardBgColor = seats === 0 ? "bg-red-500" : "bg-green-100";
  const isButtonDisabled = seats === 0;
  const buttonTextColor = seats === 0 ? "text-white" : "text-white";
  const buttonBgColor = seats === 0 ? "bg-black" : "bg-blue-500";
  const buttonHoverBgColor = seats === 0 ? "" : "hover:bg-blue-700";

  return (
    <div className={`w-full md:max-w-[400px] rounded shadow-lg mx-auto mb-3 ${cardBgColor}`}>
      <img className="w-full md:w-[400px] h-[250px] rounded" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base mb-2">
          Instructor: {instructor}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Available Seats: {seats}
        </p>
        <p className="text-gray-700 text-base mb-2">Price: ${price}</p>
      </div>
      <div className="px-6 py-4">
        <button
          className={`font-bold py-2 px-4 rounded ${buttonTextColor} ${buttonBgColor} ${buttonHoverBgColor}`}
          disabled={isButtonDisabled}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default Class;
