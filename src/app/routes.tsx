import { createBrowserRouter } from "react-router"; // ou 'react-router-dom' dependendo da sua versão
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ProductsPage } from "./components/ProductsPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { CartPage } from "./components/CartPage";
import { CheckoutPage } from "./components/CheckoutPage"; // Garanta este import
import { JoinPage } from "./components/JoinPage";
import { AboutPage } from "./components/AboutPage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { OtherProjectsPage } from "./components/OtherProjectsPage";
import { AdminAnalyticsPage } from "./components/AdminAnalyticsPage";
import { AdminProductsPage } from "./components/AdminProductsPage";
import { AdminProductDetailPage } from "./components/AdminProductDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // O Layout envelopa as páginas estruturalmente
    children: [
      { path: "", element: <HomePage /> },
      { path: "produtos", element: <ProductsPage /> },
      { path: "produto/:id", element: <ProductDetailPage /> },
      { path: "carrinho", element: <CartPage /> },
      
      /* === CORREÇÃO AQUI === */
      /* Certifique-se de que o path seja exatamente "checkout" */
      { path: "checkout", element: <CheckoutPage /> }, 
      
      { path: "participar", element: <JoinPage /> },
      { path: "sobre", element: <AboutPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "cadastro", element: <RegisterPage /> },
      { path: "outros-projetos", element: <OtherProjectsPage /> },
      
      /* Rotas do painel administrativo */
      { path: "admin/analytics", element: <AdminAnalyticsPage /> },
      { path: "admin/produtos", element: <AdminProductsPage /> },
      { path: "admin/produto/:id", element: <AdminProductDetailPage /> },
    ],
  },
]);