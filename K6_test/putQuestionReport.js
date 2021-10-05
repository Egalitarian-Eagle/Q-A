import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const obj = {
    "question_id": 10000
    }
  http.post('http://localhost:3000/qa/questions/10000/report', obj)
}