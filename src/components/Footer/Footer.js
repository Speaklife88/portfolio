import { Button } from "../../globalStyles";
import {FaFacebook, FaYoutube, FaInstagram, FaClubhouse} from 'react-icons/fa';
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
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  WebsiteRights
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
            <FooterLink to="/sign-up">How it Works</FooterLink>
            <FooterLink to="/">Testimonials</FooterLink>
            <FooterLink to="/">Career</FooterLink>
            <FooterLink to="/">Terms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            Be.Irony
          </SocialLogo>
          <WebsiteRights> Be.Irony 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Clubhouse">
              <FaClubhouse />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
