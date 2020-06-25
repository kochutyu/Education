import {
    Subject,
    BehaviorSubject,
    ReplaySubject
} from 'rxjs';

//?---------|
//? Subject |
//?---------|

const subjectContext = document.getElementById('subjects');
console.log(subjectContext);


//* Subject - analog for Observeble but it can emit value out of subscription;
subjectContext.addEventListener('click', () => {
    console.log('----------------------------');

    const subject$ = new Subject(); // step 1

    subject$.next('Subject 1'); // step 2
    subject$.next('Subject 2'); // step 3

    subject$.subscribe(res => console.log(res)); // step 4

    subject$.next('Subject 3'); // step 5
}); // TODO: next work only subscribe.

//* BehaviorSubject - is as Subject but has default value by subscribe.
subjectContext.addEventListener('click', () => {
    const subject$ = new BehaviorSubject('Init BehaviorSubject'); // step 1

    subject$.subscribe(res => console.log(res)); // step 2

    subject$.next('BehaviorSubject 1'); // step 3
    subject$.next('BehaviorSubject 2'); // step 4

    subject$.subscribe(res => console.log(res)); // step 5

    subject$.next('BehaviorSubject 3'); // step 6
}); // TODO: next work after subscribe and befor subscribe but save last value.

//* ReplaySubject - is as Subject but has default value by subscribe.
subjectContext.addEventListener('click', () => {
    const subject$ = new ReplaySubject(2); // step 1

    subject$.next('ReplaySubject 1'); // step 6
    subject$.next('ReplaySubject 2'); // step 6
    subject$.next('ReplaySubject 3'); // step 6

    subject$.subscribe(res => console.log(res)); // step 2

    subject$.next('ReplaySubject 4'); // step 6
    subject$.next('ReplaySubject 5'); // step 6
    subject$.next('ReplaySubject 6'); // step 6

}); // TODO: next work after subscribe and befor subscribe. Also can save in bufer values which were call before subscribe.