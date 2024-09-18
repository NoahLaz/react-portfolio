import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 20px;
`;

const Icon = styled.i`
  cursor: pointer;
  font-size: 50px;
  color: ${(props) => props.theme.accent};
  -webkit-text-stroke: 1px black;
  &:hover {
    color: ${(props) => props.theme.secondary};
    transform: scale(1.2);
  }
`;
const Socials = () => {
  return (
    <Container>
      <Icon className="fa-brands fa-linkedin"></Icon>
      <Icon className="fa-brands fa-instagram"></Icon>
      <Icon className="fa-brands fa-github"></Icon>
    </Container>
  );
};

export default Socials;
