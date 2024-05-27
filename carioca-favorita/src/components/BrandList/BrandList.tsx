import Image from "next/image";

type BrandItem = {
    brandName: string;
    src: string;
};

type BrandListProps = {
    data: BrandItem[];
};

export const BrandList: React.FC<BrandListProps> = ({ data }) => {
    return (
        <div className="flex flex-col md:flex-row w-full bg-greenBase justify-center md:justify-around p-10 items-center">
            {data.map((item, index) => (
                <div key={index} className="flex w-32 h-32">
                    <Image
                        alt={item.brandName}
                        src={item.src}
                        width={128}
                        height={128}
                        layout="responsive"
                    />
                </div>
            ))}
        </div>
    );
};
