import React from "react";
import styled from "styled-components";
import { CallMadeOutlined } from "@material-ui/icons";

function Socials() {
  return (
    <Container>
      <Content>
        <img src="https://www.apple.com/v/home/an/images/logos/unicef-relief-fund/unicef_logo_dark__ejvlglygb3ee_large.png"></img>
        <p>
          <a href="#">
            Donate to support families affected by the war in Ukraine
            <CallMadeOutlined color="blue" className="icon" />
          </a>
        </p>
      </Content>
    </Container>
  );
}

export default Socials;

const Container = styled.div`
  padding-top: 44px;
  width: 100%;
`;

const Content = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f7;
  p {
    margin-bottom: 0;
    padding-left: 14px;
    a {
      color: #0066cc;
      .icon {
        padding-top: 4px;
        padding-left: 2px;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;

    p {
      a {
        font-size: 12px;
      }
    }
  }
`;
