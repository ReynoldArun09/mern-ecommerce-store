import { PageDescription } from "@/components/common/typography";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

interface ServicesCardProps {
  title: string;
  icon: JSX.Element;
  description: string;
}

export default function ServicesCard({
  service,
}: {
  service: ServicesCardProps;
}) {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>{service.icon}</CardTitle>
        <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
        <CardDescription>
          <PageDescription size={"sm"}>{service.description}</PageDescription>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
