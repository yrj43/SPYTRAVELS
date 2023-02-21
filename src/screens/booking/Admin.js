
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


export default function Admin(props) {

    return (
 <div>


        <meta charSet="UTF-8" />
        <style dangerouslySetInnerHTML={{__html: "\n\n@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap\");\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tfont-family: \"Roboto\", sans-serif;\n}\nbody {\n\tposition: relative;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-height: 100vh;\n\tbackground: linear-gradient(to bottom, #5d326c, #350048); /*fiolet*/\n}\n.container {\n\twidth: 1000px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n}\n.container .btn {\n\tposition: relative;\n\ttop: 0;\n\tleft: 0;\n\twidth: 250px;\n\theight: 50px;\n\tmargin: 0;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n.container .btn a {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground: rgba(255, 255, 255, 0.05);\n\tbox-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);\n\tborder-bottom: 1px solid rgba(255, 255, 255, 0.1);\n\tborder-top: 1px solid rgba(255, 255, 255, 0.1);\n\tborder-radius: 30px;\n\tpadding: 10px;\n\tletter-spacing: 1px;\n\ttext-decoration: none;\n\toverflow: hidden;\n\tcolor: #fff;\n\tfont-weight: 400px;\n\tz-index: 1;\n\ttransition: 0.5s;\n\tbackdrop-filter: blur(15px);\n}\n.container .btn:hover a {\n\tletter-spacing: 3px;\n}\n.container .btn a::before {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 50%;\n\theight: 100%;\n\tbackground: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);\n\ttransform: skewX(45deg) translate(0);\n\ttransition: 0.5s;\n\tfilter: blur(0px);\n}\n.container .btn:hover a::before {\n\ttransform: skewX(45deg) translate(200px);\n}\n.container .btn::before {\n\tcontent: \"\";\n\tposition: absolute;\n\tleft: 50%;\n\ttransform: translatex(-50%);\n\tbottom: -5px;\n\twidth: 30px;\n\theight: 10px;\n\tbackground: #f00;\n\tborder-radius: 10px;\n\ttransition: 0.5s;\n\ttransition-delay: 0.5;\n}\n.container .btn:hover::before /*lightup button*/ {\n\tbottom: 0;\n\theight: 50%;\n\twidth: 80%;\n\tborder-radius: 30px;\n}\n\n.container .btn::after {\n\tcontent: \"\";\n\tposition: absolute;\n\tleft: 50%;\n\ttransform: translatex(-50%);\n\ttop: -5px;\n\twidth: 30px;\n\theight: 10px;\n\tbackground: #f00;\n\tborder-radius: 10px;\n\ttransition: 0.5s;\n\ttransition-delay: 0.5;\n}\n.container .btn:hover::after /*lightup button*/ {\n\ttop: 0;\n\theight: 50%;\n\twidth: 80%;\n\tborder-radius: 30px;\n}\n.container .btn:nth-child(1)::before, /*chnage 1*/\n.container .btn:nth-child(1)::after {\n\tbackground: #ff1f71;\n\tbox-shadow: 0 0 5px #ff1f71, 0 0 15px #ff1f71, 0 0 30px #ff1f71,\n\t\t0 0 60px #ff1f71;\n}\n.container .btn:nth-child(2)::before, /* 2*/\n.container .btn:nth-child(2)::after {\n\tbackground: #2db2ff;\n\tbox-shadow: 0 0 5px #2db2ff, 0 0 15px #2db2ff, 0 0 30px #2db2ff,\n\t\t0 0 60px #2db2ff;\n}\n.container .btn:nth-child(3)::before, /* 3*/\n.container .btn:nth-child(3)::after {\n\tbackground: #1eff45;\n\tbox-shadow: 0 0 5px #1eff45, 0 0 15px #1eff45, 0 0 30px #1eff45,\n\t\t0 0 60px #1eff45;\n}\n" }} />
        {/* partial:index.partial.html */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="container">
          <div className="btn"><a href="http://spytravelsadmin.rf.gd" target="_blank">Open panel</a></div>
        </div>		

       {/* partial */}
      </div>
);
}