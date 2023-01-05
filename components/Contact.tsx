import styled from "styled-components";
import { IoLocationSharp, IoLogoPinterest } from "react-icons/io5";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdRssFeed } from "react-icons/md";
import {
  AiFillPrinter,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineGooglePlus,
} from "react-icons/ai";

const Contact = () => {
  return (
    <Section>
      {/* <Wrapper> */}
      <Logo>Logo</Logo>

      {/* </Wrapper> */}
      <Wrapper>
        <ContactDetails>
          <IoLocationSharp />
          <ContactText>
            345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
          </ContactText>
        </ContactDetails>

        <ContactDetails>
          <BsTelephoneFill />
          <ContactText>(123) 456-7890</ContactText>
        </ContactDetails>

        <ContactDetails>
          <AiFillPrinter />
          <ContactText>(123) 456-7890</ContactText>
        </ContactDetails>

        <Socials>
          <AiFillFacebook />
          <AiOutlineTwitter />
          <FaLinkedinIn />
          <AiFillYoutube />
          <AiOutlineInstagram />
          <AiOutlineGooglePlus />
          <IoLogoPinterest />
          <MdRssFeed />
        </Socials>
      </Wrapper>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 5em;
  font-family: "Inter";
  font-style: normal;
  margin-bottom: 2em;
  padding: 2em 5em;
`;

const Wrapper = styled.div`
  flex: 1;
  padding: 0 5em;
`;

const Logo = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 70px;
  letter-spacing: -1px;
  text-transform: capitalize;
  color: #000000;
  flex: 1;
  padding: 0 5em;
`;

const ContactDetails = styled.div<{ full?: true }>``;

const ContactText = styled.p`
  font-family: "Assistant";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #0a142f;
`;

const Socials = styled.div``;
