import { BoxIcon } from "@/components/common/icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ProductcountResponse } from "@/services/types";
import { Link } from "react-router-dom";

interface PopularCategoryCardProps {
  details: ProductcountResponse;
}

export default function PopularCategoryCard({
  details,
}: PopularCategoryCardProps) {
  return (
    <Link to={`/category?cat=${details.category}`}>
      <Card className="font-bold cursor-pointer" key={details.category}>
        <CardHeader>
          <CardTitle className="text-xl tracking-wider">
            {details.category}
          </CardTitle>
          <CardDescription className="text-sm">
            <div className="flex items-center gap-2 py-4">
              <BoxIcon />
              <span className="text-md">
                {details.productCount || 0} Products
              </span>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
