import { Slide } from "react-awesome-reveal";


const Tips = () => {
    const tips = [
        "Stay hydrated and drink plenty of water.",
        "Get enough rest and prioritize sleep for optimal recovery.",
        "Follow a balanced diet that includes a variety of nutrient-rich foods.",
        "Set specific goals and track your progress to stay motivated.",
        "Incorporate strength training exercises to improve performance and prevent injuries.",
        "Listen to your body and take rest days when needed.",
        "Stay consistent with your training and practice to see improvements.",
        "Work on mental resilience and visualization techniques.",
        "Warm up properly before each workout or competition.",
        "Stay positive and maintain a growth mindset.",
    ];

    return (
        <section className="py-10 max-w-7xl mx-auto">
        <hr className="border-dotted border-2 border-green-300 w-[300px] mx-auto"></hr>
        <Slide>
            <h2 className="text-4xl font-bold text-center text-blue-500">Tips For Athletes</h2>
        </Slide>
        <hr className="border-dotted border-2 border-green-300 w-[300px] mx-auto mb-8 mt-2"></hr>
            <div className="grid font-bold grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-5 lg:mx-0">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className="bg-green-100 shadow-md rounded p-4 text-gray-900"
                    >
                        <p className="text-green-600 animate-bounce">❝{tip}❞</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tips;