import { FooterContainer, FooterWrapper, SocialMediaIcons, SocialMediaIcon, Copyright } from './FooterStyled';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Bio } from '../../data/constants';
import '../../App.css'

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.github} target="display"><GitHubIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display"><TwitterIcon /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display"><InstagramIcon /></SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2024 Ahsan | All rights reserved Ahsan.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;