import React from "react";
import Banner from "./Components/Banner";
import CategoriesSection from "./Components/CategoriesSection";
import visitingCard from "../../Assests/visitingCard.png";

export default function Banners() {
    const banners = [
        {
            bgGradient: "#edfefe, #eeffff",
            title: "Visiting Card",
            price: 999,
            categories: [
                { type: "Standard", price: 499, image: visitingCard },
                { type: "Classic", price: 999, image: visitingCard },
                { type: "Business", price: 1199, image: visitingCard },
            ],
        },
        { bgGradient: "#fffefd, #fff2da", title: "Envalope", price: 999 },
        { bgGradient: "#ffffff, #f2edff", title: "Cover letter", price: 999 },
        { bgGradient: "#ffffff, #dfeeeb", title: "Logo", price: 999 },
    ];

    return (
        <>
            {banners.map((el, index) => (
                <React.Fragment key={index}>
                    <Banner bgGradient={el.bgGradient} title={el.title} price={el.price} index={index} />
                    <CategoriesSection categories={el.categories} />
                </React.Fragment>
            ))}
        </>
    );
}
