---
title: Currying
category: Lodash
updated: '2022-06-11'
---

### Currying

```js
greet = (greeting, name) => `${greeting}, ${name}!`;
```

```js
fn = _.partial(fn, 'hi');
fn('joe'); // → 'hi, joe!'

fn = _.partial(fn, 'joe');
fn('yo'); // → 'yo, joe!'
```

```js
_.curry(greet)('hi'); // → function(name)
_.curryRight(greet)('joe'); // → function(greet)
```
