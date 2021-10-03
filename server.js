const path = require("path")
const express = require("express");
const compression = require('compression')
const app = express();
const port = 3000;
const config = require('./config/config.js');
const axios = require('axios');
const API_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo';
const { controller } = require('./controller.js')

app.use(express.static(path.join(__dirname, "/client/dist")));

app.use(express.json());
app.use(compression());

//Axios Requests, format right side URL within client-side request as req.url
const axiosConfig = {
  headers: {
    'content-type': 'application/json',
    'authorization': config.API_KEY
  }
};

app.get('/qa/questions', controller.getQA);
app.get('/*', (req, res) => {
  if (req.url.startsWith('/qa/questions')) {
    controller.getQA(req, res);
  } else {
    axios.get(`${API_URL}${req.url}`, axiosConfig)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => {
        res.sendFile(__dirname + '/client/dist/404page.html');
      })
  }

});

app.post('/*', (req, res) => {
  if(req.url==='/qa/questions'){
    controller.postQ(req,res);
  }
  else if (req.url.startsWith('/qa/questions')) {
    controller.postA(req, res);
  } else{
    axios.post(`${API_URL}${req.url}`, req.body, axiosConfig)
    .then((response) => {
      res.send(response.status);
    })
    .catch((error) => {
      res.send(`Error making POST request: ${error}`);
    });
  }

});

app.put('/*', (req, res) => {
  if(req.url.startsWith('/qa/questions') && req.url.endsWith('report')){
    controller.reportQ(req,res);
  }else if(req.url.startsWith('/qa/questions') && req.url.endsWith('helpful')){
    controller.helpfulQ(req,res);
  }else if(req.url.startsWith('/qa/answers')){
    controller.helpfulA(req,res);
  }else{
    axios.put(`${API_URL}${req.url}`, {}, axiosConfig)
    .then((response) => {
      res.send(response.status);
    })
    .catch((error) => {
      res.send(`Error making PUT request: ${error}`);
    });
  }

});

//Start Listen
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});


