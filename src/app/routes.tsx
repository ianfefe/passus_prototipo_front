import { createHashRouter } from "react-router"; 
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ProductsPage } from "./components/ProductsPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { CartPage } from "./components/CartPage";
import { CheckoutPage } from "./components/CheckoutPage"; 
import { JoinPage } from "./components/JoinPage";
import { AboutPage } from "./components/AboutPage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { OtherProjectsPage } from "./components/OtherProjectsPage";
import { AdminAnalyticsPage } from "./components/AdminAnalyticsPage";
import { AdminProductsPage } from "./components/AdminProductsPage";
import { AdminProductDetailPage } from "./components/AdminProductDetailPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      // 1. Usamos 'index: true' para garantir que a HomePage sempre abra na raiz
      { index: true, element: <HomePage /> },
      
      { path: "produtos", element: <ProductsPage /> },
      { path: "produto/:id", element: <ProductDetailPage /> },
      { path: "carrinho", element: <CartPage /> },
      
      // 2. Cadastramos TANTO "checkout" QUANTO "pagamento" apontando para a mesma página. 
      // Assim, independente de qual botão você clique no seu teste, ele nunca dará 404.
      { path: "checkout", element: <CheckoutPage /> }, 
      { path: "pagamento", element: <CheckoutPage /> }, 
      
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