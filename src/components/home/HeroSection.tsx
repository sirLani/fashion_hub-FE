import React from "react";
import { Box, Text, Wrapper } from "../base";
import { styled } from "styled-components";
import PrimaryButton from "../base/Button";
import Image_1 from "../../assets/image-1.svg";
import Image_2 from "../../assets/image-2.svg";
import Image_3 from "../../assets/image-3.svg";
import Image_4 from "../../assets/image-4.svg";
import Image_5 from "../../assets/image-5.svg";
import Image_6 from "../../assets/image-6.svg";
import Image_7 from "../../assets/image-7.svg";

export const HeroSection = () => {
  return (
    <Wrapper>
      <Box
        display="flex"
        top="5rem"
        justifyContent="center"
        alignItems="center"
      >
        <LeftSide>
          <Heading>Quality apparel without Worrying about quality</Heading>
          <Text size="18px">
            Worried about not getting what you ordered from your tailor?
            <br /> checkout a list of our creative designers
          </Text>
          <Box top="2rem">
            <PrimaryButton>Browse our collection</PrimaryButton>
          </Box>
        </LeftSide>
        <RightSide>
          <ImageContainer>
            <ImageBox>
              <Image src={Image_1} alt="cloth" />
            </ImageBox>
            <ImageBox>
              <Image src={Image_2} alt="cloth" />
            </ImageBox>
          </ImageContainer>
          <ImageContainer>
            <ImageBox className="mid">
              <Image src={Image_3} alt="cloth" />
            </ImageBox>
            <ImageBox className="mid">
              <Image src={Image_4} alt="cloth" />
            </ImageBox>
            <ImageBox className="mid">
              <Image src={Image_5} alt="cloth" />
            </ImageBox>
          </ImageContainer>
          <ImageContainer>
            <ImageBox>
              <Image src={Image_6} alt="cloth" />
            </ImageBox>
            <ImageBox>
              <Image src={Image_7} alt="cloth" />
            </ImageBox>
          </ImageContainer>
        </RightSide>
      </Box>
    </Wrapper>
  );
};

const LeftSide = styled.div`
  widht: 50%;
  display: flex;
  flex-direction: column;
`;

const RightSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-family: Playfair Display;
  font-size: 56px;
  font-weight: 500;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;

  &:last-child {
    margin-right: 0px;
  }
`;
const ImageBox = styled.div`
  width: 186px;
  height: 320px;
  margin-bottom: 6px;
  overflow: hidden;

  &.mid {
    width: 186px;
    height: 278px;
    overflow: hidden;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
  display: block;
  transform: transform 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
