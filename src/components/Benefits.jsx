import React from "react";
import { benefits } from "../constants";
import Title from "./Title";
import Section from "./Section";
import Button from "./Button";  // Ensure this import is correct
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2 mb-10 mt-20"> {/* Added margin-top here */}
        <Title className="mb-10 md:justify-center text-4xl md:text-6xl text-white">{"Our Services"}</Title>
        <div className="flex flex-wrap gap-10 mb-24">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[12rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.textHome}</p>
              </div>
              <Button className="hidden lg:flex" href={`/services`}>
                Explore More
              </Button>

              {item.light && <GradientLight />}

              <div className="absolute inset-0.5 bg-n-8" style={{ clipPath: "url(#benefits)" }}>
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
