import {
  interval
} from 'rxjs';

import {
  filter,
  map,
  take,
  scan,
} from 'rxjs/operators';

const btn = document.getElementById('interval')
const rxjsBtn = document.getElementById('rxjs')
const display = document.querySelector(' .result')

const people = [{
    name: 'Vladilen',
    age: 25
  },
  {
    name: 'Elena',
    age: 17
  },
  {
    name: 'Ivan',
    age: 18
  },
  {
    name: 'Igor',
    age: 14
  },
  {
    name: 'Lisa',
    age: 32
  },
  {
    name: 'Irina',
    age: 23
  },
  {
    name: 'Oleg',
    age: 20
  }
]

//* Using only JS
btn.addEventListener('click', () => {
  let i = 0;
  let names = [];

  const interval = setInterval(function () {

    if (people[i]) {
      btn.disabled = true;
      names.push(people[i].name);
      display.textContent = names.join(', ');
      i++;
    } else {
      btn.disabled = false;
      clearInterval(interval);
    }

  }, 1000);

})

//* Using only RxJS
rxjsBtn.addEventListener('click', () => {
  rxjsBtn.disabled = true;

  interval(1000)
    .pipe(
      take(people.length),
      filter(item => people[item].age > 18),
      map(item => people[item].name),
      scan((acc, item) => acc.concat(item), [])
    )
    .subscribe(
      res => {
        display.textContent = res.join(', ');
      },
      null,
      () => {
        rxjsBtn.disabled = false;
      }
    )
})