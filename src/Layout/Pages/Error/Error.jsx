import { Slide } from "react-awesome-reveal";
import { Link, useRouteError } from "react-router-dom";

// This is default Error page
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="rounded-lg bg-green-100 p-8 mx-5 md:mx-auto my-12 max-w-3xl text-center border-gray-400">
            <img className="block w-full" src="https://i.ibb.co/VWLVp8N/error.png" alt="" />
            <Slide>
                <h2 className="my-5 text-5xl font-bold text-red-500">{error.statusText || error.message}</h2>
            </Slide>
            <div className="flex justify-center gap-5 items-center">
                <p className="text-xl">
                    Please Refresh the page, or 
                </p>
                <Link to="/">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Go To Home
                    </button>
                </Link>
            </div>
        </div>
    );
}