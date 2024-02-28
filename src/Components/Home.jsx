import React from "react";
import Navbar from "../Components/Navbar";
import { Image } from "@chakra-ui/react";
import Retangulo from "../assets/bg.png";
import MaeTerra from "../assets/mae-terra.svg";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Image
        position="absolute"
        top={0}
        left={0}
        src={Retangulo}
        alt="retangulo"
        zIndex={-1}
      />
      <Image src={MaeTerra} alt="mae terra" zIndex={-1} position="absolute"
        top={0} ml={"8rem"} w={"90%"}/>
    </div>
  );
};

export default Home;
