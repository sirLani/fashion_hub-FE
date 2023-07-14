import React from "react";
import { Box, Heading1, Input, Wrapper } from "../components/base";
import { styled } from "styled-components";
import PrimaryButton from "../components/base/Button";

export const Register = () => {
  return (
    <Wrapper>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Heading>Join Us</Heading>
        <Box
          top="1rem"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          <Form>
            <InputContainer>
              <Input
                width="320px"
                placeholder="Email"
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </InputContainer>
            <InputContainer>
              <Input
                width="320px"
                placeholder="First Name"
                id="first_name"
                name="first_name"
                type="text"
                autoComplete="first name"
                required
              />
            </InputContainer>
            <InputContainer>
              <Input
                width="320px"
                placeholder="Last Name"
                id="last_name"
                name="last_name"
                type="text"
                autoComplete="first name"
                required
              />
            </InputContainer>
            <InputContainer>
              <Input
                width="320px"
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </InputContainer>
            <InputContainer>
              <Input
                width="320px"
                placeholder="Address"
                id="address"
                name="address"
                type="text"
                autoComplete="address"
                required
              />
            </InputContainer>
            <Box top="2rem">
              <PrimaryButton>Join</PrimaryButton>
            </Box>
          </Form>
        </Box>
      </Box>
    </Wrapper>
  );
};

const Heading = styled(Heading1)`
  margin-top: 6rem;
`;

const InputContainer = styled.div`
  margin-bottom: 14px;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
