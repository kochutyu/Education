import {
    of ,
    from,
    Observable,
    fromEvent,
    range,
    timer,
    interval
} from 'rxjs';

import {
    map,
    scan
} from 'rxjs/operators';


// TODO: get context.
const canvas = document.getElementById('canvas');
const clear = document.getElementById('clear');

//? --------------|
//? CREATE STREAM |
//? --------------|

//* of - set value in function as argunments
const ofStream$ = of (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

ofStream$.subscribe(res => {
    console.log('of:', res);
});

//* from - set value in function as array
const fromStream$ = from([1, 2, 3]).pipe(
    scan((acc, v) => acc.concat(v), [])
);

fromStream$.subscribe(res => {
    console.log('from:', res);
});

//* Observable - we can set new logic in this stream. For example set next value, set error, complete stream;
const observable$ = new Observable(observer => {
    setTimeout(() => observer.next('after 1000ms'), 1000);
    setTimeout(() => observer.complete(), 2000);
    setTimeout(() => observer.error('error 2000ms'), 3000);
});

observable$.subscribe(res => {
    console.log('observable res:', res);
}, err => console.log('observable error:', err), () => console.log('Observable is complated!'));

//* fromEvent
fromEvent(canvas, 'click') // TODO: paint canvas.
    .pipe(
        map(event => ({
            x: event.offsetX,
            y: event.offsetY,
            ctx: event.target.getContext('2d')
        }))
    )
    .subscribe(res => {
        res.ctx.fillRect(res.x, res.y, 10, 10);
    })

fromEvent(clear, 'click') // TODO: clear canvas.
    .subscribe(() => {
        canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    })

//* interval - analog fot setInterval in RxJS
const interval$ = interval(500).subscribe((value) => console.log('interval:', value));

//* timer - analog fot setTimeout in RxJS
const timer$ = timer(5000).subscribe(() => interval$.unsubscribe());

//* range - help get necessary тumber in RxJS
const range$ = range(40, 60).subscribe((value) => console.log('range:', value));