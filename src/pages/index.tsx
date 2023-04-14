import Image from "next/image";
import { ContainerHome, Product } from "../styles/stylesComponents/StyledHome";

import { CAMISETAS } from "../utils/camisetas";

export default function Home() {
  return (
    <ContainerHome>
      {CAMISETAS.map((index) => {
        return (
          <Product key={index.id}>
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
