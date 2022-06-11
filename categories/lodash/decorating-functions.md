---
title: Decorating functions
category: Lodash
updated: '2022-06-11'
---

### Throttling

```js
_.throttle(fn);
_.debounce(fn);
```

### Limiting

```js
_.before(5, fn); // only works 5 times
_.after(5, fn); // works only after 5 times
_.once(fn); // like _.before(fn, 1)
```

### Etc

```js
_.wrap(_.escape, (name) => `hi ${name}`)
// same as doing `name = _.escape(name)`

_.delay(fn, 2000)

_.negate(fn)

_.memoize(fn)
_.memoize(fn, ...)
```
