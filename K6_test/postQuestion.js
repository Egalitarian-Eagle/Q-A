import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const obj = {
    "product_id": 123123,
    "body": "I've thrown it in the wash and it seems fine",
    "name": "hello",
    "email": "0000"
  }
  http.post('http://localhost:3000/qa/questions', obj)
}