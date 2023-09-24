import React from "react";

export default function OverviewSection() {
    return (
        <>
            <div className="w-1/2">
                <h2 className="w-fit">
                    <span className="font-bold text-2xl">Your business is one of a kind.</span>
                    <div className="relative font-bold text-2xl">
                        Now your Visiting Card can be, too.
                        <span className="h-0.5 w-8 bg-[#d83333] absolute right-0 bottom-0"></span>
                    </div>
                </h2>
                <div className="mt-5">
                    <div className="text-lg mb-3">
                        With a fresh box of professional visiting cards comes <span className="font-semibold text-green-500">confidence</span> - the knowledge that you're prepared
                        for every
                        <span className="font-semibold text-green-500"> opportunity </span>that comes your way.
                    </div>
                    <div className="text-lg mb-3">
                        Whether you're making <span className="font-semibold text-green-500"> first impressions, </span>rewarding regulars with a loyalty card or giving satisfied
                        clients your contact info for next time, we're here to help you look and feel ready to impress.
                    </div>
                    <div className="text-lg">
                        As you design, we'll offer you a wide range of personalisation options - including paper stocks and finish options - that could work for your{" "}
                        <span className="font-semibold text-green-500"> style, business and budget. </span>Creative ways to use your visiting cards.
                    </div>
                    <div className="font-bold text-lg mt-3">Creative ways to use your visiting cards.</div>
                </div>
            </div>
        </>
    );
}
