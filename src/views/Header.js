import React from "react";
import {withTranslation} from "react-i18next";
import styled from 'styled-components';
import {Link, NavLink} from "react-router-dom";
import {mediaQuery} from "../css/config";

const HeaderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ddd;
`;

const HeaderInner = styled.div`
  width: 1024px;
  padding: 0;
  margin: 0 auto;
  position: relative;
  text-align: center;

  ${mediaQuery.tablet} {
    width: 100%;
  }

  ${mediaQuery.mobile} {
    width: 100%;
  }
`;

const UpperNavBar = styled.div`
  height: 3rem;
  padding: 0 10px;
  box-sizing: border-box;
  width: 1024px;
  margin: 0 auto;
  position: relative;
  text-align: center;

  img {
    image-rendering: -webkit-optimize-contrast;
  }

  a {
    color: #000;
  }

  h1 {
    float: left;
    padding: 0 0 0 0;
  }

  h1 a {
    display: block;
    width: 106px;
    height: 3rem;
    background: url(${process.env.PUBLIC_URL}/images/common/renewal_logo.png) no-repeat left center;
    background-size: 100%;
    color: transparent;
    cursor: pointer;
    image-rendering: -webkit-optimize-contrast;
  }

  ${mediaQuery.tablet} {
    width: 100%;
    display: block;
    position: relative;
  }

  ${mediaQuery.mobile} {
    height: 3rem;
    padding: 0 10px;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;

    h1 {
      float: left;
      padding: 0 0 0 0;
    }

    h1 a {
      width: 80px;
      height: 15px;
      margin-top: 18px;
      image-rendering: auto;
    }
  }
`;

const LowerNavBar = styled.div`
  height: 100%;
  width: 30rem;
  display: inline-block;
  top: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  a {
    color: #000;
  }

  ul {
    display: flex;
    height: 100%;
  }

  ul > li {
    flex-grow: 1;
    height: 100%;
  }

  ul > li > a {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: -0.2px;
    font-size: 1rem;
  }

  ul > li.active > a {
    color: #e63740;
  }

  ${mediaQuery.tablet} {
    display: block;
  }

  ${mediaQuery.mobile} {
    height: 3rem;
    display: block;
    position: relative;
    width: 100%;
    left: initial;
    transform: initial;
    border-top: 0;
  }

  ${mediaQuery.mobileS} {
    ul > li > a {
      font-size: 14px
    }
  }
`;

const SlideMenu = styled.div`
  height: 100%;
  float: right;
  display: flex;
  align-content: center;

  ul {
    display: flex;
    float: right;
    align-items: center;
  }

  ul li {
    flex-grow: 1;
    float: left;
  }

  ul li > a {
    display: block;
    color: #000;
    font-size: 13px;
  }

  ul li > a.search {
    padding: 10px;
  }

  ul li > a.login {
    padding: 0 0 0 10px;
  }

  ul li > a .ico_search {
    width: 28px;
    display: inline-block;
    margin-top: 3px;
  }

  ul li > a .btn_login {
    border: 1px solid #000;
    border-radius: 4px;
    padding: 3px 7px;
  }
`;

const Header = ({t}) => {
  return (
    <HeaderContainer>
      <HeaderInner>
        <UpperNavBar className="clearfix">
          <h1>
            <Link to="/ko/">Toptoon</Link>
          </h1>
          <SlideMenu>
            <ul>
              <li>
                <Link to="#" className="search">
                  <span className="ico_search">
                      <img src={process.env.PUBLIC_URL + '/images/common/ico_search.png'}/>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <span className="btn_login">{t('header.login')}</span>
                </Link>
              </li>
            </ul>
          </SlideMenu>
        </UpperNavBar>
        <LowerNavBar>
          <ul>
            <li>
              <NavLink to="/weekly">{t('header.comics')}</NavLink>
            </li>
            <li>
              <NavLink to="/complete">{t('header.completed')}</NavLink>
            </li>
            <li>
              <NavLink to="/recommend">{t('header.recommend')}</NavLink>
            </li>
            <li>
              <NavLink to="/new">{t('header.new')}</NavLink>
            </li>
          </ul>
        </LowerNavBar>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default React.memo(withTranslation() (Header));
