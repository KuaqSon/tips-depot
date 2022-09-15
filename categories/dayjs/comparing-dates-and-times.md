---
title: Comparing Dates and Times
category: Dayjs
updated: '2022-09-15'
---

One of the more complex tasks that comes up pretty regularly in development is the comparison of dates and times. Day.js makes it easy be providing helper methods such as `isBefore()` and `isAfter()`:

```js
const date1 = dayjs('2020-01-1');
const date2 = dayjs();

if (date1.isBefore(date2)) {
  console.log('Date 1 falls before date 2');
} else if (date1.isAfter(date2)) {
  console.log('Date 2 falls before date 1');
} else if (date1.isSame(date2)) {
  console.log('Date 1 and date 2 are the same');
}
```
