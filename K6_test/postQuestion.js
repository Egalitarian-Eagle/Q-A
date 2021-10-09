import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    { target: 200, duration: '10s' },
    { target: 400, duration: '30s' },
    { target: 300, duration: '10s' },
    { target: 0, duration: '10s' },
  ],
};
export default function () {
  const obj = {
    "product_id": 123123,
    "body": "I've thrown it in the wash and it seems fine",
    "name": "hello",
    "email": "0000"
  }
  http.post('http://localhost:3000/qa/questions', obj)
}