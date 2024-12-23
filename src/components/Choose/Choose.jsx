import React from "react";
import "./Choose.css";

const WhyChooseUs = () => {
const services = [
    {
    id: 1,
    icon: "../../Assets/b2b.png",
    title: "Convenience",
    description:
        "Find the nearest machine through our app and access medications anytime.",
    },
    {
    id: 2,
    icon: "../../Assets/identity.png",
    title: "Innovation",
    description:
        "Seamless integration of robotics and IoT for a futuristic experience.",
    },
    {
    id: 3,
    icon:"../../Assets/3d.png",
    title: "Community Centric",
    description:
        "Designed to address healthcare challenges and empower individuals.",
    },
];

return (
    <section className="flex column solutions">
        <section className="flex column solutions-text">
            <h1>
            Why <span className="highlight">Choose Us?</span>
            </h1>
            <p>
            Our expertise spans across branding, advertising, and user experience
            design, offering tailored solutions to elevate your business and
            engage your audience effectively.
            </p>
        </section>
        <div className="flex row service-containers">
            {services.map((service) => (
            <div className="flex column card" key={service.id}>
                <img src={service.icon} alt={service.title} />
                <h4>{service.title}</h4>
                <p>{service.description}</p>
            </div>
            ))}
        </div>
    </section>
);
};

export default WhyChooseUs;
