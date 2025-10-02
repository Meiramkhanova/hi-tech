import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import OrderTitle from "@/shared/ui/OrderTitle";
import { CenterTitleOrderItems } from "../../entities/department-center/DepartmentCenter.t";

function CenterTitleOrderItemsSection({
  title,
  order_items,
}: CenterTitleOrderItems) {
  return (
    <section className="center-title-items">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {title}
          </Headline>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {order_items.map((item) => (
              <OrderTitle key={item.id} title={item.title} order={item.order} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CenterTitleOrderItemsSection;
