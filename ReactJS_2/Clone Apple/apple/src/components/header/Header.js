import styled from "styled-components";

function Header() {
  return (
    <>
      <Container>
        <Menu>
          <a href="#">
            <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg"></img>
          </a>
          <ListMenu>
            <ul>
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">iPad</a>
              </li>
              <li>
                <a href="#">iPhone</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="">AirPods</a>
              </li>
              <li>
                <a href="#">TV & Home</a>
              </li>
              <li>
                <a href="#">Only on Apple</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </ListMenu>
          <span>
            <img src="https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_bag_image__yzte50i47ciu_large.svg"></img>
          </span>
        </Menu>
      </Container>
    </>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 44px;
  background-color: #313132;
  position: fixed;
  z-index: 99;
`;

const Menu = styled.div`
  max-width: 980px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 0 20px;
`;

const ListMenu = styled.div`
  width: 100%;
  padding: 0 20px;
  ul {
    display: flex;
    line-height: 44px;
    justify-content: space-between;
    list-style: none;
    margin-bottom: 0;
    font-size: 12px;
    li {
      a {
        color: #ccc;
        text-decoration: none;
        &:hover {
          color: white;
        }
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
