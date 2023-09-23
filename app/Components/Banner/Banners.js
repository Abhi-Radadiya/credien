import React from "react";
import Banner from "./Components/Banner";

export default function Banners() {
    const banners = [
        { bgGradientFrom: "#FFFFFF", bgGradientTo: "#d0fefe", title: "Visiting Card", price: 999 },
        { bgGradientFrom: "#fff1d6", bgGradientTo: "#FFFFFF", title: "Envalope", price: 999 },
        { bgGradientFrom: "#FFFFFF", bgGradientTo: "#dfeeeb", title: "Logo", price: 999 },
        { bgGradientFrom: "#ede8f9", bgGradientTo: "#FFFFFF", title: "Cover letter", price: 999 },
    ];

    return (
        <>
            {banners.map((el, index) => (
                <Banner {...el} index={index} />
            ))}
        </>
    );
}
