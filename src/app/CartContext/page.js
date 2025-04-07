// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     const existingProduct = cart.find(item => item.id === product.id);
//     if (existingProduct) {
//       setCart(cart.map(item =>
//         item.id === product.id
//           ? { ...item, quantity: item.quantity + product.quantity }
//           : item
//       ));
//     } else {
//       setCart([...cart, product]);
//     }
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => useContext(CartContext);
