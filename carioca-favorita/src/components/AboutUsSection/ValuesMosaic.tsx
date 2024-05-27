import Image from "next/image"

const ValuesMosaic = () => {
    return (
        <div className="w-full relative mt-0 h-96">
            <Image
                // className="object-cover" // Usando Tailwind CSS para o ajuste da imagem
                src="/img/aboutUs/mosaico.svg"
                alt="tag"
                // width={1000} // Definindo largura e altura para o contêiner da imagem
                // height={300}
                layout="fill" // Faz com que a imagem preencha o contêiner pai
            />
        </div>
    )
}

export default ValuesMosaic