---
title: XPath Siblings
category: xpath
updated: '2022-05-29'
---

### XPath Siblings

| CSS        | Xpath                                |
| ---------- | ------------------------------------ |
| `h1 ~ ul`  | `//h1/following-sibling::ul`         |
| `h1 + ul`  | `//h1/following-sibling::ul[1]`      |
| `h1 ~ #id` | `//h1/following-sibling::[@id="id"]` |
