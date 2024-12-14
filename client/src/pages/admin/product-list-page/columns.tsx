import { ProductType } from "@/services/types";
import { ColumnDef } from "@tanstack/react-table";
import OptionsMenu from "./options-menu";

export const columns: ColumnDef<ProductType>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "brand",
    header: "Brand",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const imageurl = row.getValue("image");

      return (
        <div className="text-right font-medium">
          <img
            src={(imageurl as string) || "/product-placeholder.webp"}
            className="h-12 w-16"
            alt={"product-img"}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: "Active",
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "isFeatured",
    header: "Featured",
  },
  {
    accessorKey: "targetAudience",
    header: "Target Audience",
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      return <OptionsMenu id={row.original._id} />;
    },
  },
];
