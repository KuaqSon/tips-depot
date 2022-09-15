---
title: Parsing Dates with Day.js
category: Dayjs
updated: '2022-09-15'
---

The Day.js object is immutable, which means that all API operations that modify it in any manner will produce a new instance of the object.

#### String to Date:

Examine the following code to parse a string and return it in a date format.

```js
dayjs('2020-08-04T15:00:00.000Z');
```

#### An existing native JavaScript Date object can be used to create a Day.js object.

```js
let d = new Date(2021, 02, 11);
let day = dayjs(); // The date returned by the first formatted date is copied in this line
```

#### Now with Parse:

See the code below when using Parse to return the current date.

```js
new Date(2021, 02, 11);
// Alternative
dayjs(new Date());
```

### Validation

To check if the date and time are valid, use the .isValid() method in Day.js. which yields a boolean outcome,

```js
dayjs('1996-05-01').isValid(); // Output: true
dayjs('dummy text').isValid(); // Output: false
dayjs('2005-06-09').isValid(); // Output: true
```
