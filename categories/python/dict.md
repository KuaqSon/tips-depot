---
title: Dict
category: Python
updated: '2021-09-15'
---

### Dict

    dict = {}
    dict.keys()
    dict.values()
    "key" in dict    # let's say this returns False, then...
    dict["key"]      # ...this raises KeyError
    dict.get("key")  # ...this returns None
    dict.setdefault("key", 1)
    **dict           # expands all k/v pairs in place
