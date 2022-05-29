---
title: What are fragments?
category: ReactJS
updated: '2022-05-29'
---

### What are fragments?

It's a common pattern in React which is used for a component to return multiple elements. _Fragments_ let you group a list of children without adding extra nodes to the DOM.

```jsx harmony
render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  )
}
```

There is also a _shorter syntax_, but it's not supported in many tools:

```jsx harmony
render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  )
}
```

### Why fragments are better than container divs?

Below are the list of reasons,

1. Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
2. Some CSS mechanisms like _Flexbox_ and _CSS Grid_ have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
3. The DOM Inspector is less cluttered.
