import http from 'k6/http';
import { sleep, check } from 'k6';
// export let options = {
//   stages: [
//     { target: 30, duration: '20s' },
//     { target: 50, duration: '20s' },
//     { target: 0, duration: '20s' },
//   ],
// };

export default function () {
  const response = http.get('http://localhost:3000/qa/questions?product_id=99999');
  sleep(1);
  check(response,{

    "status is 200": (r) => r.status === 200,
      // "content is present": (r) => r.body.indexOf("Dolorem aut eveniet dolorem") !== -1,

  });

}