import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items); // Fix: Access the actual array of cart items
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart()); // Fix: Properly dispatch the clearCart action
    };

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            {cartItems.length > 0 ? (
                <>
                    <button
                        className="bg-red-500 text-white p-2 rounded"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                    <div>
                        <ItemList items={cartItems} />
                    </div>
                </>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
