---
title: Strings
category: Lodash
updated: '2022-06-11'
---

### Transforming

```js
_.capitalize('hello world'); // → 'Hello world'
_.startCase('hello_world'); // → 'Hello World'
_.snakeCase('hello world'); // → 'hello_world'
_.kebabCase('hello world'); // → 'hello-world'
_.camelCase('hello world'); // → 'helloWorld'
```

### Padding

```js
_.pad('abc', 3); // → 'abc'
_.pad('abc', 8); // → '   abc  '
_.pad('abc', 8, '_-'); // → '_-abc_-_'
_.padStart('abc', 3); // → 'abc'
_.padStart('abc', 6); // → '   abc'
_.padStart('abc', 6, '_-'); // → '_-_abc'
_.padEnd('abc', 3); // → 'abc'
_.padEnd('abc', 6); // → 'abc   '
_.padEnd('abc', 6, '_-'); // → 'abc_-_'
```

### Trim

```js
_.trim('  str  '); // → 'str'
_.trimLeft('  str  '); // → 'str  '
_.trimRight('  str  '); // → '  str'
```

### Etc

```js
_.repeat('-', 2); // → '--'
_.deburr('déjà vu'); // → 'deja vu'
_.trunc('hello world', 5); // → 'hello...'
```

```js
_.startsWith('abc', 'a'); // → true
_.endsWith('abc', 'c'); // → true
```
