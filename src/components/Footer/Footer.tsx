import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterInfoLogo,
  FooterText,
  FooterMenu,
  FooterMapImg,
} from './Footer.styles';

function Footer() {
  return (
    <FooterContainer>
      <div className="footer__wrapper">
        <div className="flex_container">
          <FooterInfoLogo />
          <FooterText>tranthuy.nute@gmail.com</FooterText>
          <FooterText>(480) 555-0103</FooterText>
        </div>
        <FooterMenu>
          <Link to="/"><FooterText>Catalog</FooterText></Link>
          <Link to="/profile"><FooterText>My Account</FooterText></Link>
          <Link to="/"><FooterText>Cart</FooterText></Link>
          <Link to="/"><FooterText>Home Page</FooterText></Link>
        </FooterMenu>
        <div>
          <FooterText>6391 Elgin St. Celina, Delaware 10299</FooterText>
          <FooterMapImg />
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;
