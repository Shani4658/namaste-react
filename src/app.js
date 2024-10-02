import React, { useEffect, useState }  from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import {lazy,Suspense} from 'react';
import Header from './components/Header';
import Body from './components/Body.js';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart.js';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext.js';
import appStore from './utils/appStore.js';



// import Grocery from './components/Grocery';
import Shimmer from './components/Shimmer';


// Header
// ->logo
// ->Nav-items



// Body Component
// -->Search_Bar
// -->Card-Container
//   -->Restaurant Card
//     -->img
//     -->time for delivery
//     -->rating
//     -->cuisine





const Grocery = lazy(() => import("./components/Grocery"));
 
const AppLayout = () => {
    const[userName,setUserName] = useState();
    useEffect(() => {
        const data = {
            name : "Shani Dev",
        };
        setUserName(data.name);
    },[]);

    return(
        <Provider store = {appStore}>
            <UserContext.Provider value = {{loggedInUser:userName,setUserName}}>
                <div className='app'>
                    <Header/>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path: '/',
                element:<Body />,

            },
            {
                path:'/about',
                element:<About />,
                
            },
            {
                path:'/contact',
                element:<Contact />,
            },
            {
                path:'/cart',
                element:<Cart />,
            },
            
            {
                path:'/grocery',
                element:<Suspense fallback={<Shimmer />}><Grocery /></Suspense>,
            },
            {
                path:'/restaurants/:resId',
                element:<RestaurantMenu />,
            },
        ],
        errorElement:<Error />,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
