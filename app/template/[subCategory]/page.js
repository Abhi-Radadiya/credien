"use client";

import React, { useState } from "react";
import image from "../../Assests/card1.png";
import TemplatesSection from "./Components/TemplatesSection";
import TemplateOverviewSection from "./Components/TemplateOverviewSection";

export default function Template({ params }) {
    const subCategory = params.subCategory;

    const [activeCategory, setActiveCategory] = useState("Agriculture");

    const templateCategories = [
        { category: "Classic", subCategory: "Agriculture", template: [image] },
        { category: "Classic", subCategory: "Machanics", template: [image, image, image] },
        { category: "Classic", subCategory: "Finance", template: [image, image, image] },
        { category: "Classic", subCategory: "Construction", template: [image, image, image] },
        { category: "Standerd", subCategory: "Food", template: [image, image, image] },
        { category: "Standerd", subCategory: "Manufacturing", template: [image, image, image] },
        { category: "Standerd", subCategory: "Information technology", template: [image, image, image] },
        { category: "Business", subCategory: "Retails & sales", template: [image, image, image] },
        { category: "Business", subCategory: "Travel", template: [image, image, image] },
    ];

    const [showTemplateOverview, setShowTemplateOverview] = useState(false);

    return (
        <>
            <div className="px-12 mt-1">
                <div className="relative w-fit my-9">
                    <h1 className="heading-h1-medium-desktop">Standard Visiting Cards</h1>
                    <span className="h-0.5 w-10 bg-[#d83333] absolute right-0 bottom-0"></span>
                </div>
                <div className="flex flex-row">
                    <div className="w-full max-w-[250px]">
                        <div className="sticky top-[100px]">
                            <h3 className="font-bold text-xl pb-4">Categories</h3>

                            {templateCategories.map((el, index) => (
                                <div key={index} className="group pt-1 font-medium text-base transition duration-300 w-fit" onClick={() => setActiveCategory(el.subCategory)}>
                                    <div className={`-mb-4 ${activeCategory === el.subCategory ? "text-black" : " group-hover:text-black text-neutral-500"}`}>{el.subCategory}</div>
                                    <div
                                        className={`inline-flex transition-all duration-500 bg-black w-full h-[1px] ${
                                            activeCategory === el.subCategory ? "max-w-full" : "max-w-0 group-hover:max-w-full"
                                        }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <TemplatesSection templates={templateCategories.filter((el) => el.category === "Classic")} setShowTemplateOverview={setShowTemplateOverview} />
                </div>
            </div>

            {showTemplateOverview && <TemplateOverviewSection setShowTemplateOverview={setShowTemplateOverview} id={showTemplateOverview} />}
        </>
    );
}
