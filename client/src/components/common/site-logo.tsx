import { ShoppingBagIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function SiteLogo() {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <ShoppingBagIcon />
      <h1 className="hidden font-bold tracking-widest uppercase sm:block">
        One Stop
      </h1>
    </Link>
  );
}
