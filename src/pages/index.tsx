import Image from "next/image";
import { ContainerHome, Product } from "../styles/stylesComponents/StyledHome";

import { CAMISETAS } from "../utils/camisetas";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
export default function Home() {
  const [ refKeenSlide ] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48
    },
    
  })
  return (
    <ContainerHome ref={refKeenSlide} className="keen-slider">
      {CAMISETAS.map((index) => {
        return (
          <Product key={index.id} className="keen-slider__slide">
            <Image src={index.src} width={520} height={480} alt="" />

            <footer>
              <strong>{index.name}</strong>
              <span>R$ {index.price}</span>
            </footer>
          </Product>
        );
      })}
    </ContainerHome>
  );
}
