import { RouterProvider } from "react-router";
import { router } from "./routes"; // Este router já deve estar usando o createHashRouter
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}