import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const obj = {
    "question_id": "100",
    "body": "I've thrown it in the wash and it seems fine",
    "name": "hello",
    "email": "first.last@gmail.com",
    "photos": []
  }
  http.post('http://localhost:3000/qa/questions/100/answers', obj)
}
