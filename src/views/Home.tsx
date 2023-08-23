import React from "react";
import { Box, Wrapper } from "../components/base";
import { HeroSection, PopularProducts } from "../components/home";

const Home = () => {
  return (
    <Box $display="flex" $flexdirection="column">
      <Wrapper>
        <HeroSection />
      </Wrapper>
      <PopularProducts />
    </Box>
  );
};

export default Home;
