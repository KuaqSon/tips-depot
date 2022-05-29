---
title: Other things
category: xpath
updated: '2022-05-29'
---

### Other things

| CSS                     | Xpath                             |
| ----------------------- | --------------------------------- |
| `h1:not([id])`          | `//h1[not(@id)]`                  |
| Text match              | `//button[text()="Submit"]`       |
| Text match (substring)  | `//button[contains(text(),"Go")]` |
| Arithmetic              | `//product[@price > 2.50]`        |
| Has children            | `//ul[*]`                         |
| Has children (specific) | `//ul[li]`                        |
| Or logic                | `//a[@name or @href]`             |
| Union (joins results)   | `//a or //div`                    |
