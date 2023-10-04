"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Dropdown from "@/app/Components/Dropdown/Dropdown";
import OverviewSection from "../../Components/OverviewSection";
import SpecificationSection from "../../Components/SpecificationSection.js";
import FAQSection from "../../Components/FAQSection.js";
import { FocusButton } from "@/app/Components/Buttons/Buttons";

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
            <section className="w-full px-12 pt-9">
                <div className="flex flex-row">
                    <div className="h-[400px] w-[750px] mr-10 border border-neutral-300 rounded-xl"></div>
                    <div className="max-w-[500px]">
                        <div className="relative -z-10 w-fit">
                            <span className="font-bold text-2xl">Anti Cards</span>
                            <span className="h-0.5 w-8 bg-[#d83333] absolute left-0 bottom-0"></span>
                        </div>
                        <p className="font-medium text-[18px] pt-3">Personalized cards with a professional look.</p>
                        <ul className="list-outside list-disc pl-5">
                            <ListItem item="4000+ design options available" />
                            <ListItem item="Standard glossy or matte paper included" />
                            <li className="font-normal text-[135x] list-disc pt-3">
                                Dimension shown on the design page includes bleed area (safety area), the final card size will be <span className="font-bold">8.9 cm x 5.1 cm</span>
                            </li>
                            <ListItem item="Stretch your design up to the Bleed area to avoid white borders appearing around your card. Keep all your information within the safety area." />
                            <ListItem item="Choose bold fonts size 10 and above when using white text" />
                            <li className="font-normal text-[135x] list-disc pt-3">
                                <span className="font-bold">Free delivery</span> all over Bharat with no hidden charges
                            </li>
                            <li className="font-normal text-[135x] list-disc pt-3">
                                Need help in designing? You can avail our
                                <Link className="pl-2 hover:tracking-wide underline underline-offset-4 font-bold cursor-pointer" href="/contact-us">
                                    Design Services
                                </Link>
                            </li>
                        </ul>

                        <div className="my-3">
                            <Dropdown selectedItem="Standard" label="Select corner type" menuItems={["Standard", "Rounded"]} />
                        </div>

                        <Dropdown placeholder="Please select quantity" label="Select quantity" menuItems={["1000 pcs. from ₹299", "1500 pcs. from ₹599", "2000 pcs. from ₹699"]} />

                        <FocusButton label="Browse designs" tag="Choose one of our template" href={`/template/${subCategory}`} />
                    </div>
                </div>
            </section>

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
