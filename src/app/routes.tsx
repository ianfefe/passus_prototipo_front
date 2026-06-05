// 1. Altere a importação para incluir o createHashRouter
import { createHashRouter } from "react-router"; 
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ProductsPage } from "./components/ProductsPage";
import { AboutPage } from "./components/AboutPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { DirectCheckoutPage } from "./components/DirectCheckoutPage";
import { CartPage } from "./components/CartPage";
import { CheckoutPage } from "./components/CheckoutPage";
import { OtherProjectsPage } from "./components/OtherProjectsPage";
import { JoinPage } from "./components/JoinPage";
import { LoginPage } from "./components/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { AdminProductsPage } from "./components/AdminProductsPage";
import { AdminProductDetailPage } from "./components/AdminProductDetailPage";
import { AdminAnalyticsPage } from "./components/AdminAnalyticsPage";

// 2. Mude o nome da função aqui para createHashRouter
export const router = createHashRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "produtos", Component: ProductsPage },
      { path: "sobre", Component: AboutPage },
      { path: "produto/:id", Component: ProductDetailPage },
      { path: "checkout-direto/:id", Component: DirectCheckoutPage },
      { path: "carrinho", Component: CartPage },
      { path: "pagamento", Component: CheckoutPage },
      { path: "outros-projetos", Component: OtherProjectsPage },
      { path: "participar", Component: JoinPage },
      { path: "login", Component: LoginPage },
      { path: "cadastro", Component: RegisterPage },
      { path: "admin/produtos", Component: AdminProductsPage },
      { path: "admin/produtos/:id", Component: AdminProductDetailPage },
      { path: "admin/vendas", Component: AdminAnalyticsPage }
    ],
  },
]);