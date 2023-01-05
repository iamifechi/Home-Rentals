import styled from "styled-components";
import { StyledTitle } from "../styles/Textstyles";
import { Section } from "./Section";

const Tenants = () => {
  return (
    <Wrapper>
      <Heading>minimum living cost takes care of everything</Heading>
      <Container>
        <ImageWrapper></ImageWrapper>

        <OffersContainer></OffersContainer>
      </Container>
    </Wrapper>
  );
};

export default Tenants;

const Wrapper = styled(Section)`
  align-items: flex-start;
  flex-wrap: wrap;
`;

const Heading = styled(StyledTitle)`
  /* width: 100%; */
`;

const Container = styled.div`
 display: flex;
 width: 100%;
 flex-wrap: wrap;
 gap: 1em;
`;

const ImageWrapper = styled.div`
  width: 512px;
  height: 50vh;
  outline: 2px solid green;
  flex: 2;
`;

const OffersContainer = styled.div`
  height: 50vh;
  outline: 2px solid grey;
  flex: 3;
`;

const Offers = styled.div``;
