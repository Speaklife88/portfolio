import { Button } from "../../globalStyles";
import React from "react";
import {
  FooterContainer,
  FooterSubsription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink
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
      <FooterLinksContainer>
        <FooterLinksWrapper>
        <FooterLinksItems>
          <FooterLinkTitle> About Us </FooterLinkTitle>
            <FooterLink to='/sign-up'>How it Works</FooterLink>
            <FooterLink to='/'>Testimonials</FooterLink>
            <FooterLink to='/'>Career</FooterLink>
            <FooterLink to='/'>Terms of Service</FooterLink>
        </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
