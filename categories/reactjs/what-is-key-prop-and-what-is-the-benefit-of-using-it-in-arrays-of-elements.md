---
title: What is "key" prop and what is the benefit of using it in arrays of elements?
category: ReactJS
updated: '2022-05-29'
---

### What is "key" prop and what is the benefit of using it in arrays of elements?

A `key` is a special string attribute you **should** include when creating arrays of elements. _Key_ prop helps React identify which items have changed, are added, or are removed.

Most often we use ID from our data as _key_:

```jsx harmony
const todoItems = todos.map((todo) => <li key={todo.id}>{todo.text}</li>);
```

When you don't have stable IDs for rendered items, you may use the item _index_ as a _key_ as a last resort:

```jsx harmony
const todoItems = todos.map((todo, index) => <li key={index}>{todo.text}</li>);
```

**Note:**

1. Using _indexes_ for _keys_ is **not recommended** if the order of items may change. This can negatively impact performance and may cause issues with component state.
2. If you extract list item as separate component then apply _keys_ on list component instead of `li` tag.
3. There will be a warning message in the console if the `key` prop is not present on list items.
