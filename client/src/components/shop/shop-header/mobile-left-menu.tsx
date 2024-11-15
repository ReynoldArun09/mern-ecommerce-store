import SiteLogo from "@/components/common/site-logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustifyIcon } from "lucide-react";
import { navLinks } from "./data";
import { Link } from "react-router-dom";

export default function MobileLeftMenu() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustifyIcon />
        </SheetTrigger>
        <SheetContent side={"left"} className="w-1/2">
          <SheetHeader>
            <SheetTitle className="mt-5">
              <SiteLogo />
            </SheetTitle>
            <div className="flex flex-col pt-5 space-y-5 text-start">
              {navLinks.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  className="font-bold tracking-wide underline"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
