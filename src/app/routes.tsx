import { createHashRouter } from "react-router"; 
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ProductsPage } from "./components/ProductsPage";
import { AboutPage } from "./components/AboutPage";


export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      // 1. Usamos 'index: true' para garantir que a HomePage sempre abra na raiz
      { index: true, element: <HomePage /> },
      
      { path: "produtos", element: <ProductsPage /> },
      { path: "sobre", element: <AboutPage /> }
    ],
  },
]);