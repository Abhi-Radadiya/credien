import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategoriesSection(props) {
    const { categories } = props;

    return (
        <>
            <section style={{ backgroundImage: `linear-gradient(#eeffff, #fff)` }}>
                <div className="flex flex-row px-12">
                    {categories?.map((el, index) => (
                        <div className="w-full mr-8 last:mr-0" key={index}>
                            <CategoryCard {...el} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
