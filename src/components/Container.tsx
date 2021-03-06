import React, { FC } from "react";
import styled from "styled-components";

const Container: FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Container;

const Wrapper = styled.div`
  width: 90%;
  min-width: 325px;
  margin: 0 auto;
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
`;
