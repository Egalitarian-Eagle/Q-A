import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { target: 200, duration: '10s' },
    { target: 400, duration: '20s' },
    { target: 0, duration: '10s' },
  ],
};
export default function () {
  let req1 = {
    method: 'GET',
    url: 'http://localhost:3000/qa/questions?product_id=99999',
  };
  let req2 = {
    method: 'POST',
    url: 'http://localhost:3000/qa/questions/100/answers',
    body: {
      question_id: "100",
      body: "I've thrown it in the wash and it seems fine",
      name: "hello",
      email: "first.last@gmail.com",
      photos: []
    }
  };
  let req3 = {
    method: 'POST',
    url: 'http://localhost:3000/qa/questions',
    body: {
      product_id: "123123",
      body: "I've thrown it in the wash and it seems fine",
      name: "hello",
      email: "0000"
    },
  };
  let req4 = {
    method: 'PUT',
    url: 'http://localhost:3000/qa/answers/10000/helpful',
    body: {
      helpful: 12,
      answer_id: Math.floor(Math.random()*10000)
    }
  };
  let req5 = {
    method: 'PUT',
    url: 'http://localhost:3000/qa/questions/10000/helpful',
    body: {
      question_id: "10000",
      helpful: 12
    }
  };
  let req6 = {
    method: 'PUT',
    url: 'http://localhost:3000/qa/questions/10000/report',
    body: {
      question_id: "10000"
    }
  };
  let responses = http.batch([req4,req5,req6]);

}
