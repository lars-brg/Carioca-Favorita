import Carousel from "./Carousel";


const CarouselSection: React.FC = () => {
  const images = [
    "/img/carousel/banner-1.svg",
    "/img/carousel/banner-2.svg",
    "/img/carousel/banner-3.svg",
  ];

  return (
    <div >
      <Carousel images={images}/>
    </div>
  );
};

export default CarouselSection;
