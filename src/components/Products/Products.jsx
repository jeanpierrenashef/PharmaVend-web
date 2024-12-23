import React from "react";
import "./Products.css";

const Products = () => {
const products = [
    { id: 1, image: "../../Assets/ph1.png" },
    { id: 2, image: "../../Assets/ph2.png" },
    { id: 3, image: "../../Assets/ph3.png" },
    { id: 4, image: "../../Assets/ph4.png" },
    { id: 5, image: "../../Assets/ph5.png" },
    { id: 6, image: "../../Assets/ph6.png" },
    { id: 7, image: "../../Assets/ph7.png" },
    { id: 8, image: "../../Assets/ph8.png" },
    { id: 9, image: "../../Assets/ph9.png" },
];

return (
    <section className="products">
        <h1>Our Products</h1>
        <div className="products-container">
            {products.map((product) => (
            <div className="product-box" key={product.id}>
                <img src={product.image} alt={`Brand ${product.id}`} />
            </div>
            ))}
        </div>
    </section>
);
};

export default Products;
