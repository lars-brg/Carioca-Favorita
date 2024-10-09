import { LuInstagram, LuMail, LuPhone } from "react-icons/lu"

const ContactSection = () => {
    return (
        <div id="contact" className="flex flex-col md:flex-row h-full">
            <div className="bg-greenBase w-full md:w-2/5 flex flex-col gap-10 pt-24 px-32 bg-left bg-no-repeat bg-cover" style={{ backgroundImage: "url('/img/contacts/lapa.svg')" }}>
                <h1 className="font-fraunces text-xl md:text-5xl font-semibold text-beigeBase leading-snug">ADORARÍAMOS FALAR COM VOCÊ!</h1>
                <div className="border border-yellowBase w-12">

                </div>
            </div>
            <div className="bg-beigeBase w-full md:w-3/5 flex flex-col gap-10 py-10 md:py-48 px-10 md:px-24">
                <p className="font-montserrat text-base font-normal text-greenBase ">
                    A Carioca Favorita seleciona cuidadosamente cada produto para garantir que você receba o melhor em cuidados com a pele.
                    Trabalhamos com as marcas mais renomadas e seguimos as tendências mais recentes para que você sempre tenha acesso ao que há de mais moderno no mercado de cosméticos.
                    <br/>Convidamos você a nos seguir em nossas redes sociais para ficar por dentro das novidades, promoções e dicas de beleza exclusivas:
                </p>
                <div className="border border-orangeBase w-full"></div>
                <h1 className="font-fraunces font-semibold text-3xl text-greenBase ">
                    Nos encontre em
                </h1>
                <div className="flex flex-row gap-8 items-center">
                    <div className="bg-greenBase p-6 text-2xl text-beigeBase"><LuInstagram /></div>
                    <p className="font-montserrat text-base font-normal text-greenBase ">
                        @carioca.favorita
                    </p>
                </div>
                <div className="flex flex-row gap-8 items-center">
                    <div className="bg-greenBase p-6 text-2xl text-beigeBase"><LuPhone /></div>
                    <p className="font-montserrat text-base font-normal text-greenBase ">
                        4002-8922
                    </p>
                </div>
                <div className="flex flex-row gap-8 items-center">
                    <div className="bg-greenBase p-6 text-2xl text-beigeBase"><LuMail /></div>
                    <p className="font-montserrat text-base font-normal text-greenBase ">
                        cariocafavorita@gmail.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactSection