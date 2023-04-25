import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/stylesComponents/StyledProduct"
import { useRouter } from "next/router"

export default function Product(){
    const {query } = useRouter()
    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, sed nostrum! Ea deserunt veritatis, necessitatibus quis eveniet quam dolore consectetur, fugiat laboriosam iure quisquam. Facilis consequuntur error blanditiis voluptate unde!</p>

                <button type="button">Comprar agora</button>
            </ProductDetails>
           
        </ProductContainer>
    )
}