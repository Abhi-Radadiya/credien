import Image from "next/image";
import React from "react";
import dashImage from "../../Assests/dash.svg";
import Accordian from "./Accordian";

export default function FAQSection() {
    const FAQs = [
        {
            question: "1) How do I get started making business cards online?",
            answer: `Don't worry - we make it easy. First, choose your corners and quantity. Then, if you click "Browse designs," you'll be taken to a gallery of pre-designed templates. Or, if you already have a custom business card design you want to use, click "Upload design." And if you have any questions, don't hesitate to contact us.`,
        },
        {
            question: "2) What size are standard business cards? And how thick are they?",
            answer: `Standard business cards are 3.5 "x 2" (8.9 cm x 5.1 cm), and thickness varies on the type of paper stock selected. Please check the "Specs & Templates" tab on the page for details.`,
        },
        {
            question: "3) Is there an extra fee for printing on the back of the cards?",
            answer: `We offer grayscale and colour options for backside business card printing. If you choose the colour option, there will be an extra fee.`,
        },
    ];

    return (
        <>
            <h2 className="w-fit mb-5">
                <div className="relative font-bold text-2xl">
                    Frequently Asked Questions
                    <span className="h-0.5 w-8 bg-[#d83333] absolute right-0 bottom-0" />
                </div>
            </h2>

            {FAQs.map((el, index) => (
                <Accordian {...el} key={index} index={index} />
            ))}
        </>
    );
}
