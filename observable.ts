import { fromEvent } from 'rxjs';

let el = document.getElementById('my-element');
let mouseMoveObserve = fromEvent(el, 'mousemove');

mouseMoveObserve.subscribue((ele) => {
  console.log(`${ele.clientX} and ${ele.clientY}`)
})