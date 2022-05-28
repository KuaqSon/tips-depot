---
title: Composing
category: Sass
updated: '2021-05-15'
---

### Composing

```scss
@import './other_sass_file';
@use './other_sass_file';
```

The `@import` rule is discouraged because will get eventually [removed from the language](https://sass-lang.com/documentation/at-rules/import).
Instead, we should use the [`@use` rule](https://sass-lang.com/documentation/at-rules/use).
The `.scss` or `.sass` extension is optional.
