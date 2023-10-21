"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Dropdown from "@/app/Components/Dropdown/Dropdown";
import OverviewSection from "../../Components/OverviewSection";
import SpecificationSection from "../../Components/SpecificationSection.js";
import FAQSection from "../../Components/FAQSection.js";
import { FocusButton } from "@/app/Components/Buttons/Buttons";
import ProductDetailsSection from "@/app/Components/ProductDetailsSection/ProductDetailsSection";

export default function SubCategory({ params }) {
    const subCategory = params.subCategory;

    const ListItem = ({ item }) => <li className="font-normal text-[135x] list-disc pt-3">{item}</li>;

    const sections = ["Overview", "Specification", "FAQs"];

    const [activeSection, setActiveSection] = useState(0);

    const [renderSection, setRenderSection] = useState(0);

    useEffect(() => {
        let section;
        switch (activeSection) {
            case 0:
                section = <OverviewSection />;
                break;

            case 1:
                section = <SpecificationSection />;
                break;

            case 2:
                section = <FAQSection />;
                break;

            default:
                section = <OverviewSection />;
                break;
        }

        setRenderSection(section);
    }, [activeSection]);

    return (
        <>
            <ProductDetailsSection page="subCategory" subCategory={subCategory} />

            <section className="w-full px-12 mt-16 mb-10">
                <div className="flex flex-row mb-6 border-b border-neutral-300 pb-3">
                    {sections.map((el, index) => (
                        <div className="mr-5" onClick={() => setActiveSection(index)} key={index}>
                            <button className={`${index !== activeSection && "hover:text-neutral-900 text-neutral-400"} font-medium text-[18px] group transition duration-300`}>
                                {el}
                                <span
                                    className={`origin-right block max-w-0 ${
                                        index === activeSection ? "max-w-full" : "group-hover:max-w-full"
                                    } transition-all duration-500 h-0.5 bg-[#c74338] w-[27px]`}
                                ></span>
                            </button>
                        </div>
                    ))}
                </div>
                {renderSection}
            </section>
        </>
    );
}
