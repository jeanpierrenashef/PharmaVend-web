import React from "react";
import "./Choose.css";
import "../base.css";

const WhyChooseUs = () => {
const services = [
    {
        id: 1,
        icon: require("../../Assets/b2b.png"), 
        title: "Convenience",
        description:
        "Find the nearest machine through our app and access medications anytime.",
    },
    {
        id: 2,
        icon: require("../../Assets/identity.png"), 
        title: "Innovation",
        description:
        "Seamless integration of robotics and IoT for a futuristic experience.",
    },
    {
        id: 3,
        icon: require("../../Assets/3d.png"), 
        title: "Community Centric",
        description:
        "Designed to address healthcare challenges and empower individuals.",
    },
];

return (
    <section className="flex column solutions">
        <section className="flex column solutions-text">
            <h1>
            Why Choose Us?
            </h1>
            <h4>
            Our expertise spans across branding, advertising, and user experience
            design, offering tailored solutions to elevate your business and
            engage your audience effectively.
            </h4>
        </section>
        <div className="flex row service-containers">
            {services.map((service) => (
            <div className="flex column card" key={service.id}>
                <img src={service.icon} alt={service.title} />
                <h2>{service.title}</h2>
                <h4>{service.description}</h4>
            </div>
            ))}
        </div>
    </section>
);
};

export default WhyChooseUs;
