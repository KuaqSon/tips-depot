---
title: Formatting dates with Day.js
category: Dayjs
updated: '2022-09-15'
---

**Get the formatted date using the token string that was supplied. Keep in mind that the current date is in ISO format.**

When we run Day.js in the browser, the .format() method returns a string in ISO format. This is fairly similar to the vanilla JavaScript’s [toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) [date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) method.

```js
console.log(dayjs().format());
//Output: 2022-09-15T09:28:20+01:00
```

#### Put escape characters inside square brackets (e.g. [MM, DD, YY]):

```js
dayjs().format(); // Output: 2022-08-17T09:31:09+01:00
dayjs().format('MM'); // Output: 08
dayjs().format('DD'); // Output: 17
dayjs().format('YY'); // Output: 22
dayjs().format('MMMM'); // August
```

#### Additionally, you can define the format in which you want the date returned on

```js
console.log(dayjs('2022-04-2').format('DD/MM/YYYY')); // Output: 02/04/2022
```

#### The code below will produce an error since it used the wrong date format:

```js
console.log(dayjs('04-2022-2').format('YYYY/MM/DD')); // Output: Invalid Date
```

#### The code below will return the date in the desired format, so let’s test it out. Always remember that a plugin is necessary if you want additional Day.js functionality.

```js
dayjs().format('a'); // am

dayjs().format('A'); // AM

// @ The offset from UTC, ±HHmm
dayjs().format('ZZ'); // +0100

// @ The millisecond, 3-digits
dayjs().format('SSS'); // 912

dayjs().format('h:mm A  '); // 8:28 AM

dayjs().format('h:mm:ss A'); // 8:30:51 AM

dayjs().format('MM/DD/YYYY'); // 08/19/2022

dayjs().format('M/D/YYYY'); // 8/19/2022

dayjs().format('ddd, hA');
// Output:  "Fri, 8AM"

dayjs().format('MMM D, YYYY');
// Aug 19, 2022
```

#### We can also see some advanced date formatting:

```js
dayjs().format('ddd, MMM D, YYYY h:mm A ');
// @ Output: Fri, Aug 19, 2022 8:23 AM

dayjs().format('MMM D, YYYY h:mm A');
// Aug 19, 2022 8:24 AM

dayjs().format('dddd, MMMM D YYYY, h:mm:ss A');
// Output:  "Friday, August 19 2022, 8:15:51 AM"

dayjs().format('dddd, MMMM Do YYYY, h:mm:ss A');
// output => "Friday, August 19o 2022, 8:15:51 AM"
```
