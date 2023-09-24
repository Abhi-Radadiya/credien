"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import visitingCard from "../../Assests/visitingCard.png";
import starLogo from "../../Assests/star.svg";
import SubcategoryCard from "../Components/SubcategoryCard";
import Link from "next/link";

export default function Category({ params }) {
    const category = params.category;

    const [subCategories, setSubCategories] = useState([]);

    const cardDetails = {
        standardCard: [
            { name: "Anti", image: visitingCard, price: 399, stars: 4.5, reviews: 3000, gsm: 250 },
            { name: "Terable", image: visitingCard, price: 499, stars: 4.5, reviews: 256, gsm: 250 },
            { name: "Terable Lamination", image: visitingCard, price: 599, stars: 4.5, reviews: 100, gsm: 250 },
            { name: "Matt lamination", image: visitingCard, price: 699, stars: 4.5, reviews: 10000, gsm: 350 },
        ],
        classicCard: [
            { name: "Matt", image: visitingCard, price: 399, stars: 4.5, reviews: 3000, gsm: 400 },
            { name: "Matt UV", image: visitingCard, price: 699, stars: 4.5, reviews: 10000, gsm: 400 },
        ],
        businessCard: [
            { name: "Matt", image: visitingCard, price: 399, stars: 4.5, reviews: 3000, gsm: 450 },
            { name: "Velvet", image: visitingCard, price: 699, stars: 4.5, reviews: 10000, gsm: 400 },
            { name: "Velvet UV", image: visitingCard, price: 699, stars: 4.5, reviews: 10000, gsm: 400 },
            { name: "Velvet UV & Gold", image: visitingCard, price: 699, stars: 4.5, reviews: 10000, gsm: 400 },
        ],
    };

    useEffect(() => {
        let subCategories;

        switch (category) {
            case "standard-cards":
                subCategories = cardDetails.standardCard;
                break;

            case "classic-cards":
                subCategories = cardDetails.classicCard;
                break;

            case "business-cards":
                subCategories = cardDetails.businessCard;
                break;

            default:
                break;
        }

        setSubCategories(subCategories);
    }, []);

    const heading = category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    return (
        <>
            <div className="w-full px-12 pt-9">
                <span className="font-bold text-2xl">{heading}</span>
                <div className="items-center w-full grid-cols-2 grid gap-4 mt-6">
                    {subCategories.map((el, index) => (
                        <Link key={index} href={category + "/" + el.name.toLowerCase()}>
                            <SubcategoryCard {...el} />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
