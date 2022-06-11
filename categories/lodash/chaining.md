---
title: Chaining
category: Lodash
updated: '2022-06-11'
---

### Chaining

#### Chain and value

```js
_([1, 2, 3])
  .reduce((total, n) => total + n)
  .map((n) => n * n)
  .tap(console.log)
  .thru((n) => n.reverse())
  .value();
```
