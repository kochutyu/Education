import {
    interval
} from 'rxjs';
import {
    map,
    filter,
    tap,
    take,
    takeLast,
    takeWhile,
    scan,
    reduce
} from 'rxjs/operators';

//* tap - show all elements by cycle. 
//* tap - transform object. 
//* filter - filter object.
//* take - restrict count of elements.
//* takeLast - return 5 last object but work only after completed subscribe.
//* takeWhile - return obj and work in subscription. by condition.
//* scan - analog for reduce and work in subscription.
//* reduce - work only after completed subscribe.
//! MORE INFO ABOUT OPERATORS

const stream$ = interval(1000)
    .pipe(
        tap(v => console.log('tap:', v)),
        // map(v => v * 13),
        // filter(v => v % 2 === 0),
        take(5),
        // takeLast(3),
        takeWhile(v => v < 5),
        // scan((acc, v) => acc + v),
        // reduce((acc, v) => acc + v),
    );

stream$.subscribe({
    next: res => console.log('next:', res),
    complete: res => console.log('Completed!')
});