import { RouterProvider } from "react-router";
import { router } from "./routes"; // Este router já deve estar usando o createHashRouter
import { CartProvider } from "./context/CartContext";
import { IntroCover } from "./components/IntroCover";

export default function App() {
  return (
    <CartProvider>
      <IntroCover />
      <RouterProvider router={router} />
    </CartProvider>
  );
}