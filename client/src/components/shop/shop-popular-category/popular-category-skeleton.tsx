import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function PopularCategorySkeleton() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-32 h-4" />
        </CardTitle>
        <CardDescription>
          <div className="flex gap-2 py-4">
            <Skeleton className="w-6 h-4" />
            <Skeleton className="w-16 h-4" />
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
