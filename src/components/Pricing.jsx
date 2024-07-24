import Section from "./Section";
import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";
import Title from "./Title";

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <Title className="mb-10 md:justify-center text-4xl md:text-6xl text-white">
          {"Software Product List"}
        </Title>

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="mb-10 md:justify-center text-4xl md:text-6xl text-white">
          {"Software Product will be listed here soon"}
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
