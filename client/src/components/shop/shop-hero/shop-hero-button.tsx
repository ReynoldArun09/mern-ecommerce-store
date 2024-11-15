import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ShopHeroButtons() {
  const navigate = useNavigate();
  return (
    <div className="py-4 space-x-4">
      <Button onClick={() => navigate("/shop/all")}>Shop Now</Button>
      <Button variant="outline">Browse Collections</Button>
    </div>
  );
}
