import React from "react";
import { Box, Heading1, Text, Wrapper } from "./base";
import { styled } from "styled-components";

export const Footer = () => {
  return (
    <Box
      backgroundColor="#547790"
      paddingTop="2.5rem"
      top="4rem"
      paddingBottom="4rem"
    >
      <Wrapper>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
        >
          <Box>
            <Heading>FASHIONHUB</Heading>
            <Box width="15rem">
              <FooterText>
                Worried about not getting what you ordered from your tailor?
                checkout a list of our creative designers
              </FooterText>
            </Box>
          </Box>
          <Box>
            <Heading2>Sell</Heading2>
            <FooterList>Sell on Faxica</FooterList>
            <FooterList>Teams</FooterList>
            <FooterList>Forum</FooterList>
            <FooterList>Affiliate</FooterList>
            <FooterList>Creators</FooterList>
          </Box>
          <Box>
            <Heading2>About</Heading2>
            <FooterList>Policies</FooterList>
            <FooterList>Investors</FooterList>
            <FooterList>Forums</FooterList>
          </Box>
          <Box>
            <Heading2>Help</Heading2>
            <FooterList>Help Center</FooterList>
            <FooterList>Privacy settings</FooterList>
            <FooterList>Forums</FooterList>
            <FooterList>Size guide</FooterList>
          </Box>
          <Box>
            <Heading2>Contact</Heading2>
          </Box>
        </Box>
      </Wrapper>
    </Box>
  );
};

const Heading = styled(Heading1)`
  color: #ffffff;
`;

const FooterText = styled(Text)`
  color: #ffffff;
`;

const Heading2 = styled(Heading1)`
  color: #ffffff;
  font-weight: 500;
  font-size: 22px;
  margin-top: 28px;
`;

const FooterList = styled(Text)`
  color: #ffffff;
  margin-top: 1rem;
`;
