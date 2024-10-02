import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import {Link} from "react-router-dom";
import useOnLineStatus from "../utils/useOnLineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {

    const [darkMode,setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    const {loggedInUser} = useContext(UserContext);

    const [btnNameReact,setBtnNameReact] = useState("login");

    const onLineStatus = useOnLineStatus();

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className={`${darkMode && "dark"}`}>
            <div className='m-2 flex justify-between bg-black border rounded-lg dark:bg-gray-800 dark:text-white'>
                <div className='w-32'>
                <img className='border rounded-full' src={LOGO_URL}></img>
                </div>
                <div className='p-4 m-5'>
                    <ul className="flex items-center">
                        <li className="p-2 px-4 text-xl  border   bg-gray-700 text-white border-gray-500 rounded-2xl hover:bg-black hover:border-white hover:text-white hover:cursor-pointer "><button onClick={toggleDarkMode}>{darkMode ? "Light Mode":"Dark Mode"}</button></li>
                        <li className="px-4 text-xl text-white">OnlineStatus : {onLineStatus?"🟢":"🔴"}</li>
                        <li className="px-4 text-xl text-white hover:text-blue-600"><Link to="/">Home</Link></li>
                        <li className="px-4 text-xl text-white hover:text-blue-600"><Link to="/about">AboutUs</Link></li>
                        <li className="px-4 text-xl text-white hover:text-blue-600"><Link to="/contact">Contact Us</Link></li>
                        <li className="px-4 text-xl text-white hover:text-blue-600"><Link to="/grocery">Grocery</Link></li>
                        <li className="px-4 text-xl font-bold text-white hover:text-blue-600 ">
                            <Link to="/cart">Cart({cartItems.length} items)</Link>
                        </li>
                        <li className="px-4 text-xl text-white hover:text-blue-600 ">{loggedInUser}</li>
                        <button className="bg-transparent text-xl hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 hover:cursor-pointer border border-blue-500 hover:border-transparent rounded-lg" onClick={
                            ()=>{
                                btnNameReact === "login" ? setBtnNameReact("logout"):setBtnNameReact("login");
                            }

                        }>{btnNameReact}</button>

                    </ul>
                </div>

            </div>
        </div>
    )
};

export default Header;