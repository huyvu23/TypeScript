import React from "react";
import styled from "styled-components";

function Collections() {
  return (
    <Container>
      <div className="row module">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 moduleItem">
          <WatchOne></WatchOne>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 moduleItem">
          <WatchTwo />
        </div>
      </div>
      <div className="row module">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 moduleItem">
          <IMac></IMac>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 moduleItem">
          <MacStudio></MacStudio>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6"></div>
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
  background-image: url("https://www.apple.com/v/home/an/images/promos/wwdc-announce/promo_wwdc_announce__dr6w8rxice4i_large.jpg");
`;

const WatchTwo = styled(WatchOne)`
  background-image: url("https://www.apple.com/v/home/an/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg");
`;

const IMac = styled(WatchOne)`
  background-image: url("https://www.apple.com/v/home/an/images/promos/studio-display/promo_studiodisplay_avail__d1cx9j73ooq6_large.jpg");
`;

const MacStudio = styled(WatchOne)`
  background-image: url("https://www.apple.com/v/home/an/images/promos/mac-studio/promo_macstudio_avail__byhwkp0o4gty_large.jpg");
`;
