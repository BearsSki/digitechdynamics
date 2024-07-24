import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { GradientLight } from "./design/ServicePage";
import ClipPath from "../assets/svg/ClipPath";
import Title from "./Title"
import { Gradient } from "./design/Roadmap";

const ServicePage = () => {
  const { id } = useParams();
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (id) {
      const service = benefits.find((item) => item.id === id);
      setSelectedService(service);
    }
  }, [id]);

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Title className="mb-10 md:justify-center text-4xl md:text-6xl text-white">{"Our Services"}</Title>
        
        <div className="flex flex-col gap-10 mb-10">
          {benefits.map((item) => (
            <div key={item.id} className="w-full service-item relative">
              <div
                className="block relative p-4 bg-no-repeat bg-[length:100%_100%] rounded-lg"
                style={{
                  backgroundImage: `url(${item.backgroundUrl})`,
                }}
              >
                <div className="relative z-2 flex items-center justify-center p-4 bg-n-8 rounded-lg pointer-events-none h-[5rem]">
                  <h5 className="h5 mb-0 text-white text-center">{item.title}</h5>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8 rounded-lg"
                  style={{ clipPath: "url(#benefits)" }}
                >
                </div>

                <ClipPath />
              </div>
              
              <div className="relative z-2 flex flex-col p-6 mt-4 w-full">
                <p className="body-2 mb-6 text-n-3">{item.textService}</p>
              </div>
            </div>
          ))}
        </div>

        <Gradient />
      </div>
    </Section>
  );
};

export default ServicePage;