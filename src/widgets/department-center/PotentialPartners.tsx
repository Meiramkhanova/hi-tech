import { PotentialPartnersOfCenter } from "@/entities/department-center/DepartmentCenter.t";
import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import OrderTitle from "@/shared/ui/OrderTitle";

function PotentialPartners({ potential_partners }: PotentialPartnersOfCenter) {
  return (
    <section className="potential-partnets">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            Основные направления деятельности
          </Headline>

          <div className="partners grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {potential_partners.map((partner) => (
              <OrderTitle
                key={partner.id}
                order={partner.order}
                title={partner.title}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default PotentialPartners;
