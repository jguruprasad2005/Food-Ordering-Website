import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the context
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const [token, setToken] = useState("");

    // Fetches food list from backend API
    const fetchFoodList = async () => {
        try {
            const response = await axios.get(`${url}/api/food/list`);
            setFoodList(response.data.data);
        } catch (error) {
            console.error("Error fetching food list:", error);
        }
    };

    // Loads cart data for the user from backend
    const loadCartData = async (token) => {
        try {
            const response = await axios.get(`${url}/api/cart/get`, {
                headers: { token },
            });
            // Assuming the backend returns the cart in the format { cartData: { itemId: quantity } }
            setCartItems(response.data.cartData);
        } catch (error) {
            console.error("Error loading cart data:", error);
        }
    };

    // Adds item to cart in frontend and backend
    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1,
        }));

        if (token) {
            try {
                await axios.post(
                    `${url}/api/cart/add`,
                    { itemId },
                    { headers: { token } }
                );
            } catch (error) {
                console.error("Error adding item to cart:", error);
            }
        }
    };

    // Removes item from cart in frontend and backend
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => {
            const updatedQuantity = Math.max((prev[itemId] || 1) - 1, 0);
            return { ...prev, [itemId]: updatedQuantity };
        });

        if (token) {
            try {
                await axios.post(
                    `${url}/api/cart/remove`,
                    { itemId },
                    { headers: { token } }
                );
            } catch (error) {
                console.error("Error removing item from cart:", error);
            }
        }
    };

    // Calculates total cart amount based on current cart items and food list
    const getTotalCartAmount = () => {
        return Object.entries(cartItems).reduce((totalAmount, [itemId, quantity]) => {
            if (quantity > 0) {
                const itemInfo = food_list.find((product) => product._id === itemId);
                if (itemInfo) {
                    totalAmount += itemInfo.price * quantity;
                }
            }
            return totalAmount;
        }, 0);
    };

    // Fetch initial cart items and food list when component loads
    useEffect(() => {
        const loadData = async () => {
            await fetchFoodList();
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                await loadCartData(storedToken);
            }
        };
        loadData();
    }, []);

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
