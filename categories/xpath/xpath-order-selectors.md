---
title: XPath order selectors
category: xpath
updated: '2022-05-29'
---

### XPath order selectors

| CSS                      | Xpath                     |
| ------------------------ | ------------------------- |
| `ul > li:first-of-type`  | `//ul/li[1]`              |
| `ul > li:nth-of-type(2)` | `//ul/li[2]`              |
| `ul > li:last-of-type`   | `//ul/li[last()]`         |
| `li#id:first-of-type`    | `//li[1][@id="id"]`       |
| `a:first-child`          | `//*[1][name()="a"]`      |
| `a:last-child`           | `//*[last()][name()="a"]` |
