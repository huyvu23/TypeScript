import "./body.scss";
import { ArrowForwardIosOutlined } from "@material-ui/icons";

function Body() {
  return (
    <>
      <section className="sectionContainer">
        <section className="sectionIphonePro">
          <div className="sectionIphonePro__content">
            <h2>iPhone 13 Pro</h2>
            <h3>Oh.So.Pro</h3>
            <div className="buttonContainer">
              <a href="#">
                Learn more
                <ArrowForwardIosOutlined className="icon" />
              </a>
              <a href="#">
                Buy
                <ArrowForwardIosOutlined className="icon" />
              </a>
            </div>
          </div>
          <div className="sectionIphonePro__image"></div>
        </section>
        <section className="sectionIphoneSE">
          <div className="sectionIphoneSE__content">
            <span>The New</span>
            <h2>iPhone SE</h2>
            <h3>Love the power. Love the price.</h3>
            <div className="buttonContainer">
              <a href="#">
                Learn more
                <ArrowForwardIosOutlined className="icon" />
              </a>
              <a href="#">
                Buy
                <ArrowForwardIosOutlined className="icon" />
              </a>
            </div>
          </div>
          <div className="sectionIphoneSE__image"></div>
        </section>
        <section className="sectionIpad">
          <div className="sectionIpad__content">
            <div className="sectionIpad__content--image"></div>
            <h3>Light.Bright.Full of might</h3>
            <div className="buttonContainer">
              <a href="#">
                Learn more
                <ArrowForwardIosOutlined className="icon" />
              </a>
              <a href="#">
                Buy
                <ArrowForwardIosOutlined className="icon" />
              </a>
            </div>
          </div>
          <div className="sectionIpad__image"></div>
        </section>
        <section className="sectionWatch"></section>
        <section className="sectionImac"></section>
        <section className="sectionArcade"></section>
      </section>
    </>
  );
}

export default Body;
