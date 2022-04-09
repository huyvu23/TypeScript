import "./header.scss";

function Header() {
  return (
    <div>
      <div className="header__container">
        <div className="grid wide">
          <div className="header__list">
            <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"></img>
            <span>Store</span>
            <span>Mac</span>
            <span>iPad</span>
            <span>iPhone</span>
            <span>Watch</span>
            <span>AirPod</span>
            <span>TV & Home</span>
            <span>Only on Apple</span>
            <span>Accessories</span>
            <span>Support</span>
            <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"></img>
          </div>
        </div>
      </div>
      <div className="header__world">
        <img src="https://www.apple.com/v/home/an/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png"></img>
        <a href="#">Donate to support families affected by the war in Ukraine</a>
      </div>
    </div>
  );
}

export default Header;
