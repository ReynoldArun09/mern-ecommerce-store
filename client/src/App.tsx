import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/shop/home-page";
import ShopLayout from "./layouts/shop-layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ShopLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
