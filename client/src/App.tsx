import { Navigate, Route, Routes } from "react-router-dom";
import ShopLayout from "./layouts/shop-layout";
import AuthLayout from "./layouts/auth-layout";
import HomePage from "./pages/shop/home-page";
import SignUpPage from "./pages/auth/sign-up-page";
import SignInPage from "./pages/auth/sign-in-page";
import CartPage from "./pages/shop/cart-page";
import ShopPage from "./pages/shop/shop-page";
import CategoryPage from "./pages/shop/category-page";
import ProductPage from "./pages/shop/product-page";
import { useVerifyAuthApi } from "./services/auth/auth-queries";
import LoadingSpinner from "./components/common/loading-spinner";
import PurchaseSuccessPage from "./pages/shop/purchase-success-page";
import PurchaseCancelPage from "./pages/shop/purchase-cancel-page";

export default function App() {
  const { data: isAuthenticated, isLoading } = useVerifyAuthApi();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="product/:id" element={<ProductPage />} />
      </Route>
      <Route
        path="/auth"
        element={!isAuthenticated ? <AuthLayout /> : <Navigate to="/" />}
      >
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-in" element={<SignInPage />} />
      </Route>
      <Route
        path="/purchase-success"
        element={
          isAuthenticated ? (
            <PurchaseSuccessPage />
          ) : (
            <Navigate to="/auth/sign-in" />
          )
        }
      />
      <Route
        path="/purchase-cancel"
        element={
          isAuthenticated ? (
            <PurchaseCancelPage />
          ) : (
            <Navigate to="/auth/sign-in" />
          )
        }
      />
    </Routes>
  );
}
