
# Project by Egalitarian-Eagle
A Hack Reactor System Design Capstone project using NodeJS, Express, AWS, NginX and React. Build the server and database for the Q&A service and optimize it to handle a large quantities of data and traffic. 
* Node v14.17.2
* React 17.0.2

## Components and Features

<br>
<div align="center">
  <img src="https://github.com/Egalitarian-Eagle/Q-A/blob/main/github_sdc.png" alt="loader.io test" width="600px">
</div>
<br>
<ul>
  <li>Conducted stress test by utilizing Loader.io and New Relic visualizer to Identify slow read queries, indexed legacy MongoDB for faster data retrieval</li>
  <li>Deployed EC2 micro instances behind Nginx load balancer, sustaining 1500 RPS with < 0.1% error rate</li>
  <li>Reduced latency in the read-heavy system from 2s to 118ms by implementing horizontal scaling and adding
another 2 EC2 instances</li>
</ul>

## Setup
Make a copy of `config.example.js` and rename it `config.js` and be sure to replace **YOUR_GITHUB_API_TOKEN** with your token from github

## Running the App

Install the dependencies
```
$ npm install
```
Use webpack to bundle files
```
$ npm run build
```
Start the server
```
$ npm start
```
Open https://localhost:3000 in browser

## Technologies
* React.js
* Node.js
* Express.js
* Axios
* Webpack
* Babel
* Sass
* React-testing library
* Jest
* AWS:EC2
* NginX
* Loader.io


