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
        <section className="py-12 max-w-7xl mx-auto">
            <Slide>
                <h2 className="text-4xl font-bold text-center text-blue-500 pb-12">Tips For Athletes</h2>
            </Slide>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-5 lg:mx-0">
                {tips.map((tip, index) => (
                    <div
                        key={index}
                        className="bg-green-100 shadow-md rounded p-4 text-gray-900"
                    >
                        <p>{tip}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Tips;