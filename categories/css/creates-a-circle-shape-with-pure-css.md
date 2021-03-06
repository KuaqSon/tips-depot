---
title: Creates a circle shape with pure CSS
category: Css
updated: '2022-06-11'
---

### Circle

Creates a circle shape with pure CSS.

#### HTML

```html
<div class="circle"></div>
```

#### CSS

```css
.circle {
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background: #333;
}
```

#### Explanation

`border-radius: 50%` curves the borders of an element to create a circle.

Since a circle has the same radius at any given point, the `width` and `height` must be the same. Differing
values will create an ellipse.

#### Browser support

> https://caniuse.com/#feat=border-radius
