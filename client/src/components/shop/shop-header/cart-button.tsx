import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";

export default function CartButtons() {
  return (
    <div className="flex items-center justify-between w-full space-x-2 xs:w-auto xs:justify-normal">
      <div className="flex items-center">
        <Button variant="outline" size="icon" className="rounded-r-none size-8">
          <MinusIcon className="size-3" aria-hidden="true" />
          <span className="sr-only">Remove one item</span>
        </Button>
        <Input
          type="number"
          min="0"
          className="h-8 rounded-none w-14 border-x-0"
        />
        <Button variant="outline" size="icon" className="rounded-l-none size-8">
          <PlusIcon className="size-3" aria-hidden="true" />
          <span className="sr-only">Add one item</span>
        </Button>
      </div>
      <Button variant="outline" size="icon" className="size-8">
        <TrashIcon className="size-3" aria-hidden="true" />
        <span className="sr-only">Delete item</span>
      </Button>
    </div>
  );
}
