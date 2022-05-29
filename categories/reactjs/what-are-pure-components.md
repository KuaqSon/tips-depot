---
title: What are Pure Components?
category: ReactJS
updated: '2022-05-29'
---

### What are Pure Components?

_`React.PureComponent`_ is exactly the same as _`React.Component`_ except that it handles the `shouldComponentUpdate()` method for you. When props or state changes, _PureComponent_ will do a shallow comparison on both props and state. _Component_ on the other hand won't compare current props and state to next out of the box. Thus, the component will re-render by default whenever `shouldComponentUpdate` is called.
