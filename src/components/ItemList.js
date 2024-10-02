import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };

    return (
        <div>
            {items && items.length > 0 ? (
                items.map((item) => (
                    <div key={item.card.info.id}>
                        <div className="p-2 m-2 border-gray-200 border-b-2 text-left font-semibold flex justify-between">
                            <div className="w-9/12">
                                <div className="py-2">
                                    <span>{item.card.info.name}</span>
                                    <span>
                                        {" "}
                                        - Rs.{" "}
                                        {item.card.info.price
                                            ? item.card.info.price / 100
                                            : item.card.info.defaultPrice / 100}{" "}
                                        /-
                                    </span>
                                </div>
                                <p className="p-2 text-xs">
                                    {item.card.info.description}
                                </p>
                            </div>
                            <div className="w-3/12 relative">
                                <button
                                    className="px-2 bg-white shadow-lg mx-4 opacity-80 hover:opacity-100 border rounded-lg"
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add +
                                </button>
                                <img
                                    src={CDN_URL + item.card.info.imageId}
                                    alt={item.card.info.name}
                                />
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No items available</p>
            )}
        </div>
    );
};

export default ItemList;
