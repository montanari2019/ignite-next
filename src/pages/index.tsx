import Image from "next/image";
import { ContainerHome, Product } from "../styles/stylesComponents/StyledHome";

import { CAMISETAS } from "../utils/camisetas";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { GetServerSideProps } from "next";
import { stripe } from "../lib/strripe";
import Stripe from "stripe";


interface HomeProps {
  products: {
    id:string,
    name:string,
    imageUrl:string,
    price:number
  }[]
}

export default function Home({ products }:HomeProps) {
  const [ refKeenSlide ] = useKeenSlider({
    slides:{
      perView: 3,
      spacing: 48
    },
    
  })
  return (
    <ContainerHome ref={refKeenSlide} className="keen-slider">
      {products.map((index) => {
        return (
          <Product key={index.id} className="keen-slider__slide">
            <Image src={index.imageUrl} width={520} height={480} alt="" />

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

export const getServerSideProps: GetServerSideProps = async () =>{
  const response = await stripe.products.list({
    expand:['data.default_price']
  })

  const products = response.data.map((product)=>{

    const price = product.default_price as Stripe.Price
    return{
      id: product.id,
      name: product.name,
      imageUrl:product.images[0],
      price: price.unit_amount! / 100,

    }
  })

  console.log(response)
  
  return {
    props:{
      products
    }
  }
}
