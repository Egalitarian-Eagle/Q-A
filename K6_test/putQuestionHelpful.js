

import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    { target: 200, duration: '1m' },
    { target: 500, duration: '1m' },
    { target: 300, duration: '1m' },
    { target: 0, duration: '1m' },
  ],
};
export default function () {
  const obj = {
    "question_id": 10000,
     "helpful": 12
    }
  http.post('http://localhost:3000/qa/questions/10000/helpful', obj)
}