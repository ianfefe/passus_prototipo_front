import { RouterProvider } from "react-router";
import { router } from "./routes"; // Este router já deve estar usando o createHashRouter
import { CartProvider } from "./context/CartContext";
import { IntroCover } from "./components/IntroCover";
import { CursorGlow } from "./components/CursorGlow";

export default function App() {
  return (
    <CartProvider>
      <CursorGlow />
      <IntroCover />
      <RouterProvider router={router} />
    </CartProvider>
  );
}