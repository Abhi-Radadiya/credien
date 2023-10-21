import React from "react";
import ProductDetailsSection from "../Components/ProductDetailsSection/ProductDetailsSection";
import { FocusButton } from "../Components/Buttons/Buttons";

export default function page() {
    return (
        <>
            <div className="">
                <section className="px-12 flex flex-row">
                    <div className="w-[626px] h-[626px] border border-neutral-500 rounded-lg" />
                    <div className="pl-9 pt-7">
                        <h1 className="font-bold text-4xl mb-2">Classic agriculture card</h1>
                        <div className="text-neutral-600 text-xl mb-6">Experience the timeless elegance of our classic agriculture visiting card</div>
                        <span className="pr-2 text-xl font-medium">₹1,299</span>
                        <span className="text-neutral-700">for</span>
                        <span className="pl-2 text-xl font-medium">10,000 pcs.</span>
                        <div className="mt-3">
                            <FocusButton label="Confirm order" />
                        </div>
                    </div>
                </section>
                <ProductDetailsSection />
            </div>
        </>
    );
}
