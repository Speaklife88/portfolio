import { Button } from "../../globalStyles";
import React from "react";
import {
  FooterContainer,
  FooterSubsription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubsription>
        <FooterSubHeading>
          Join our exclusive membership to receive the latest news and trends.
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at anytime.</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig> Subscribe </Button>
        </Form>
      </FooterSubsription>
    </FooterContainer>
  );
};

export default Footer;
