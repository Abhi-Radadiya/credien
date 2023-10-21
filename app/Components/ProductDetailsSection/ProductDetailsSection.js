import React from "react";
import { FocusButton } from "../Buttons/Buttons";
import Dropdown from "../Dropdown/Dropdown";
import Link from "next/link";

export default function ProductDetailsSection(props) {
    const { page, subCategory } = props;

    const ListItem = ({ item }) => <li className="font-normal text-[135x] list-disc pt-3">{item}</li>;

    return (
        <>
            <section className="w-full px-12 pt-9">
                <div className="flex flex-row">
                    <div className="h-[400px] w-[750px] mr-10 border border-neutral-300 rounded-xl" />
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

                        {page === "subCategory" && (
                            <>
                                <div className="my-3">
                                    <Dropdown selectedItem="Standard" label="Select corner type" menuItems={["Standard", "Rounded"]} />
                                </div>

                                <Dropdown
                                    placeholder="Please select quantity"
                                    label="Select quantity"
                                    menuItems={["1000 pcs. from ₹299", "1500 pcs. from ₹599", "2000 pcs. from ₹699"]}
                                />

                                <FocusButton label="Browse designs" tag="Choose one of our template" href={`/template/${subCategory}`} />
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
