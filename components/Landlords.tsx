import styled from "styled-components";
import { StyledTitle } from "../styles/Textstyles";
import { Section } from "./Section";
import { IoIosBed } from "react-icons/io";
import Image from "next/image";
import Tap from '../public/icons/Tap.svg';
import Area from '../public/icons/Area.svg';

const Landlords = () => {
  return (
    <Wrapper>
      <Heading>list of properties</Heading>
      <Button>View all properties</Button>
      <Container>
        {Array.from({ length: 6 }, (v, i) => i).map((v) => {
          return (
            <Cards key={v}>
              <ImageWrapper></ImageWrapper>
              <DetailsContainer>
                <SmallTitle>
                  2578 Folsom street, san francisco, CA, 94110
                </SmallTitle>
                <FadedText>Private Room</FadedText>
                <Price>$1200/Month</Price>
              </DetailsContainer>
              <SubDetailsContainer>
                <SubDetail>
                  <IoIosBed size={20} /> 4
                </SubDetail>
                <SubDetail>
                  <Image src={Tap} alt=''/> 2
                </SubDetail>
                <SubDetail>
                  <Image src={Area} alt=''/> 2
                </SubDetail>
              </SubDetailsContainer>
            </Cards>
          );
        })}
      </Container>

      <PaginationContainer>
        <PaginationPrimaryButtons>
          First
        </PaginationPrimaryButtons>
        <PaginationSecondaryButtons>
          1
        </PaginationSecondaryButtons>
        <PaginationSecondaryButtons>
          2
        </PaginationSecondaryButtons>
        <PaginationSecondaryButtons>
          3
        </PaginationSecondaryButtons>
        <PaginationPrimaryButtons>
          Next
        </PaginationPrimaryButtons>

      </PaginationContainer>
    </Wrapper>
  );
};

export default Landlords;

const Wrapper = styled(Section)`
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Button = styled.button`
  /* flex: 1 */
  align-self: center;
`;

const Heading = styled(StyledTitle)`
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 4em 2em;
  outline: 2px solid red;
  padding: 1em 0;
  justify-content: center;
`;

const DetailText = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  text-transform: capitalize;
  letter-spacing: -0.642075px;
`;

const SmallTitle = styled(DetailText)`
  font-weight: 700;
  font-size: 23px;
  line-height: 30px;
`;

const FadedText = styled(DetailText)`
  top: calc(50% - 23px / 2 + 343px);
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #818181;
  margin-top: 1em;
`;

const Price = styled(DetailText)`
  font-weight: 700;
  font-size: 25.552px;
  line-height: 33px;
  color: #f4511e;
`;

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 358px;
  min-height: 521px;
  box-shadow: 0px 34.0693px 36.1986px rgba(0, 0, 0, 0.133714);
  border-radius: 26.6166px;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  background: grey;
  flex: 2;
  height: 50%;
`;

const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 2em 2em 1em;
  flex-direction: column;
  align-items: flex-start;
`;

const SubDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e4e4e4;
  background:  #e4e4e4;
  background-clip: border-box;
  gap: 1px;
`;

const SubDetail = styled(DetailText)`
  font-weight: 700;
  font-size: 18.0993px;
  line-height: 24px;
  letter-spacing: -0.454803px;
  color: #000000;
  display: flex;
  align-items: center;
  gap: 10.42px;
  background: white;
  width: 100%;
  height: 100%;
  padding: 1em 2em;
`;

const PaginationContainer = styled.div`
display: flex;
border-radius: 8px;
overflow:hidden;
margin: 5em auto;
border: 1px solid #E8E8E8;
`

const PaginationButton = styled.button`
font-family: 'Montserrat';
font-size: 16px;
line-height: 24px;
text-align: center;
font-style: normal;
font-weight: 700;
color: #F4511E;

:hover {
  cursor: pointer;
}

`

const PaginationPrimaryButtons = styled(PaginationButton)`
padding: 25px;
width: 90px;
height: 74px;
background: #FFFFFF;
border: 1px solid #E8E8E8;

:hover{
  background:  transparent;
  color: #BDBDBD;
}

`

const PaginationSecondaryButtons = styled(PaginationButton)`
padding: 25px 20px;
width: 47px;
height: 74px;
background: #FFFFFF;
border: 1px solid #E9E9E9;
color: #F4511E;

:hover{
  background:  #F4511E;
  color: #FFFFFF;
}
`
