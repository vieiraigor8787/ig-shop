import Image from "next/image";
import tshirt1 from "../assets/t-shirt1.png";
import tshirt2 from "../assets/t-shirt2.png";
import tshirt3 from "../assets/t-shirt3.png";

import { HomeContainer, Product } from "../styles/pages/home";

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshirt1} width={520} height={480} alt="camiseta 1" />
        <footer>
          <strong>Camiseta Beyond Limits</strong>
          <span>79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={tshirt2} width={520} height={480} alt="camiseta 2" />
        <footer>
          <strong>Camiseta Astronauta</strong>
          <span>59,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
