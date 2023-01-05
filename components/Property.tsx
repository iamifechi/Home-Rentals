import { HtmlProps } from "next/dist/shared/lib/html-context";
import { DetailedHTMLProps, HTMLProps, TextareaHTMLAttributes } from "react";
import styled, { css } from "styled-components";
import { StyledHeading, StyledSubtitle } from "../styles/Textstyles";

const Property = () => {
  return (
    <Section>
      <Heading>
        Your property with us and be Confident that Your Room will be Filled
        Out!
      </Heading>

      <Form>
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter Name" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="Address">Address</Label>
          <Input id="Address" type="text" placeholder="Enter Address" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="unit">Unit number</Label>
          <Input id="unit" type="text" placeholder="Enter Unit" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="city">City</Label>
          <Input id="city" type="text" placeholder="Enter City" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="state">State</Label>
          <Input id="state" type="text" placeholder="Enter State" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="room">Room type</Label>
          <Input id="room" type="text" placeholder="Enter Room" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="price">Price</Label>
          <Input id="price" type="text" placeholder="Enter Price" />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="room2">Room type</Label>
          <Input id="room2" type="text" placeholder="Enter Room" />
        </InputContainer>

        <LargeInputContainer>
          <Label htmlFor="description">Description</Label>
          <TextArea id="description" placeholder="Enter Description" />
        </LargeInputContainer>
        <LargeInputContainer>
          <Label htmlFor="file">Upload Photos</Label>
          <ImageSpanContainer  htmlFor="file">
            <Text>
              Drag your images here, or <span>browse</span>
            </Text>
            <UploadTypes>Supported: JPG, JPEG, PNG</UploadTypes>
          </ImageSpanContainer>
          <Input
            type="file"
            id="file"
            accept="image/png, image/jpg, image/gif, image/jpeg"
            placeholder="Drag your images here, or browse"
          />
        </LargeInputContainer>

        <Button>Add New Property</Button>
      </Form>
    </Section>
  );
};

export default Property;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5em;
  flex-wrap: wrap;
  gap: 4em;
`;

const Heading = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  text-transform: capitalize;
  font-feature-settings: "salt" on, "liga" off;

  color: #000000;
`;

const Form = styled.form`
  max-width: 1130px;
  background: #ffffff;
  box-shadow: 0px 4px 63px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 2em;
  gap: 2em;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
  letter-spacing: 0.2px;
  color: #252b42;
  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  background: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  min-width: 318px;
  height: 50px;
  padding: 2em;
  outline: none;
  ::placeholder {
    font-family: "Inter";
  }

  ${(props) =>
    props.type === "file" &&
    css`
      display: none;
    `}/* flex: 1; */
`;

const ImageSpanContainer = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 318px;
  height: 102px;
  margin: auto 0;
  outline: none;
  background: rgba(244, 81, 30, 0.01);
  border: 1px dashed #f4511e;
  border-radius: 10px;
  gap: .5em;
  :hover{
    cursor: pointer;
  }
`;

const Text = styled.p`
  text-align: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #000000;

  span {
    font-weight: 600;
    color: #f4511e;
  }
`;

const UploadTypes = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
`;

const LargeInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

const TextArea = styled.textarea`
  background: #f9f9f9;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  height: 151px;
  padding: 1em 2em;
  outline: none;
  width: 100%;
  resize: none;
  column-span: 100%;
  ::placeholder {
    font-family: "Inter";
  }
`;

const Button = styled.button`
  /* width: 513px;
  height: 63px; */
  padding: 1.2em 9em;
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
  margin: 1em auto;
`;
