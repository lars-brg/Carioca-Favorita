import Image from "next/image";

type CardCategoriesProps = {
  src: string;
  title: string;
  description: string;
};

export const CardCategories: React.FC<CardCategoriesProps> = ({ src, title, description }) => {
  return (
    <div className="flex flex-col w-72">
      <div className=" relative w-full h-96"> {/* Ajustei para garantir que o container tenha a altura e largura desejadas */}
        <Image
          className="rounded-t-3xl"
          alt=""
          src={src}
          layout="fill" /* Faz a imagem preencher todo o container */
          objectFit="cover" /* Garante que a imagem preencha o container cortando as bordas */
          priority
        />
      </div>
      <p className="font-fraunces text-3xl font-semibold text-greenBase py-3 justify-start">{title}</p>
      <p className="font-montserrat text-base font-light text-greenBase justify-start text-justify">{description}</p>
    </div>
  );
};
