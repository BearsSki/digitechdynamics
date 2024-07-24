import { curve } from "../assets";
import DigiTechLogo from "../assets/hero/DigiTechLogo.jpg";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { useRef } from "react";
import CompanyLogos from "./CompanyLogos";
import Type from "./animations/Type";
import Title from "./Title";
import RingPulse from "./animations/RingPulse"; // Import the new component
import { useEffect, useState } from 'react';

const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
};

const Hero = () => {
  const parallaxRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width: 768px)'); // Detect if the screen width is at least 768px

  return (
    <Section
      className="flex items-center justify-center h-screen pt-[8rem] md:pt-[10rem] pb-[10rem] md:pb-[22rem]" // Adjusted padding for mobile and desktop
      customPaddings
      id="hero"
    >
      <div className="container relative text-center" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            <span className="inline-block relative">
              <Title className="mb-10 md:justify-center text-6xl md:text-7xl text-white"> {/* Adjust font size for mobile */}
                {"DigiTech"}
              </Title>
              <img
                src={curve}
                className="absolute top-full left-1/2 transform -translate-x-1/2 xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          {isDesktop && (
            <p className="body-2 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8 text-base md:text-lg"> {/* Adjust font size for mobile */}
              <Type />
            </p>
          )}
          <Button href="/contact" white>
            Click to Book A Call Now
          </Button>
        </div>

        <RingPulse parallaxRef={parallaxRef} />
      </div>
      <BottomLine />
    </Section>
  );
};

export default Hero;
