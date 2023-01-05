import Image from "next/image";
import styled, { css } from "styled-components";
import Harry from "../public/images/Harry.png";
import Testimonial from "../public/images/testimonial.svg";

const Testimonials = () => {
  return (
    <Section>
      <Wrapper left>
        <Quote cite="Harry Willson">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel
          pellentesque est. Curabitur at odio sit amet libero vulputate
          efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa,
          faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus
          fringilla finibus.
        </Quote>
        <AuthorContainer>
          <AuthorImage src={Harry} alt="" />
          <AuthorDetails>
            <Name>Harry Wilson</Name>
            <Title>Property Owner</Title>
          </AuthorDetails>
        </AuthorContainer>

        <Dots>
          <Dot active/>
          <Dot />
          <Dot />
        </Dots>
      </Wrapper>
      <Wrapper>
        <TestimonialImage src={Testimonial} alt="Testimonial" />
      </Wrapper>
    </Section>
  );
};

export default Testimonials;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 4em;
  font-family: "Inter";
  font-style: normal;
  background: rgba(244, 81, 30, 0.07);
  margin-bottom: 2em;
`;

const Wrapper = styled.div<{ left?: true }>`
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex: 1;
  ${(props) =>
    props.left &&
    css`
      padding-left: 5em;
    `}
`;

const Quote = styled.blockquote`
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;
  max-width: 635px;

`;

const AuthorContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
  /* margin-left: 6em; */
`;

const AuthorImage = styled(Image)``;

const TestimonialImage = styled(Image)`
  max-width: 638px;
  align-self: flex-end;
`;

const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  font-feature-settings: "salt" on, "liga" off;
  color: #f4511e;
`;

const Title = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  font-feature-settings: "salt" on, "liga" off;
  color: #18191f;
`;

const Dots = styled.span`
  display: flex;
  gap: 5px;
  margin-top: 3em;
`;

const Dot = styled.span<{active?: true}>`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: #d9dbe1;

    ${(props) =>
    props.active &&
    css`
      background: #F4511E;
    `}
`;
