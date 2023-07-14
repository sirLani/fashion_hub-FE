import React from "react";
import { Box, Heading1, Input, Wrapper } from "../components/base";
import { styled } from "styled-components";
import PrimaryButton from "../components/base/Button";

export const Login = () => {
  return (
    <Wrapper>
      <Box
        display="flex"
        justifyContent="center"
        width="100%"
        flexDirection="column"
        alignItems="center"
      >
        <Heading>Login</Heading>
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
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </InputContainer>
            <Box top="2rem">
              <PrimaryButton>Sign In</PrimaryButton>
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
