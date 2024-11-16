import { PageHeading, PageSubHeading } from "@/components/common/typography";
import { ComponentWrapper, GridWrapper } from "@/components/common/wrapper";
import ServicesCard from "./services-card";
import { services } from "../data";

export default function ShopOurServices() {
  return (
    <ComponentWrapper>
      <PageHeading>Our Services</PageHeading>
      <PageSubHeading>Your satisfaction is our priority.</PageSubHeading>
      <GridWrapper>
        {services.map((service) => (
          <ServicesCard key={service.title} service={service} />
        ))}
      </GridWrapper>
    </ComponentWrapper>
  );
}
