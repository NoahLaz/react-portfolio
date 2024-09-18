import styled from "styled-components";
import Educations from "./Educations/Educations";
import Experiences from "./Experiences/Expertiences";
import Skills from "./skills/Skills";
import { resume } from "../../../data/data";
import { Container, Heading } from "../../ui/UI";
const Wrapper = styled.div``;

const SummaryWrapper = styled.div``;

const Summary = styled.p`
  color: ${(props) => props.theme.text};
  letter-spacing: 1px;
  font-size: 14px;
`;

const EduContainer = styled.div`
  gap: 30px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h3`
  text-align: left;
  font-weight: bold;
  font-size: 22px;
  padding: 15px 0;
  color: ${(props) => props.theme.text};
`;

const About = () => {
  return (
    <Container>
      <Heading>About Me</Heading>
      <Wrapper>
        <SummaryWrapper>
          <Title style={{ textAlign: "left" }}>Summary</Title>
          <Summary>{resume.summary}</Summary>
        </SummaryWrapper>
        <EduContainer>
          <Educations />
          <Experiences />
        </EduContainer>
        <Skills />
      </Wrapper>
    </Container>
  );
};

export default About;
