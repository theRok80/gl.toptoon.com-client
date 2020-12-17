import React from "react";
import {withTranslation} from "react-i18next";
import styled from 'styled-components';
import {mediaQuery} from "../css/config";

import {Link} from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  bottom: 0;
  overflow: hidden;
  background: #eaecee url(${process.env.PUBLIC_URL}/common/footer_line.gif) left 2.5rem repeat-x;

  ${mediaQuery.tablet} {
    width: 100%;
    box-sizing: border-box;
  }

  ${mediaQuery.mobile} {
    width: 100%;
    margin: 0;
    background-image: none;
  }
`;

const FooterInner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  font-size: .7rem;
  line-height: .95rem;
  position: relative;
  overflow: hidden;
  color: #8f8f8f;
  padding: 0 15px;
  box-sizing: border-box;

  ${mediaQuery.tablet} {
    width: 100%;
  }

  ${mediaQuery.mobile} {
    width: 100%;
    letter-spacing: -0.2px;
    line-height: 16px;
    font-size: 13px;
  }
`;

const FooterMenu = styled.div`
  display: block;
  height: 2.5rem;
  line-height: 2.5rem;

  ul > li {
    display: inline-block
  }

  ul > li:after {
    content: '';
    width: 3px;
    height: 3px;
    display: inline-block;
    border-radius: 50%;
    background: #959fb2;
    margin: 0 5px 2px 8px;
  }

  ul > li:last-child:after {
    content: '';
    display: none;
    margin: 0;
  }

  ul > li > a {
    color: #000;
    font-weight: 400;
    display: inline-block;
  }

  ${mediaQuery.mobile} {
    text-align: center;
    padding-top: 15px;
    
    & ul {
      height: auto;
      line-height: 1.8rem;
    }

    & ul > li > a {
      font-size: 14px;
    }
  }
`;

const Copyright = styled.div`
  padding: 40px 0;
  float: right;
  width: 80%;

  & > br:first-child {
    display: none;
  }

  & .e_mail {
    margin-left: 8px;
    color: #000
  }

  ${mediaQuery.tablet} {
    width: 75%;
  }

  ${mediaQuery.mobile} {
    padding: 15px 0 20px;
    float: none;
    width: 100%;
    text-align: center;

    & > br:first-child {
      display: block;
    }
  }
`;

const Law = styled.p`
  color:#73a6d2;
`;

const CopyText = styled.span`
  margin: 15px auto 0;
  display: block;
`;

const Logo = styled.div`
  position: absolute;
  left: 15px;
  top: 4.25rem;

  & > img {
    height: 30px;
    image-rendering: -webkit-optimize-contrast;
  }

  ${mediaQuery.mobile} {
    position: static;

    & > img {
      margin: 15px auto 0;
      width: 69px;
      height: auto;
    }
  }
`;

const LogoCo = styled.p`
  font-size: 0.7rem;
  text-align: center;
  color: #8f8f8f;
  margin-top: 2px;

  ${mediaQuery.mobile} {
    font-size: 0.58rem;
    text-indent: 1px;
  }
`;

const Footer = ({t}) => {
    return (
        <FooterContainer>
            <FooterInner>
                <FooterMenu>
                    <ul>
                        <li><Link to="#">{t('about')}</Link></li>
                        <li><Link to="#">{t('terms of service'}</Link></li>
                        <li><Link to="#">Privacy Policy</Link></li>
                        <li><Link to="#">Help</Link></li>
                        <li><Link to="#">Notifications</Link></li>
                        <li><Link to="#">Submission</Link></li>
                    </ul>
                </FooterMenu>
                <Copyright>
                    <Law>Toptoon content are all protected by Copyright Law.</Law>
                    Posting all or any part of our comics on other media (including personal media) without
                    authorization from the copyright holder or Toptoon is punishable by copyright laws.
                    <CopyText>E-mail: toptoon@topco.co.kr</CopyText>
                    <Logo>
                        <img src={process.env.PUBLIC_URL + '/images/common/footer_logo_toptoon.png'} alt="toptoon"/>
                        <LogoCo>Topco Co.,Ltd.</LogoCo>
                    </Logo>
                </Copyright>
            </FooterInner>
        </FooterContainer>
    );
};

export default React.memo(withTranslation() (Footer));