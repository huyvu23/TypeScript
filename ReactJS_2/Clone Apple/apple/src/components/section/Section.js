import { ArrowForwardIosOutlined } from "@material-ui/icons";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <IphonePro>
        <ContentPro>
          <h2>iPhone 13 Pro</h2>
          <h3>Oh.So.Pro</h3>
          <ButtonGroup>
            <a href="#">
              Learn more
              <ArrowForwardIosOutlined className="icon" />
            </a>
            <a href="#">
              Buy
              <ArrowForwardIosOutlined className="icon" />
            </a>
          </ButtonGroup>
        </ContentPro>
      </IphonePro>
      <IphoneSE>
        <ContentSE>
          <p>The New</p>
          <h2>Iphone SE</h2>
          <h3>Love the power. Love the price.</h3>
          <ButtonGroup>
            <a href="#">
              Learn more
              <ArrowForwardIosOutlined className="icon" />
            </a>
            <a href="#">
              Buy
              <ArrowForwardIosOutlined className="icon" />
            </a>
          </ButtonGroup>
        </ContentSE>
      </IphoneSE>
      <IpadAir>
        <ContentIpad>
          <h2>
            <img src="https://www.apple.com/v/home/an/images/logos/ipad-air/hero_logo_ipadair__em8hublxa0om_large.png"></img>
          </h2>
          <h3>Light. Bright. Full of might.</h3>
          <ButtonGroup>
            <a href="#">
              Learn more
              <ArrowForwardIosOutlined className="icon" />
            </a>
            <a href="#">
              Buy
              <ArrowForwardIosOutlined className="icon" />
            </a>
          </ButtonGroup>
        </ContentIpad>
      </IpadAir>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100%;
  margin-top: 44px;
`;

const IphonePro = styled.div`
  height: 580px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://www.apple.com/v/home/an/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_large.jpg");
  @media (max-width: 768px) {
    background-image: url("https://www.apple.com/v/home/an/images/heroes/iphone-13-pro/hero_iphone13pro_avail__iy77cld0zwii_small.jpg");
  }
`;

const ContentPro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 56px;
    font-weight: 600;
    margin: 0;
  }
  h3 {
    font-size: 28px;
    font-weight: 400;
    margin: 6px 0 0 0;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 36px;
      font-weight: 600;
    }
    h3 {
      font-size: 22px;
    }
  }
`;

const ButtonGroup = styled.div`
  width: 204px;
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  a {
    color: #0066cc;
    font-size: 21px;
  }
  .icon {
    margin-left: 4px;
  }
  @media (max-width: 768px) {
    a {
      font-size: 18px;
    }
    .icon {
      font-size: 12px;
    }
  }
`;

const IphoneSE = styled.div`
  padding-top: 47px;
  margin-top: 20px;
  height: 580px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("https://www.apple.com/v/home/an/images/heroes/iphone-se/hero_iphonese_avail__eg8srhcnpo66_large.jpg");
  @media (max-width: 768px) {
    background-image: url("https://www.apple.com/v/home/an/images/heroes/iphone-se/hero_iphonese_avail__eg8srhcnpo66_small.jpg");
  }
`;

const ContentSE = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 21px;
    font-weight: 600;
    margin-bottom: 0;
  }
  h2 {
    font-size: 56px;
    font-weight: 600;
    margin: 0;
  }
  h3 {
    font-size: 28px;
    font-weight: 400;
    margin: 6px 0 0 0;
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 36px;
      font-weight: 600;
    }
    h3 {
      font-size: 22px;
    }
  }
`;

const IpadAir = styled(IphoneSE)`
  background-image: url("https://www.apple.com/v/home/an/images/heroes/ipad-air/hero_ipadair_avail__dsqv5nn0tpsi_large.jpg");
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("https://www.apple.com/v/home/an/images/heroes/ipad-air/hero_ipadair_avail__dsqv5nn0tpsi_small.jpg");
  }
`;

const ContentIpad = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 500px;
  padding-top: 130px;
  h3 {
    color: white;
  }
  @media (max-width: 768px) {
    padding-top: 0;
    padding-right: 0;
    h2 {
      font-size: 36px;
      font-weight: 600;
    }
    h3 {
      font-size: 20px;
    }
  }
`;
