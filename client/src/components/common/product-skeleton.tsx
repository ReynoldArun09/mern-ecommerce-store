import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export default function ProductSkeleton() {
  return (
    <Card>
      <div>
        <Skeleton className="w-full h-64" />
      </div>
      <CardHeader className="py-5">
        <div className="flex items-center justify-between space-y-4">
          <Skeleton className="w-2/3 h-6" />
          <Skeleton className="w-6 h-6" />
        </div>
        <Skeleton className="w-12 h-6" />
      </CardHeader>
      <CardContent className="py-4 pt-0">
        <Skeleton className="w-full h-4" />
      </CardContent>
      <CardFooter className="py-4 pt-0">
        <Skeleton className="w-full h-8" />
      </CardFooter>
    </Card>
  );
}
