import {
  FooterSection,
  FooterSectionOne,
  FooterSectionTwo,
  ContentOne,
  ContentTwo,
  ContentThree,
  Text,
} from "../styles/FooterStyle";

const Footer = () => {
  return (
    <FooterSection>
      <FooterSectionOne>
        <FooterSectionTwo>
          <h4>TARGET</h4>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </Text>
        </FooterSectionTwo>

        <ContentOne>
          <h4>About Us</h4>
          <p>Careers</p>
          <p>Our Stores</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </ContentOne>

        <ContentTwo>
          <h4>Services</h4>
          <p>Help Center</p>
          <p>Track Your Order</p>
          <p>Corporate & Bulk Purchasing</p>
          <p>Returns & Refunds</p>
        </ContentTwo>

        <ContentThree>
          <h4>Contact Us</h4>
          <p>Kabul, Afghanistan</p>
          <p>Email: abbasalianosh@gmail.com</p>
          <p>(0093)799749108</p>
        </ContentThree>
      </FooterSectionOne>
    </FooterSection>
  );
};

export default Footer;
