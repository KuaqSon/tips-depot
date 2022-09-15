---
title: Manipulating Dates and Times
category: Dayjs
updated: '2022-09-15'
---

#### To be able to get the date and time for tomorrow, we can start with today’s date and time, and add a day to it:

```js
dayjs().add(1, 'day').format('YYYY-MM-DD');
```

#### In addition to adding a day, you can also add month and year and even time-based intervals like hour and minute:

```js
dayjs().add(1, 'hour').format('YYYY-MM-DD HH:mm:ss');
dayjs().add(30, 'minute').format('YYYY-MM-DD HH:mm:ss');
dayjs().add(3, 'month').format('YYYY-MM-DD HH:mm:ss');
dayjs().add(3, 'year').format('YYYY-MM-DD HH:mm:ss');
```

#### You can even chain it to do things like add multiple intervals:

```js
dayjs().add(1, 'hour').add(30, 'minute').format('YYYY-MM-DD HH:mm:ss');
```

#### Don’t you worry, there’s a subtraction method as well:

```js
dayjs().subtract(4, 'hour').format('YYYY-MM-DD HH:mm:ss');
```
