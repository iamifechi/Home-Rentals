import styled from "styled-components"
import { StyledHeading } from "../styles/Textstyles";
import { Section } from "./Section";

const Hero = () => {
    return (
        <Section>
            <Wrapper>
                <Heading>
                    The most affortable place to stay in the san franciso bay area
                </Heading>
            </Wrapper>
            <Wrapper>

            </Wrapper>
        </Section>
    )
}

export default Hero;

const Wrapper = styled.div`
outline: 1px solid red;
width: 50%;
display: flex;
align-items: center;
`

const Heading = styled(StyledHeading)`
max-width: 584px;
`