
import { AiOutlineMenu } from "react-icons/ai";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <h2>Hello</h2>
                <h2>Hello</h2>
                <h2>Hello</h2>
                <h2>Hello</h2>
                <h2>Hello</h2>
                <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden text-3xl font-bold absolute left-0 top-0"><AiOutlineMenu /></label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 h-full bg-green-100 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>My Selected Classes</a></li>
                    <li><a>My Enrolled Classes</a></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;