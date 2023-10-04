import Link from "next/link";

export const FocusButton = (props) => {
    const { href, label, tag } = props;

    return (
        <>
            <Link href={href ?? "/"} className="relative group bg-black w-full justify-center flex rounded-xl min-h-[50px]">
                <button className="bg-transparent rounded-lg">
                    <div className="text-white text-xl font-bold mb-1 w-fit transition duration-300">
                        {label}
                        <span className="origin-right block max-w-0 group-hover:max-w-full transition-all duration-500 h-[1px] bg-white w-full" />
                    </div>
                    {tag && <div className="text-white text-xs">{tag}</div>}
                </button>
            </Link>
        </>
    );
};
