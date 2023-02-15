
import React, { useContext, useEffect, lazy, Suspense, Fragment } from 'react';
import styled from 'styled-components/macro';
import Sheet, { SheetHeader, SheetTitle, SheetForm, SheetFormInputs } from 'components/Sheet';
import { AppContext, AppTransitionContext } from 'app';
import { isVisible } from 'utils/transition';
import FlightSummary from 'components/FlightSummary';
import { useHistory } from 'react-router-dom';
import { ReactComponent as QRCode } from 'assets/qr-code.svg';
import { ReactComponent as IconBag } from 'assets/icon-bag.svg';
import { ReactComponent as PlaneType } from 'assets/plane-type.svg';
import { ReactComponent as IconCheck } from 'assets/icon-check.svg';
import { rgba } from 'utils/color';
import Button from 'components/Button';
import UserListItem from 'components/UserListItem';
import { shareUsers } from 'data/user';
import { useScrollRestore } from 'hooks';


export default function Signup(props) {

    return (
    
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v2.1.9/css/unicons.css" />
        <style dangerouslySetInnerHTML={{__html: "\n/* Please ❤ this if you like it! */\n\n\n@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');\n\nbody{\n\tfont-family: 'Poppins', sans-serif;\n\tfont-weight: 300;\n\tfont-size: 15px;\n\tline-height: 1.7;\n\tcolor: #c4c3ca;\n\tbackground-color: #1f2029;\n\toverflow-x: hidden;\n}\na {\n\tcursor: pointer;\n  transition: all 200ms linear;\n}\na:hover {\n\ttext-decoration: none;\n}\n.link {\n  color: #c4c3ca;\n}\n.link:hover {\n  color: #ffeba7;\n}\np {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.7;\n}\nh4 {\n  font-weight: 600;\n}\nh6 span{\n  padding: 0 20px;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.section{\n  position: relative;\n  width: 100%;\n  display: block;\n}\n.full-height{\n  min-height: 100vh;\n}\n[type=\"checkbox\"]:checked,\n[type=\"checkbox\"]:not(:checked){\n  position: absolute;\n  left: -9999px;\n}\n.checkbox:checked + label,\n.checkbox:not(:checked) + label{\n  position: relative;\n  display: block;\n  text-align: center;\n  width: 60px;\n  height: 16px;\n  border-radius: 8px;\n  padding: 0;\n  margin: 10px auto;\n  cursor: pointer;\n  background-color: #ffeba7;\n}\n.checkbox:checked + label:before,\n.checkbox:not(:checked) + label:before{\n  position: absolute;\n  display: block;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  color: #ffeba7;\n  background-color: #102770;\n  font-family: 'unicons';\n  content: '\\eb4f';\n  z-index: 20;\n  top: -10px;\n  left: -10px;\n  line-height: 36px;\n  text-align: center;\n  font-size: 24px;\n  transition: all 0.5s ease;\n}\n.checkbox:checked + label:before {\n  transform: translateX(44px) rotate(-270deg);\n}\n\n\n.card-3d-wrap {\n  position: relative;\n  width: 440px;\n  max-width: 100%;\n  height: 400px;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  perspective: 800px;\n  margin-top: 60px;\n}\n.card-3d-wrapper {\n  width: 100%;\n  height: 100%;\n  position:absolute;    \n  top: 0;\n  left: 0;  \n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  transition: all 600ms ease-out; \n}\n.card-front, .card-back {\n  width: 100%;\n  height: 100%;\n  background-color: #2a2b38;\n  background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/1462889/pat.svg');\n  background-position: bottom center;\n  background-repeat: no-repeat;\n  background-size: 300%;\n  position: absolute;\n  border-radius: 6px;\n  left: 0;\n  top: 0;\n  -webkit-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -o-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n.card-back {\n  transform: rotateY(180deg);\n}\n.checkbox:checked ~ .card-3d-wrap .card-3d-wrapper {\n  transform: rotateY(180deg);\n}\n.center-wrap{\n  position: absolute;\n  width: 100%;\n  padding: 0 35px;\n  top: 50%;\n  left: 0;\n  transform: translate3d(0, -50%, 35px) perspective(100px);\n  z-index: 20;\n  display: block;\n}\n\n\n.form-group{ \n  position: relative;\n  display: block;\n    margin: 0;\n    padding: 0;\n}\n.form-style {\n  padding: 13px 20px;\n  padding-left: 55px;\n  height: 48px;\n  width: 100%;\n  font-weight: 500;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: 22px;\n  letter-spacing: 0.5px;\n  outline: none;\n  color: #c4c3ca;\n  background-color: #1f2029;\n  border: none;\n  -webkit-transition: all 200ms linear;\n  transition: all 200ms linear;\n  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);\n}\n.form-style:focus,\n.form-style:active {\n  border: none;\n  outline: none;\n  box-shadow: 0 4px 8px 0 rgba(21,21,21,.2);\n}\n.input-icon {\n  position: absolute;\n  top: 0;\n  left: 18px;\n  height: 48px;\n  font-size: 24px;\n  line-height: 48px;\n  text-align: left;\n  color: #ffeba7;\n  -webkit-transition: all 200ms linear;\n    transition: all 200ms linear;\n}\n\n.form-group input:-ms-input-placeholder  {\n  color: #c4c3ca;\n  opacity: 0.7;\n  -webkit-transition: all 200ms linear;\n    transition: all 200ms linear;\n}\n.form-group input::-moz-placeholder  {\n  color: #c4c3ca;\n  opacity: 0.7;\n  -webkit-transition: all 200ms linear;\n    transition: all 200ms linear;\n}\n.form-group input:-moz-placeholder  {\n  color: #c4c3ca;\n  opacity: 0.7;\n  -webkit-transition: all 200ms linear;\n    transition: all 200ms linear;\n}\n.form-group input::-webkit-input-placeholder  {\n  color: #c4c3ca;\n  opacity: 0.7;\n  -webkit-transition: all 200ms linear;\n    transition: all 200ms linear;\n}\n.form-group input:focus:-ms-input-placeholder  {\n  opacity: 0;\n  -webkit-transition: all 200ms linear;\n    transition: all 200ms linear;\n}\n.form-group input:focus::-moz-placeholder  {\n  opacity: 0;\n  -webkit-transition: all 200ms linear;\n    transition: all 200ms linear;\n}\n.form-group input:focus:-moz-placeholder  {\n  opacity: 0;\n  -webkit-transition: all 200ms linear;\n    transition: all 200ms linear;\n}\n.form-group input:focus::-webkit-input-placeholder  {\n  opacity: 0;\n  -webkit-transition: all 200ms linear;\n    transition: all 200ms linear;\n}\n\n.btn{  \n  border-radius: 4px;\n  height: 44px;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n  -webkit-transition : all 200ms linear;\n  transition: all 200ms linear;\n  padding: 0 30px;\n  letter-spacing: 1px;\n  display: -webkit-inline-flex;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-align-items: center;\n  -moz-align-items: center;\n  -ms-align-items: center;\n  align-items: center;\n  -webkit-justify-content: center;\n  -moz-justify-content: center;\n  -ms-justify-content: center;\n  justify-content: center;\n  -ms-flex-pack: center;\n  text-align: center;\n  border: none;\n  background-color: #ffeba7;\n  color: #102770;\n  box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);\n}\n.btn:active,\n.btn:focus{  \n  background-color: #102770;\n  color: #ffeba7;\n  box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);\n}\n.btn:hover{  \n  background-color: #102770;\n  color: #ffeba7;\n  box-shadow: 0 8px 24px 0 rgba(16,39,112,.2);\n}\n\n\n\n\n.logo {\n\tposition: absolute;\n\ttop: 30px;\n\tright: 30px;\n\tdisplay: block;\n\tz-index: 100;\n\ttransition: all 250ms linear;\n}\n.logo img {\n\theight: 26px;\n\twidth: auto;\n\tdisplay: block;\n}\n\n\n" }} />
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log" />
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="form-group">
                              <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                              <i className="input-icon uil uil-at" />
                            </div>	
                            <div className="form-group mt-2">
                              <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                              <i className="input-icon uil uil-lock-alt" />
                            </div>
                            <a href="/booking/payment" className="btn mt-4">submit</a>
                            <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
                              <i className="input-icon uil uil-user" />
                            </div>	
                            <div className="form-group mt-2">
                              <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
                              <i className="input-icon uil uil-at" />
                            </div>	
                            <div className="form-group mt-2">
                              <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
                              <i className="input-icon uil uil-lock-alt" />
                            </div>
                            <a href="/booking/payment" className="btn mt-4">submit</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* partial */}
      </div>
);
}