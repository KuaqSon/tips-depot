---
title: Why replace Moment.js?
category: Dayjs
updated: '2022-09-15'
---

Moment.js is a JavaScript package that makes it very simple to parse, validate, manipulate, and display dates and times in JavaScript.

Since the Moment.js team issued a deprecation notice regarding its use, developers have been forced to migrate to Day.js and other suggested libraries. The disadvantages of Moment.js are listed below.

- Moment.js doesn’t work well with [tree-shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) because it causes a large bundle size and performance problems.
- Moment.js has a problem that affects mutability.
- However, because of its complicated [APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction) and large bundle size, it could result in a significant performance penalty if you are working on a web application that requires high performance.
