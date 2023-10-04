import React from "react";
import { InputField } from "@/app/Components/InputField/InputField";
import { FocusButton } from "@/app/Components/Buttons/Buttons";

const ColorDot = (props) => {
    const { color } = props;

    return <div className="w-8 h-8 rounded-full" style={{ backgroundColor: color }} />;
};

const LeftSection = () => {
    return (
        <>
            <section className="h-full bg-neutral-100 flex flex-col px-16">
                <div className="h-[90vh] flex">
                    <div className="h-[500px] w-[650px] border border-neutral-500 my-auto" />
                </div>

                <div className="mx-auto border bg-neutral-300 border-neutral-300 rounded-xl py-3 px-3">
                    <span className="bg-shades-50 px-3 py-1 rounded-lg font-semibold">Front</span>
                    <span className="ml-3">Back</span>
                </div>
            </section>
        </>
    );
};

const RightSectin = (props) => {
    const { id, setShowTemplateOverview } = props;

    const availableColors = ["#0a3fa8", "#d48f87", "#d1d1d1", "#d6b6b4", "#a1d6a2"];

    const detailsData = ["title", "tagline", "mobile number", "email", "adress"];

    return (
        <>
            <section className="px-6 w-full">
                <span className="text-sm cursor-pointer" onClick={() => setShowTemplateOverview(false)}>
                    Cancel
                </span>

                <div className="my-5">
                    <span className="text-lg tracking-wide font-bold">₹199</span>
                    <span className="text-lg tracking-wide text-neutral-600 px-1">for</span>
                    <span className="text-lg tracking-wide font-bold">1000 pcs.</span>
                </div>

                <span className="font-medium">Available Colors</span>

                <div className="pt-2 flex flex-row">
                    {availableColors.map((el, index) => (
                        <div className="pr-3" key={index}>
                            <ColorDot color={el} />
                        </div>
                    ))}
                </div>

                <div className="mt-5 w-full max-w-[300px]">
                    {detailsData.map((el, index) => (
                        <div className="mb-4" key={index}>
                            <InputField label={`Enter ${el}`} placeholder={`Enter ${el} here`} />
                        </div>
                    ))}
                </div>

                <div className="fixed bottom-4 max-w-[300px] w-full">
                    <div className="mb-3 pt-8 max-w-[300px]">
                        <FocusButton label="Customize card" href={`/studio/${id}`} />
                    </div>

                    <div className="mb-3 max-w-[300px]">
                        <FocusButton label="Buy now" href="/cart" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default function TemplateOverviewSection(props) {
    const { id, setShowTemplateOverview } = props;
    return (
        <>
            <div className="fixed bg-black bg-opacity-50 top-0 w-full h-full flex z-[101]">
                <div className="w-[1300px] bg-white fixed right-0 h-screen">
                    <div className="flex flex-row h-full">
                        <LeftSection />

                        <RightSectin id={id} setShowTemplateOverview={setShowTemplateOverview} />
                    </div>
                </div>
            </div>
        </>
    );
}
