
import React, { useContext, useEffect, lazy, Suspense, Fragment } from 'react';
import styled from 'styled-components/macro';
import Sheet, { SheetHeader, SheetTitle, SheetForm, SheetFormInputs } from 'components/Sheet';
import { AppContext, AppTransitionContext } from 'app';
import { isVisible } from 'utils/transition';
import FlightSummary from 'components/FlightSummary';
import { useHistory ,Link } from 'react-router-dom';
import { ReactComponent as QRCode } from 'assets/qr-code.svg';
import { ReactComponent as IconBag } from 'assets/icon-bag.svg';
import { ReactComponent as PlaneType } from 'assets/plane-type.svg';
import { ReactComponent as IconCheck } from 'assets/icon-check.svg';
import { rgba } from 'utils/color';
import Button from 'components/Button';
import UserListItem from 'components/UserListItem';
import { shareUsers } from 'data/user';
import { useScrollRestore } from 'hooks';



export default function Seatbook(props) {

    return (
    
      <div>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css" />
        <link rel="stylesheet" href="./style.css" />
        <style dangerouslySetInnerHTML={{__html: "\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 16px;\n}\n\n.plane {\n  margin: 20px auto;\n  max-width: 300px;\n}\n\n.cockpit {\n  height: 210px;\n  position: relative;\n  overflow: hidden;\n  text-align: center;\n  border-bottom: 5px solid #d8d8d8;\n}\n.cockpit:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 500px;\n  width: 100%;\n  border-radius: 50%;\n  border-right: 5px solid #d8d8d8;\n  border-left: 5px solid #d8d8d8;\n}\n.cockpit h1 {\n  width: 60%;\n  margin: 100px auto 35px auto;\n}\n\n.exit {\n  position: relative;\n  height: 50px;\n}\n.exit:before, .exit:after {\n  content: \"EXIT\";\n  font-size: 14px;\n  line-height: 18px;\n  padding: 0px 2px;\n  font-family: \"Arial Narrow\", Arial, sans-serif;\n  display: block;\n  position: absolute;\n  background: green;\n  color: white;\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.exit:before {\n  left: 0;\n}\n.exit:after {\n  right: 0;\n}\n\n.fuselage {\n  border-right: 5px solid #d8d8d8;\n  border-left: 5px solid #d8d8d8;\n}\n\nol {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.seats {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n}\n\n.seat {\n  display: flex;\n  flex: 0 0 14.2857142857%;\n  padding: 5px;\n  position: relative;\n}\n.seat:nth-child(3) {\n  margin-right: 14.2857142857%;\n}\n.seat input[type=checkbox] {\n  position: absolute;\n  opacity: 0;\n}\n.seat input[type=checkbox]:checked + label {\n  background: #bada55;\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n  animation-duration: 300ms;\n  animation-fill-mode: both;\n}\n.seat input[type=checkbox]:disabled + label {\n  background: #dddddd;\n  text-indent: -9999px;\n  overflow: hidden;\n}\n.seat input[type=checkbox]:disabled + label:after {\n  content: \"X\";\n  text-indent: 0;\n  position: absolute;\n  top: 4px;\n  left: 50%;\n  transform: translate(-50%, 0%);\n}\n.seat input[type=checkbox]:disabled + label:hover {\n  box-shadow: none;\n  cursor: not-allowed;\n}\n.seat label {\n  display: block;\n  position: relative;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 1.5rem;\n  padding: 4px 0;\n  background: #F42536;\n  border-radius: 5px;\n  animation-duration: 300ms;\n  animation-fill-mode: both;\n}\n.seat label:before {\n  content: \"\";\n  position: absolute;\n  width: 75%;\n  height: 75%;\n  top: 1px;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  background: rgba(255, 255, 255, 0.4);\n  border-radius: 3px;\n}\n.seat label:hover {\n  cursor: pointer;\n  box-shadow: 0 0 0px 2px #5C6AFF;\n}\n\n@-webkit-keyframes rubberBand {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1);\n  }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n@keyframes rubberBand {\n  0% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n  30% {\n    -webkit-transform: scale3d(1.25, 0.75, 1);\n    transform: scale3d(1.25, 0.75, 1);\n  }\n  40% {\n    -webkit-transform: scale3d(0.75, 1.25, 1);\n    transform: scale3d(0.75, 1.25, 1);\n  }\n  50% {\n    -webkit-transform: scale3d(1.15, 0.85, 1);\n    transform: scale3d(1.15, 0.85, 1);\n  }\n  65% {\n    -webkit-transform: scale3d(0.95, 1.05, 1);\n    transform: scale3d(0.95, 1.05, 1);\n  }\n  75% {\n    -webkit-transform: scale3d(1.05, 0.95, 1);\n    transform: scale3d(1.05, 0.95, 1);\n  }\n  100% {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1);\n  }\n}\n.rubberBand {\n  -webkit-animation-name: rubberBand;\n  animation-name: rubberBand;\n}\n\n@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');\n\n\n*:focus {\n    outline: none;\n}\n\n.absCenter {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.infoButton {\n    appearance: none;\n    border: 0;\n    background-color: transparent;\n    padding: 0;\n    margin: 0;\n    font-size: 14px;\n    position: relative;\n}\n\n.infoButton-btn {\n    appearance: none;\n    background-color: transparent;\n    border: 1px solid red;\n    border-radius: 10px;\n    width: 20px;\n    height: 20px;\n    color: red;\n    background-color: white;\n    font-weight: 700;\n    transform: rotate(-45deg);\n    transition: border-radius 200ms ease-in-out;\n}\n\n.infoButton-btn-text {\n    display: block;\n    text-align: center;\n    width: 20px;\n    height: 20px;\n    line-height: 20px;\n    transform: rotate(45deg);\n}\n\n.infoButton-container {\n    position: absolute;\n    bottom: calc(-100% + 60px);\n    right: 0;\n    margin-right: -90px;\n    transform: scale(0);\n    transition: transform 0ms linear 200ms;\n}\n\n.infoButton-container-message {\n    box-sizing: border-box;\n    width: 200px;\n    padding: 16px 20px;\n    font-size: 14px;\n    box-shadow: 0 1px 1px 0 rgba(black, 0.26);\n    border-radius: 4px;\n    line-height: 1.3;\n    text-align: left;\n    transform: translateY(10px);\n    opacity: 0;\n    transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;\n    background-color: white;\n}\n\n.infoButton:focus .infoButton-btn,\n.infoButton_isActive .infoButton-btn {\n    border-top-right-radius: 0;\n    transition: border-radius 200ms ease-in-out;\n    background-color: red;\n    color: white;\n}\n\n.infoButton:focus .infoButton-container,\n.infoButton_isActive .infoButton-container {\n    transform: scale(1);\n    transition: transform 0ms linear;\n}\n\n.infoButton:focus\n.infoButton-container-message,\n.infoButton_isActive\n.infoButton-container-message, {\n    transform: translate(0);\n    opacity: 1;\n}\n" }} />
        {/* partial:index.partial.html */}
        <div className="plane">
          <div className="cockpit"><h1><Button
                  type="button"
                  secondary
                  large
                  onClick={() => alert(`Choosing a plane seat might have changes as per center of gravity dynamics so here only choice of preference is taken"`)}
                >
                  Select your choice preference
                </Button>
  <Button as={Link} to="/booking/payment">Continue</Button>
       </h1>
          </div>
          <div className="exit exit--front fuselage">
          </div>
          <ol className="cabin fuselage">
            <li className="row row--1">
              <ol className="seats" type="A">
                <li className="seat">
                  <input type="checkbox" id="1A" />
                  <label htmlFor="1A">1A</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="1B" />
                  <label htmlFor="1B">1B</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="1C" />
                  <label htmlFor="1C">1C</label>
                </li>
                <li className="seat">
                  <input type="checkbox" disabled id="1D" />
                  <label htmlFor="1D">Occupied</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="1E" />
                  <label htmlFor="1E">1E</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="1F" />
                  <label htmlFor="1F">1F</label>
                </li>
              </ol>
            </li>
            <li className="row row--2">
              <ol className="seats" type="A">
                <li className="seat">
                  <input type="checkbox" id="2A" />
                  <label htmlFor="2A">2A</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="2B" />
                  <label htmlFor="2B">2B</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="2C" />
                  <label htmlFor="2C">2C</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="2D" />
                  <label htmlFor="2D">2D</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="2E" />
                  <label htmlFor="2E">2E</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="2F" />
                  <label htmlFor="2F">2F</label>
                </li>
              </ol>
            </li>
            <li className="row row--3">
              <ol className="seats" type="A">
                <li className="seat">
                  <input type="checkbox" id="3A" />
                  <label htmlFor="3A">3A</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="3B" />
                  <label htmlFor="3B">3B</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="3C" />
                  <label htmlFor="3C">3C</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="3D" />
                  <label htmlFor="3D">3D</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="3E" />
                  <label htmlFor="3E">3E</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="3F" />
                  <label htmlFor="3F">3F</label>
                </li>
              </ol>
            </li>
            <li className="row row--4">
              <ol className="seats" type="A">
                <li className="seat">
                  <input type="checkbox" id="4A" />
                  <label htmlFor="4A">4A</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="4B" />
                  <label htmlFor="4B">4B</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="4C" />
                  <label htmlFor="4C">4C</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="4D" />
                  <label htmlFor="4D">4D</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="4E" />
                  <label htmlFor="4E">4E</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="4F" />
                  <label htmlFor="4F">4F</label>
                </li>
              </ol>
            </li>
            <li className="row row--5">
              <ol className="seats" type="A">
                <li className="seat">
                  <input type="checkbox" id="5A" />
                  <label htmlFor="5A">5A</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="5B" />
                  <label htmlFor="5B">5B</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="5C" />
                  <label htmlFor="5C">5C</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="5D" />
                  <label htmlFor="5D">5D</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="5E" />
                  <label htmlFor="5E">5E</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="5F" />
                  <label htmlFor="5F">5F</label>
                </li>
              </ol>
            </li>
            <li className="row row--6">
              <ol className="seats" type="A">
                <li className="seat">
                  <input type="checkbox" id="6A" />
                  <label htmlFor="6A">6A</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="6B" />
                  <label htmlFor="6B">6B</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="6C" />
                  <label htmlFor="6C">6C</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="6D" />
                  <label htmlFor="6D">6D</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="6E" />
                  <label htmlFor="6E">6E</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="6F" />
                  <label htmlFor="6F">6F</label>
                </li>
              </ol>
            </li>
            <li className="row row--7">
              <ol className="seats" type="A">
                <li className="seat">
                  <input type="checkbox" id="7A" />
                  <label htmlFor="7A">7A</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="7B" />
                  <label htmlFor="7B">7B</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="7C" />
                  <label htmlFor="7C">7C</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="7D" />
                  <label htmlFor="7D">7D</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="7E" />
                  <label htmlFor="7E">7E</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="7F" />
                  <label htmlFor="7F">7F</label>
                </li>
              </ol>
            </li>
            <li className="row row--8">
              <ol className="seats" type="A">
                <li className="seat">
                  <input type="checkbox" id="8A" />
                  <label htmlFor="8A">8A</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="8B" />
                  <label htmlFor="8B">8B</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="8C" />
                  <label htmlFor="8C">8C</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="8D" />
                  <label htmlFor="8D">8D</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="8E" />
                  <label htmlFor="8E">8E</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="8F" />
                  <label htmlFor="8F">8F</label>
                </li>
              </ol>
            </li>
            <li className="row row--9">
              <ol className="seats" type="A">
                <li className="seat">
                  <input type="checkbox" id="9A" />
                  <label htmlFor="9A">9A</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="9B" />
                  <label htmlFor="9B">9B</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="9C" />
                  <label htmlFor="9C">9C</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="9D" />
                  <label htmlFor="9D">9D</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="9E" />
                  <label htmlFor="9E">9E</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="9F" />
                  <label htmlFor="9F">9F</label>
                </li>
              </ol>
            </li>
            <li className="row row--10">
              <ol className="seats" type="A">
                <li className="seat">
                  <input type="checkbox" id="10A" />
                  <label htmlFor="10A">10A</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="10B" />
                  <label htmlFor="10B">10B</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="10C" />
                  <label htmlFor="10C">10C</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="10D" />
                  <label htmlFor="10D">10D</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="10E" />
                  <label htmlFor="10E">10E</label>
                </li>
                <li className="seat">
                  <input type="checkbox" id="10F" />
                  <label htmlFor="10F">10F</label>
                </li>
              </ol>
            </li>
          </ol>
          <div className="exit exit--back fuselage">
          </div>
        </div>
        {/* partial */}     </div>
);
}