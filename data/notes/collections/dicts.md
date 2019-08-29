---
title: Dictionaries (Dicts)
---

The second of the two data structures that we will cover this week is the **`Dict`**, or dictionary, class. This data structure is incredibly common, especially in programs that use and pass around large amounts of information.

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Dict** - A data structure that matches keys with values. Dictionaries are unordered, and the keys must be unique. Just like lists, dicts can grow to be incredibly large.

</div>

_Keys_ are objects that allow access to _values_, which are other objects. Dictionaries allow developers to store a lot of information under an easily searchable title. They are very similar to real dictionaries, which stores whole definitions next to easily searchable, singular words.

```python
favorite_songs = Dict()
favorite_songs.add("Sabri", "Single Ladies by Beyoncé")
favorite_songs.add("Geoff", "Love Story by Taylor Swift")

print(favorite_songs.get("Geoff")) # prints "Love Story"
```

<a class="anchor-offset" id="using-dicts" href="#using-dicts"></a>

### Using Dicts

The primary difference between lists and dicts is the concept using keys to keep track of values. `Dict` objects use keys, which means that we have no need to keep the items in the data structure in order. This also means that we can use any object to keep track of our values. Lists only allow us to use indices, which can only be integers.

Being able to use keys is the primary strength of dictionaries; however, it is also its biggest weakness. We can only look up values using keys; we cannot look up keys using values. This one-way street means that we must be careful about how we organize our information.

```python
birthdays = Dict()
birthdays.add("Sabri", "May 30th, 1996")
birthdays.add("Geoff", "February 29th, 1996")

print(birthdays.get("Geoff")) # prints "February 29th, 1996"
print(birthdays.get("May 30th, 1996")) # error
```

<a class="anchor-offset" id="documentation" href="#documentation"></a>

### The Documentation

For the sake of reinforcing the topics of this class, we have created `List` and `Dict` classes that closely resemble the functionality of the built-in Python list and dictionary classes. In order to clear up any confusion, here is the documentation for our `Dict` class.

_Functions:_

`Dict()`
Creates an empty `Dict` object.

`add(Object key, Object value)`
Places the `key`-`value` pair into the dictionary. You can then use the `key` in order to find the `value`. Both `key` and `value` can be any type of object. Remember that the `key` must be unique! If not, `value` will overwrite the existing value.

`get(Object key)`
Returns the object at the given `key` of the dict on which it is called.

`delete(Object key)`
Deletes the object at the given `key` of the dict on which it is called.

_Attributes:_

`length`
Tells the length of the dict.
