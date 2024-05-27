import BenefitsStrip from "../BenefitsStrip/BenefitsStrip"
import { CardCategories } from "../CardCategories/CardCategories";

export const ProductsSection = () => {
  const data = [
    {
      src: "/img/products/cardImage1.jpg",
      title: "Hidratantes e Loções",
      description: "proporcionam uma pele hidratada, nutrida e protegida, promovendo uma aparência saudável e radiante."
    },
    {
      src: "/img/products/cardImage2.jpg",
      title: "Perfumaria",
      description: "combinando notas de topo, coração e fundo, oferecem uma experiência olfativa evolutiva ao longo do dia, trazendo frescor e sofisticação."
    },
    {
      src: "/img/products/cardImage3.jpg",
      title: "Sabonetes e aromatizantes",
      description: "removem impurezas e mantém a pele limpa. formulados com ingredientes nutritivos, deixam a pele suave e delicadamente perfumada."
    },
    {
      src: "/img/products/cardImage4.jpg",
      title: "Skincare",
      description: "incluem limpeza, hidratação, mantêm a pele saudável e radiante, ajudando a restaurar a saúde da pele e proporcionando uma aparência luminosa e revitalizada."
    }
  ]
  return (
    <div id="categories" className="flex flex-col items-center h-full py-12 bg-beigeBase">
      <h1 className="font-fraunces text-xl md:text-5xl font-semibold text-greenBase text-center leading-tight px-6">PEQUENOS ATOS DE CUIDADO, GRANDES <br></br>TRANSFORMAÇÕES, SÓ COM A GENTE</h1>
      <p className="font-montserrat text-base md:text-lg font-light text-greenBase text-center py-7 px-6"> conheça a nossa exclusiva linha de produtos, cuidadosamente selecionados para atender às <br></br>suas necessidades e proporcionar a melhor experiência de cuidado e beleza.</p>
      <BenefitsStrip words={['hidratação profunda', 'purificação', 'nutrição da pele', 'rejuvenescimento', 'revitalização']}></BenefitsStrip>
      <div className="flex flex-row items-start justify-center w-full mt-10 flex-wrap gap-8">

        {data.map((item, index) => (
          <CardCategories key={index} src={item.src} title={item.title} description={item.description} />
        ))}

      </div>
    </div>
  );
}