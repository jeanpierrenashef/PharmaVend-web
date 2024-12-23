import React, { useRef } from "react";
import "./Products.css";
import "../base.css";

const Products = () => {
    const productsContainerRef = useRef(null);

    const scrollLeft = () => {
        productsContainerRef.current.scrollBy({
        left: -200, 
        behavior: "smooth",
        });
    };

    const scrollRight = () => {
        productsContainerRef.current.scrollBy({
        left: 200, 
        behavior: "smooth",
        });
    };

    const products = Array.from({ length: 9 }, (_, index) => ({
        id: index + 1,
        image: require(`../../Assets/ph${index + 1}.png`),
    }));

    return (
        <section className="flex column products">
            <h1>Our Products</h1>
            <h4>Our vending machines are stocked with a wide range of products from globally renowned pharmaceutical brands. From essential medications to healthcare supplies, these machines provide quick and easy access to trusted names such as Pfizer, GSK, AstraZeneca, and more. Designed to meet diverse healthcare needs, our machines ensure reliability and convenience around the clock, making high-quality products accessible to everyone.</h4>
            <div className="scroll-buttons">
                <button className="scroll-btn left" onClick={scrollLeft}>
                &#8592;
                </button>
                <div className="products-container" ref={productsContainerRef}>
                {products.map((product) => (
                    <div className="product-box" key={product.id}>
                    <img src={product.image} alt={`Brand ${product.id}`} />
                    </div>
                ))}
                </div>
                <button className="scroll-btn right" onClick={scrollRight}>
                &#8594;
                </button>
            </div>
        </section>
    );
};

export default Products;
