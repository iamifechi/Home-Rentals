import Link from "next/link";
import styled from "styled-components"
import { StyledHeading } from "../styles/Textstyles";

const Footer = () => {
    return (
        <Section>
            <LinkWrapper>
            <StyledLink href='#'>About us</StyledLink>
            <StyledLink href='#'>Contact us</StyledLink>
            <StyledLink href='#'>Help</StyledLink>
            <StyledLink href='#'>Privacy Policy</StyledLink>
            <StyledLink href='#'>Disclaimer</StyledLink>
            </LinkWrapper>
            <Copyright>
                Copyright © 2020 Minimumlivingcost. All rights reserved
            </Copyright>
        </Section>
    )
}

export default Footer;


const Section = styled.footer`
  width: 100%;
  /* height: 50vh; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 5em;
  font-family: "Inter";
  font-style: normal;
  /* margin-bottom: 2em; */
  padding: 2em 5em;
  /* background: black; */
`;


const LinkWrapper = styled.div`
display: flex;
gap: 2em;
flex: 2;
`

const StyledLink = styled(Link)`
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-transform: uppercase;
color: #0A142F;
`

const Copyright = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 17px;
text-align: right;
color: #0A142F;

mix-blend-mode: normal;
opacity: 0.5;
flex: 1;

`

const Heading = styled(StyledHeading)`
max-width: 584px;
`