import react from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import Logo from "../assets/rc-logo.png";

const Navbar = () => {
    return (
        <Flex
        as="nav"
        align="center"
        justify="space-between"
        padding="1.5rem"
        bg="white.500"
        color="#209B9A"
      >
        <Box
        ml={"6.5rem"}
        >
          <a href="/"><img src={Logo} alt="logo" /></a>
        </Box>
        <Spacer />
        <Box
        mr={"6.5rem"}
        fontSize={"24px"}
        >
          <a href="/" style={{ marginRight: "3.5rem" }}>INFORMAÇÕES</a>
          <a href="/" style={{ marginRight: "3.5rem" }}>REGISTROS ONDEFOI</a>
          <a href="/" style={{ marginRight: "3.5rem" }}>ASSISTÊNCIA SOFIA</a>
          <a href="/">COMUNIDADE</a>
        </Box>
      </Flex>
      
    )
};

export default Navbar;