import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useDeleteProductMutation,
  useDisableProductMutation,
  useToggleFeatureMutation,
} from "@/services/products/prod-mutation";
import { Ellipsis } from "lucide-react";

export default function OptionsMenu({ id }: { id: string }) {
  const { mutate: deleteProduct } = useDeleteProductMutation();
  const { mutate: toggleFeature } = useToggleFeatureMutation();
  const { mutate: disableProduct } = useDisableProductMutation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="size-8 p-0">
          <span className="sr-only">Open menu</span>
          <Ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => deleteProduct(id)}>
          Delete Product
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => disableProduct(id)}>
          Disable Product
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => toggleFeature(id)}>
          Toggle Feature
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
