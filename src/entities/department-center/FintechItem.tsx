import Container from "@/shared/ui/Container";
import { Headline } from "@/shared/ui/Headline";
import { FintechItemCenter } from "./DepartmentCenter.t";

function FintechItem({
  sectionTitle,
  innerTitleOne,
  innerTitleThree,
  innerTitleThreeBold,
  innerTitleTwo,
  innerTitleThreeGrey,
  innerTitleTwoBold,
  innerTitleTwoGrey,
}: FintechItemCenter) {
  return (
    <section className="fintech-info">
      <Container>
        <div className="wrapper flex flex-col gap-6 md:gap-8 pt-24">
          <Headline size="sm" as="h5" className="text-gray-400 pb-2 ">
            {sectionTitle}
          </Headline>

          <div className="info-item border rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-28 p-6">
            <div className="first-part text-xl">{innerTitleOne}</div>

            <div className="second-part">
              {innerTitleTwo && <div className="title">{innerTitleTwo}</div>}

              {innerTitleTwoBold && (
                <div className="title-bold font-medium">
                  {innerTitleTwoBold}
                </div>
              )}

              {innerTitleTwoGrey && (
                <div className="title-grey text-gray-400">
                  {innerTitleTwoGrey}
                </div>
              )}
            </div>

            <div className="third-part">
              {innerTitleThree && (
                <div className="title">{innerTitleThree}</div>
              )}

              {innerTitleThreeBold && (
                <div className="title-bold font-medium">
                  {innerTitleThreeBold}
                </div>
              )}
              {innerTitleThreeGrey && (
                <div className="title-grey text-gray-400">
                  {innerTitleThreeGrey}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FintechItem;
