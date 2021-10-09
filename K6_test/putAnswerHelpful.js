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
    "helpful":10,
    "answer_id":10000
  }
  const res=http.post('http://localhost:3000/qa/answers/10000/helpful', obj);
  // console.log('Response time was ' + String(res.timings.duration) + ' ms');
}
