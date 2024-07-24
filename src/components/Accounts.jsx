import Button from "./Button";
import Section from "./Section";
import Title from "./Title";
import { Gradient } from "./design/Roadmap";

const Accounts = () => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10 md:mb-40">
      <Title className="mb-10 md:justify-center text-4xl md:text-6xl text-white">{"client portal"}</Title>

      <div className="flex justify-center items-center md:pb-[7rem]">
        <div className="relative flex flex-col items-center mt-6">
          <div className="relative z-1 flex flex-col items-center">
            <div className="flex justify-center gap-10">
              <Button href="/new" className="text-2xl lg:text-4xl py-4 px-12 lg:py-6.5 lg:px-24">Sign Up</Button>
              <Button href="/login" white className="text-2xl lg:text-4xl py-4 px-12 lg:py-6.5 lg:px-24">
                Log In
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Gradient />
    </div>
  </Section>
);

export default Accounts;
