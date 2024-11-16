import { Link } from "react-router-dom";
import { navLinks } from "../data";

export default function NavLinks() {
  return (
    <div className="space-x-6">
      {navLinks.map((link) => (
        <Link
          to={link.path}
          key={link.name}
          className="font-bold tracking-wide"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
