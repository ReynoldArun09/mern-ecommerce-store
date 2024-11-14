import {
  ComponentHeading,
  ComponentSubHeading,
} from "@/components/common/typography";
import { ComponentWrapper, GridWrapper } from "@/components/common/wrappers";
import { services } from "./data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function ShopOurServices() {
  return (
    <ComponentWrapper>
      <ComponentHeading content="Our Services" />
      <ComponentSubHeading content="Your satisfaction is our priority." />
      <GridWrapper>
        {services?.map((service) => (
          <Card className="cursor-pointer" key={service.title}>
            <CardHeader>
              <CardTitle>{service.icon}</CardTitle>
              <CardTitle className="text-xl font-bold">
                {service.title}
              </CardTitle>
              <CardDescription className="text-sm font-bold">
                {service.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </GridWrapper>
    </ComponentWrapper>
  );
}
