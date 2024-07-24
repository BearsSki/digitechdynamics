import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import TagLine from "./Tagline";
import Title from "./Title";
import { team } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";

const Team = () => (
  <Section className="overflow-hidden" id="team">
    <div className="container md:pb-10">
      <Title className="mb-10 md:justify-center text-4xl md:text-6xl text-white">{"Team Member's"}</Title>

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {team.map((item) => {
          const status = item.status;

          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 w-full h-full">
                  <img
                    className="w-full h-full object-cover opacity-20"
                    src={grid}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <TagLine>{item.date}</TagLine>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="mb-10 flex justify-center">
                    <div className="w-48 h-48">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={item.imageUrl}
                        alt={item.title}
                      />
                    </div>
                  </div>
                  <h4 className="h4 mb-4 text-center">{item.title}</h4>
                  <p className="body-2 text-n-4 text-center">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
        <Button href="/contact">Book A Call Now</Button>
      </div>
    </div>
  </Section>
);

export default Team;
