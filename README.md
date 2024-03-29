# Spy-travel-frontend
<p align="center">
 <img width="600px" src="https://user-images.githubusercontent.com/80674658/215562953-1eea7e9e-2d90-4894-89a6-a147996dea6b.jpg" align="center" alt="GitHub Readme Stats" />
<h2 align="center">SPY travel</h2>
 <img width="600px" src="https://user-images.githubusercontent.com/80674658/215563287-d51e244b-37fe-46be-b8ac-582e8804323c.png" align="center" alt="GitHub Readme Stats" />
 <p align="center">This is a WEB scrapper data emulated website for sorting best ticket for flights using emulated data from recorded xml api
</p>
</br>
</br><p align="center">
 <h2 align="center">CLICK THIS FOR LIVE DEMO</h2>
<p align="center">
<a href="https://spytraveljjg.netlify.app/">
  <img src="https://user-images.githubusercontent.com/78921146/208353391-95c550ad-5cc2-440e-a212-3ce94a6b90d7.png" alt="Give india logo" width="100" />
</a>
</p>

 <h2 align="center">CLICK THIS FOR ADMIN LOGIN</h2>
<p align="center">
<a href="http://spytravelsadmin.rf.gd">
  <img src="https://user-images.githubusercontent.com/78921146/208353391-95c550ad-5cc2-440e-a212-3ce94a6b90d7.png" alt="Gs" width="100" />
</a>
</p>

<h2 align="center">CLICK THIS FOR Mongo Data card preview</h2>
<p align="center">
<a href="http://spytravelsadmin.rf.gd/mongodb/">
  <img src="https://user-images.githubusercontent.com/78921146/208353391-95c550ad-5cc2-440e-a212-3ce94a6b90d7.png" alt="Gs" width="100" />
</a>
</p>

<h2 align="center">CLICK THIS FOR Webscrapping api panel</h2>
<p align="center">
<a href="https://thingspeak.com/apps/thinghttp">
  <img src="https://user-images.githubusercontent.com/78921146/208353391-95c550ad-5cc2-440e-a212-3ce94a6b90d7.png" alt="Gs" width="100" />
</a>
</p>

<h2 align="center">CLICK THIS FOR Raw Mongo db atlas Panel</h2>
<p align="center">
<a href="https://account.mongodb.com/account/login">
  <img src="https://user-images.githubusercontent.com/78921146/208353391-95c550ad-5cc2-440e-a212-3ce94a6b90d7.png" alt="Gs" width="100" />
</a>
</p>

A Flight ticket booking application made using MERN Stack (MongoDB, Express js, React js, Node js)

The Flight ticket application is composed of the following Features:

### Front-End

* Sign-In & Sign-Up Pages.

* Uses Token based system, so only registered users can access the website  passport js.

* Password hashing using passport js.

* Has a profile page, which will display all information about the signed in user.

* List of cities for users to choose from (starting city & destination city). 

* Getting list of Flight's of different companies with various details.

* Seat selection page has a very user friendly environment, which also generates dynamic forms for storing data's of passengers.

* Has a Confirmation page, which gets a debit card data using react-credit-cards. This version of the application does not include handling the payment process. 

* Final page has a ticket displaying component, it displays all passenger data and also generates a random number as a transaction ID.

### Back-End

* Uses Express js based application for the backend process.

* Uses MongoDB atlas for storing the collections.

* Uses passport js for authenticating user and token based system.

* Uses passport js for hashing the password before sending the data to the cloud.

* This version does not support dynamic seat data being stored from cloud.


This project also demonstrates:

* a typcial React project layout structure

**Screenshots:**
Landing Page:

![](documentationResources/bus.gif)

Signing In Page:

![](documentationResources/signin.png)

Bus Selection Page:

![](documentationResources/bus-page.png)

Seat Selection Page:

![](documentationResources/seatSelection.gif)

Payment & Confirmation Page:
![](documentationResources/payment.gif)
---

## Developed With

* [Visual Studio Code](https://code.visualstudio.com/) - A source code editor developed by Microsoft for Windows, Linux and macOS. It includes support for debugging, embedded Git control, syntax highlighting, intelligent code completion, snippets, and code refactoring
* [Node.js](https://nodejs.org/en/) - Javascript runtime
* [React](https://reactjs.org/) - A javascript library for building user interfaces
* [Babel](https://babeljs.io/) - A transpiler for javascript
* [Webpack](https://webpack.js.org/) - A module bundler
* [SCSS](http://sass-lang.com/) - A css metalanguage
* [Bootstrap 4](https://getbootstrap.com/) - Bootstrap is an open source toolkit for developing with HTML, CSS, and JS
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Express js](http://expressjs.com/) - Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
* [MongoDB atlas](https://www.mongodb.com/cloud/atlas) - MongoDB Atlas is the global cloud database service for modern applications.
* [Passport Js](http://www.passportjs.org/) - Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application.
---


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

```bash
node -v
npm -v
```

### Install

Follow the following steps to get development environment running.

* Clone _'MERN-BUS-APP.git'_ repository from GitHub

  ```bash
  git clone https://github.com/yrj43/Spy-travel-frontend.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:yrj43/Spy-travel-frontend.git
  ```

* Install node modules

   ```bash
   npm install && npm start
   
* Install yarn modules

   ```bash
   yarn install && yarn start
   ```


### Starting both front end and back end servers

* Build application

  This command will start the mongodb and the front end part.

  ```bash
  npm start
  cd..
  cd backend
  npm run devStart
  ```


---
