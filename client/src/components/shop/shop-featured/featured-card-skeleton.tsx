import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeaturedCardSkeleton() {
  return (
    <Card>
      <div>
        <Skeleton className="w-full h-64" />
      </div>
      <CardHeader className="py-5">
        <div className="flex space-y-4 justify-between items-center">
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
