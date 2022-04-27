import React from "react";
import styled from "styled-components";
import { ArrowForwardIosOutlined, CallMadeOutlined, PlayCircleFilledOutlined } from "@material-ui/icons";

function Collections() {
  return (
    <Container>
      <div className="row module">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 moduleItem">
          <WatchOne>
            <div className="wrap">
              <div>
                <img alt="" src="https://www.apple.com/v/home/an/images/logos/wwdc-announce/wwdc22_logo__f39kr8derwya_large.png"></img>
              </div>
              <h5>The Worldwide Developers Conference is coming. Join us online June 6–10.</h5>
              <div>
                <a href="#">Learn more</a>
              </div>
            </div>
          </WatchOne>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 moduleItem">
          <WatchTwo>
            <div className="wrap">
              <img alt="" src="https://www.apple.com/v/home/an/images/logos/watch-series-7/promo_logo_watch_lte__emrof7zzkriq_large.png"></img>
              <h5>It’s our largest display yet. </h5>
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
            </div>
          </WatchTwo>
        </div>
      </div>
      <div className="row module">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 moduleItem">
          <IMac>
            <div className="wrap">
              <h4>Studio Display</h4>
              <h5>A sight to be bold. </h5>
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
            </div>
          </IMac>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 moduleItem">
          <MacStudio>
            <div className="wrap">
              <h4>Mac Studio</h4>
              <h5>Empower station </h5>
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
            </div>
          </MacStudio>
        </div>
      </div>
      <div className="row module">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 moduleItem">
          <Arcade>
            <div className="wrap">
              <img alt="" src="https://www.apple.com/v/home/an/images/logos/arcade/logo__dcojfwkzna2q_large.png"></img>
              <h5>Learn more about Apple Arcade </h5>
              <ButtonGroup>
                <a href="#">
                  Learn more
                  <ArrowForwardIosOutlined className="icon" />
                </a>
                <a href="#">
                  Try it free
                  <CallMadeOutlined className="icon " />
                </a>
              </ButtonGroup>
            </div>
          </Arcade>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 moduleItem">
          <TV>
            <div className="wrap">
              <img src="https://www.apple.com/v/home/an/images/logos/tv-plus/logo_light__cfvl40z2nzau_large.png"></img>
              <h5>Severance</h5>
              <div>
                <a href="#">
                  Stream all episodes now
                  <PlayCircleFilledOutlined className="play" />
                </a>
              </div>
            </div>
          </TV>
        </div>
      </div>
    </Container>
  );
}

export default Collections;
const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 1776px;
  .module {
    height: 592px;
    .moduleItem {
      height: 100%;
    }
  }
`;

const WatchOne = styled.div`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  background-image: url("https://www.apple.com/v/home/an/images/promos/wwdc-announce/promo_wwdc_announce__dr6w8rxice4i_large.jpg");
  h5 {
    color: #c6e1e6;
    max-width: 370px;
    font-size: 21px;
    display: flex;
    text-align: center;
  }
  .wrap {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 53px;
  }
  a {
    color: #2997ff;
    font-size: 17px;
  }
`;

const WatchTwo = styled(WatchOne)`
  position: relative;
  background-image: url("https://www.apple.com/v/home/an/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg");
  .wrap {
    position: absolute;
    top: 53px;
    h5 {
      color: #1d1d1f;
      font-size: 21px;
      font-weight: 400;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  .icon {
    color: #0066cc;
    margin-left: 4px;
    padding-top: 4px;
  }
`;

const IMac = styled(WatchOne)`
  background-image: url("https://www.apple.com/v/home/an/images/promos/studio-display/promo_studiodisplay_avail__d1cx9j73ooq6_large.jpg");
  .wrap {
    position: relative;
    top: 53px;
    h4 {
      font-size: 40px;
      font-weight: 600;
    }
    h5 {
      color: black;
    }
  }
`;

const MacStudio = styled(IMac)`
  background-image: url("https://www.apple.com/v/home/an/images/promos/mac-studio/promo_macstudio_avail__byhwkp0o4gty_large.jpg");
`;

const Arcade = styled(WatchTwo)`
  background-image: url("https://www.apple.com/v/home/an/images/promos/arcade-gear-club-stradale/gcs_promo__ejljitxuwkae_large.jpg");
`;

const TV = styled(WatchOne)`
  background-image: url("https://www.apple.com/v/home/an/images/promos/tv-plus-severance/promo_severance__fdkdommf27mi_large.jpg");
  .wrap {
    h5 {
      color: white;
      font-size: 56px;
      font-weight: 500;
    }
    a {
      color: white;
      display: flex;
      text-align: center;
      align-items: center;
      .play {
        margin-left: 6px;
      }
    }
  }
`;
