import Section from "./Section";
import Title from "./Title";
import Button from "./Button";
import PlaceholderImage from "../assets/hero/DigiTechLogo.jpg"; // Add a placeholder image in your assets
import { previousWorkData } from "../constants";
import { Gradient } from "./design/PreviousWork";
import Logo from "./animations/Logo"; // Import the new Logo component

const PreviousWork = () => {
    return (
        <Section id="previous-work">
            <div className="container">
                <Title className="mb-10 md:justify-center text-4xl md:text-6xl text-white">
                    {"Our Work"}
                </Title> {/* Changed text color to white */}

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {previousWorkData.map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <Logo src={item.image || PlaceholderImage} />
                            <h4 className="h4 mb-2">{item.clientName}</h4>
                            <p className="body-2 mb-4 text-center">{item.description}</p>
                            <Button
                                href={item.link}
                                white
                                className="px-6 py-2"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Visit Client Website
                            </Button>
                        </div>
                    ))}
                </div>
                <Gradient />
            </div>
            <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                <Button href="/previouswork">Book A Call Now</Button>
            </div>
        </Section>
    );
};

export default PreviousWork;
