"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div id='news' className="relative w-full overflow-hidden mt-16 lg:mt-8">
            <div className="hidden lg:block absolute z-20 top-1/3 ml-72 w-2/5">
                <div className="font-fraunces text-3xl xl:text-6xl font-normal text-greenBase">
                    TRATE O <b>SEU CORPO </b>
                    COMO ELE <b>MERECE</b>
                </div>
                <div className="font-montserrat text-lg xl:text-xl font-normal text-greenBase py-3.5">
                    Separamos a melhor seleção de produtos exclusivamente para você, valorizamos muito o seu bem-estar.
                </div>
                <div>
                    <Link href="#contact">
                        <Button className="font-montserrat font-semibold rounded-full bg-orangeBase text-beigeBase text-lg px-12 py-7">
                            seja sua melhor versão
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((src, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <div className="w-full relative mt-0">
                            <Image
                                src={src}
                                alt={`Slide ${index}`}
                                layout="responsive"
                                width={1000} // Defina a largura original da imagem
                                height={300} // Defina a altura original da imagem
                                className="object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prevSlide} className=" text-greenBase p-2 rounded-full"><MdKeyboardArrowLeft size={100} /></button>
                <button onClick={nextSlide} className=" text-greenBase p-2 rounded-full"><MdKeyboardArrowRight size={100} /></button>
            </div>

            <div className="hidden absolute bottom-12 left-0 right-0 xl:flex justify-center p-2 gap-24">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-greenBase' : 'border border-greenBase'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
