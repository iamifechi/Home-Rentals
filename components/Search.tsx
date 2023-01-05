import styled, { css } from "styled-components";
import { StyledHeading, StyledTitle } from "../styles/Textstyles";

interface ICardProps {
  xlg?: true;
  lg?: true;
  mid?: true;
  small?: true;
}

const Search = () => {
  return (
    <Section>
      <Wrapper cards>
        <Card xlg>
          <ImageText>Choose Your Own Roommate</ImageText>
        </Card>
        <Card lg>
          <ImageText>7-Day Happiness Guaranteed</ImageText>
        </Card>
        <Card mid>
          <ImageText>Flexible Leases</ImageText>
        </Card>
        <Card small>
          <ImageText>Monthly House Cleaning</ImageText>
        </Card>
      </Wrapper>
      <Wrapper>
        <Heading>Flexibility and options to suit your lifestyle.</Heading>
        <Text>
          You need it? We got it. We make finding your next home easy,
          comfortable, and simple. From our happiness guarantee to our selective
          roommate finder option. We provide you the flexibility that you most
          desire.
        </Text>
        <Button>Search Rooms</Button>
      </Wrapper>
    </Section>
  );
};

export default Search;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5em;
  flex-wrap: wrap;
  gap: 1%;
  /* gap: 1em; */
`;

const Wrapper = styled.div<{ cards?: true }>`
  outline: 1px solid red;
  /* max-width:600px; */
  width: 49%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.8em;

  ${(props) =>
    props.cards &&
    css`
      justify-content: flex-start;
      align-items: flex-end;
    `}
`;

const ImageText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin: 2em auto;
  visibility: hidden;
  /* display: none; */
`;

const Card = styled.div<ICardProps>`
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  transition: 2s ease;

  ${(props) =>
    props.xlg
      ? css`
          width: 338px;
          height: 356px;
          order: 4;
        `
      : props.lg
      ? css`
          width: 270px;
          height: 270px;
          order: 2;
        `
      : props.mid
      ? css`
          width: 250px;
          height: 334px;
          order: 1;
        `
      : props.small &&
        css`
          width: 212px;
          height: 285px;
          order: 3;
          align-self: flex-start;
        `}

  :hover {
    ${ImageText} {
      transition: 2s ease;
      visibility: visible;
    }
  }
`;

const Heading = styled(StyledTitle)``;

const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  font-feature-settings: "salt" on, "liga" off;
  color: #18191f;
`;

const Button = styled.button`
  width: 185px;
  height: 63px;
  background: #f4511e;
  border-radius: 13px;
  border: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  font-feature-settings: "salt" on, "liga" off;
  color: #ffffff;
  :hover {
    cursor: pointer;
  }
`;
