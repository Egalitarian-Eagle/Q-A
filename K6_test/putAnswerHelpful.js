import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  const obj = {

    "helpful":10,
    "answer_id":10000

  }
  const res=http.post('http://localhost:3000/qa/answers/10000/helpful', obj);
  // console.log('Response time was ' + String(res.timings.duration) + ' ms');
}
