---
title: Filtering
category: Lodash
updated: '2022-06-11'
---

### Filtering

```js
_.drop([abcdef], 2); // → [   cdef ]
_.dropRight([abcdef], 2); // → [ abcd   ]
_.take([abcdef], 2); // → [ ab     ]
_.takeRight([abcdef], 2); // → [     de ]
_.slice([abcdef], 2, 4); // → [   cd   ]
```

```js
_.initial([abcdef]); // → [ abcde  ] - dropRight(list, 1)
_.rest([abcdef]); // → [  bcdef ] - takeRight(list, 1)
```

```js
_.dropWhile(list, 'active')            // works like filter
_.dropWhile(list, 'active', true)
_.dropWhile(list, { active: true })
_.dropWhile(list, (n) => ...)
_.dropRightWhile(list, ...)
```

```js
_.without([abcde], b); // → [ acde ]
```

```js
_.remove(list, (n) => n % 2);
```
