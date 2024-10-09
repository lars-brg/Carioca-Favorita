import Image from "next/image";
import starCarioca from "/public/icons/star-carioca.svg";

type BenefitsList = {
    words: string[];
};

const BenefitsStrip: React.FC<BenefitsList> = ({ words }) => {
    return (
        <div className="py-5 px-12 border-y-2 border-orangeBase flex  w-full text-center  justify-around gap-24 font-fraunces font-semibold text-greenBase text-base overflow-x-auto">
            {/* <Image src={starCarioca} alt="star" className="w-6 fill-greenBase"/>
            

            {words.map((word, index) => (
                <div key={index} className="flex flex-row items-center justify-center w-full ">
                    <div className="">{word}</div>
                    <div className="b"><Image src={starCarioca} alt="star" className="w-6 fill-greenBase " /></div>
                    {index === words.length - 1 && (
                        <div className="">{word}</div>
                    )}
                </div>
            ))} */}

            {words.map((word, index) => (
                <div className="w-auto" key={index}>{word}</div>
            ))}
        </div>
    );
};

export default BenefitsStrip;
