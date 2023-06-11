import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddAClass = () => {
    const { user } = useContext(AuthContext);
    // This is Add Toy handler
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const instructor = user?.displayName;
        const email = user?.email;
        const name = form.className.value;
        const image = form.photo.value;
        const seats = form.seats.value;
        const price = form.price.value;
        const addClass = {
            instructor,
            email,
            name,
            image,
            seats,
            price,
            status: "pending",
            students: 0
        }

        console.log(addClass);

        fetch('https://sportify-academy-server.vercel.app/classes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addClass)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire('Class added successfully')
                }
                form.reset()
            })

    }


    return (
        <div className="my-12">
            <div className="lg:w-1/2 mx-auto border  rounded-xl p-12 shadow-lg bg-green-100">
                <form onSubmit={handleBookService}>
                    <h1 className="text-4xl font-bold mb-6">Add a Class</h1>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Your Name</span>
                        </label>
                        <input type="text" readOnly name="name" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Your Email</span>
                        </label>
                        <input type="text" readOnly name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Class Name</span>
                        </label>
                        <input type="text" name="className" placeholder="Toy Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Class Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo-URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Available seats</span>
                        </label>
                        <input type="text" name="seats" placeholder="Available seats" className="input input-bordered" required />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-lg font-semibold mb-1">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-3">
                        <button className="text-white hover:bg-blue-700 bg-blue-500 font-bold py-2 px-4 rounded">Add Now</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddAClass;