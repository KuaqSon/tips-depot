---
title: XPath attribute selectors
category: xpath
updated: '2022-05-29'
---

### XPath attribute selectors

| CSS                    | Xpath                           |
| ---------------------- | ------------------------------- |
| `#id`                  | `//*[@id="id"]`                 |
| `.class`               | `//*[@class="class"]`           |
| `input[type="submit"]` | `//input[@type="submit"]`       |
| `a#abc[for="xyz"]`     | `//a[@id="abc"][@for="xyz"]`    |
| `a[rel]`               | `//a[@rel]`                     |
| ----                   | ----                            |
| `a[href^='/']`         | `//a[starts-with(@href, '/')]`  |
| `a[href$='pdf']`       | `//a[ends-with(@href, '.pdf')]` |
| `a[href*='://']`       | `//a[contains(@href, '://')]`   |
| `a[rel~='help']`       | `//a[contains(@rel, 'help')]`   |
