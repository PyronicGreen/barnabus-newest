import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaInstagram, FaFacebook, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from  './FooterElements';
import { IoBeerSharp } from 'react-icons/io5';

    const Footer = () => {
        const toggleHome = () => {
            scroll.scrollToTop();
        };
        
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>For Hosts</FooterLinkTitle>
                                <FooterLink to="/signin">The Host Life</FooterLink>
                                 <FooterLink to="/signin">Earnings</FooterLink>
                                 <FooterLink to="/signin">Cities</FooterLink>
                                 <FooterLink to="/signin">Code of Conduct</FooterLink>
                                 <FooterLink to="/signin">Help</FooterLink>
                                 <FooterLink to="/signin">Safety</FooterLink>
                                 <FooterLink to="/signin">Requirements</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Bonuses</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>For Guests</FooterLinkTitle>
                                <FooterLink to="/signin">The Guest Experience</FooterLink>
                                <FooterLink to="/signin">Payment</FooterLink>
                                <FooterLink to="/signin">Cities</FooterLink>
                                <FooterLink to="/signin">Code of Conduct</FooterLink>
                                <FooterLink to="/signin">Help</FooterLink>
                                <FooterLink to="/signin">Safety</FooterLink>
                                <FooterLink to="/signin">Eligibility</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Rewards</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>For Spaces</FooterLinkTitle>
                                <FooterLink to="/signin">Feature Your Space</FooterLink>
                                <FooterLink to="/signin">Earnings</FooterLink>
                                <FooterLink to="/signin">Liability</FooterLink>
                                <FooterLink to="/signin">Expectations</FooterLink>
                                <FooterLink to="/signin">Safety</FooterLink>
                                <FooterLink to="/signin">Eligibility</FooterLink>
                                <FooterLink to="/signin">Testimonials</FooterLink>
                                <FooterLink to="/signin">Incentives</FooterLink>
                                <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Company</FooterLinkTitle>
                                <FooterLink to="/signin">Careers</FooterLink>
                                <FooterLink to="/signin">Contact</FooterLink>
                                <FooterLink to="/signin">Press</FooterLink>
                                <FooterLink to="/signin">Privacy</FooterLink>
                                <FooterLink to="/signin">Policy + Terms</FooterLink>
                                <FooterLink to="/signin">Accessibility</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' style={{textDecoration: 'none' }} onClick={toggleHome}>
                      <IoBeerSharp /> Barnabus
                        </SocialLogo>
                        <WebsiteRights>Barnabus © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/jaredrinaldi" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;