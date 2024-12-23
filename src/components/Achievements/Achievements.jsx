import React, { useEffect, useState } from "react";
import "./Achievements.css";
import "../base.css";

const Achievement = ({ number, title, description, color }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 2000; 
        const increment = number / (duration / 16); 

        const counter = setInterval(() => {
        start += increment;
        if (start >= number) {
            setCount(number);
            clearInterval(counter);
        } else {
            setCount(Math.ceil(start));
        }
        }, 16); 

        return () => clearInterval(counter);
    }, [number]);

    return (
        <div className="achievement">
            <h3 style={{color:color}}>{count.toLocaleString()}+</h3>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    );
};

const Achievements = () => {
return (
    <section className="achievements">
        <h1>Our Achievements</h1>
        <div className="achievements-grid">
            <Achievement
                number={10000}
                title="Users"
                description="Empowering thousands with quick and easy access to medications."
                color="#23B574"
            />
            <Achievement
                number={50}
                title="Machines"
                description="Strategically placed across Lebanon to serve communities 24/7."
                color="#00A99E"
            />
            <Achievement
                number={250000}
                title="Products"
                description="Delivering essentials when and where they're needed most."
                color="#29AAE3"
            />
        </div>
    </section>
);
};

export default Achievements;
