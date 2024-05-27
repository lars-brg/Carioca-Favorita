import Image from "next/image"
import { BrandList } from "../BrandList/BrandList"


const AboutUsSection = () => {
    const data = [
        {
            brandName: 'Natura',
            src: '/img/brandList/natura.svg'
        },
        {
            brandName: 'Natura Crer Pra Ver',
            src: '/img/brandList/crerPraVer.svg'
        },
        {
            brandName: 'Ekos',
            src: '/img/brandList/LogoEkos.svg'
        },
        {
            brandName: 'Nativa Spa',
            src: '/img/brandList/nativa.svg'
        },
        {
            brandName: 'O Boticário',
            src: '/img/brandList/oBoticario.svg'
        },
        {
            brandName: 'Cuide Se Bem',
            src: '/img/brandList/cuideSeBem.svg'
        }
    ]
    return (
        <div className="flex flex-col">

            <BrandList data={data} />

            <div id="about" className="flex flex-col lg:flex-row bg-left bg-no-repeat w-full h-full bg-beigeBase px-10 md:px-24 pb-24" style={{ backgroundImage: "url('/img/aboutUs/lapaAboutUs.svg')" }}>
                <div className="relative">
                    <Image
                        className="object-cover"
                        src="/img/aboutUs/tagAboutUs.svg"
                        alt="tag"
                        width={2000}
                        height={700}
                    />
                </div>
                <div className="flex flex-col justify-center gap-10">
                    <h1 className="font-fraunces text-5xl font-semibold text-greenBase">
                        ISSO É O QUE NOS TORNA A FAVORITA
                    </h1>
                    <div className="border border-orange-600 w-12"></div>
                    <h1 className="font-fraunces font-semibold text-3xl text-greenBase ">
                        Quem somos nós?
                    </h1>
                    <p className="font-montserrat text-base font-normal text-greenBase ">
                        Nosso sonho carioca começou na paixão pelos cuidados diários e o compromisso com a beleza que vem de dentro para fora.
                        Nossa missão vai além de simplesmente fornecer produtos de higiene e beleza; estamos aqui para promover uma cultura de autocuidado e amor próprio.
                        Além dos cuidados diários, também nos dedicamos a celebrar momentos especiais da vida. Desde perfumes delicados até presentes encantadores para datas comemorativas, estamos aqui para ajudar a tornar cada ocasião ainda mais memorável.
                        Porque acreditamos que o amor deve ser compartilhado, não apenas entre nós mesmos, mas também com aqueles ao nosso redor.
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row w-full">
                <Image
                    src="/img/aboutUs/mosaico-left.svg"
                    alt="tag"
                    layout="responsive"
                    width={500}
                    height={300}
                    className="object-cover"
                />
                <Image
                    src="/img/aboutUs/mosaico-right.svg"
                    alt="tag"
                    layout="responsive"
                    width={500}
                    height={300}
                    className="object-cover"
                />
            </div>
        </div>

    )
}

export default AboutUsSection