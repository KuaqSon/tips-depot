---
title: How to Generate a Date’s Unix Timestamp
category: Dayjs
updated: '2022-09-15'
---

This gives the Day.js object’s [Unix timestamp](https://www.unixtimestamp.com/), or the number of seconds since the Unix Epoch. The Unix timestamp object is a built-in object in Day js, therefore using it doesn’t call for a plugin.

#### Without milliseconds:

```js
dayjs('2019-01-25').unix(); // Output: 1548370800
```

#### With milliseconds:

```js
dayjs('2019-01-25').valueOf(); // Output: 1548370800000
```

> **Use of the Unix Timestamp is always recommended, according to the Day.js documentation.**
