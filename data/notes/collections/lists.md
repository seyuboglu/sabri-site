---
title: Lists
---

This week, we are covering two powerful complex object classes. These classes allow us to store and organize massive amounts of information easily and efficiently. We call these types of objects _data structures_. They are the building blocks of some of the most powerful programs, the structures used in the design of some of the most elaborate algorithms and systems in use today.

The first data structure we will cover is the **`List`**.

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**List** - A data structure that stores objects in order. You can add, find, and delete objects. You can have multiple objects of the same value in a list.

</div>

```python
shopping_list = List()
shopping_list.add("Guarana")
shopping_list.add("Bread")
shopping_list.add("Bread")
shopping_list.add("Paçoca")

for food in shopping_list:
    print(food) # prints "Guarana", "Bread", "Bread", "Paçoca"
```
<a class="anchor-offset" id="thinking-about-lists" href="#thinking-about-lists"></a>

### Thinking About Lists

Lists are like queues, or lines, you see in the real world when you go to the supermarket or to the movies. When something is added to a list, it goes to the end of the list. In addition, the items in the always stay in order. If something in the middle of a list is removed, the items behind it shuffle forward to fill the empty space.

You can find things in lists by verifying each object using its **index**.

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Index** - The place of an object in a list. In Python, the first item of a list always has an index of 0.

</div>

Indices are used to find things in lists. Much like we use numbers to differentiate between floors in a tall building, we can use numbers to access different items in lists.

<a class="anchor-offset" id="using-lists" href="#using-lists"></a>

### Using Lists

In the prior set of notes, _Class Functions_, we explained that classes can have functions associated with them. These functions allow us to use or modify the objects stored inside the object itself. The implementation of List that we will be using in this class has a simple set of class functions. We will go over each of them in detail below.

##### The `add` Function

The `add` function is simple. It allows the user to add an object to the end of a list. This increases the `length` attribute of the list by 1. The object added can be of any type.

```python
shopping_list = List()
shopping_list.add("Lemon")
```

##### The `get` Function

The `get` function uses the `index` idea that we covered earlier in this set of notes. In order to get an object from inside of a list, you must use the `get` function and pass in an `index` integer object. 

```python
followers = List()
followers.add("geoff1234")
followers.add("sabri5678")

sabri_username = followers.get(1)
print(sabri_username) # prints "sabri5678"
```

Remember that lists are zero-indexed. This means that the first element has the index 0, the second element has the index 1, etc. 

##### The `delete` Function

The `delete` function works in a way that is very similar to `get`, in the sense that it requires an `index` integer object in order to find the element of interest. The difference is that `delete` removes the element at the given `index`.

```python
watch_list = List()
watch_list.add("The Avengers")
watch_list.add("Harry Potter")
watch_list.add("Star Wars")
watch_list.remove(1) # removes "Harry Potter"

print(watch_list.get(0)) # prints "The Avengers"
print(watch_list.get(1)) # prints "Star Wars"
```

<a class="anchor-offset" id="lists-for-loops" href="#lists-for-loops"></a>

### Lists and For Loops

You can see every element of a list by using the `for`... `in` structure of a `for` loop. This is best explained using examples.

```python
countries = List()
countries.add("United States")
countries.add("Brazil")
countries.add("China")
countries.add("India")

for country in countries:
    print(country)
```

The above simply prints each country in the list in order. The `for` loop implicitly initializes the variable `country` with the value of each of the items in the list, moving forward every time it finishes a repetition.

##### Remembering Range

Remember the function `range`? The one we have been using in `for` loops? As it turns out, it is a function that returns a list of numbers! We didn't tell you earlier because we didn't want to confuse you. The list created by `range` is just a list of numbers starting at zero:

```python
x = range(5)
print(x.get(0)) # prints 0
print(x.get(1)) # prints 1
print(x.get(2)) # prints 2
print(x.get(3)) # prints 3
print(x.get(4)) # prints 4
```

It is not a very interesting function until you find yourself in a `for` loop. Then, you can use the numbers represented by `i` in `for i in range` to index another list. This means that this piece of code...

```python
countries = List()
countries.add("United States")
countries.add("Brazil")
countries.add("China")
countries.add("India")

for country in countries:
    print(country)
```

... does the same thing as this piece of code:

```python
countries = List()
countries.add("United States")
countries.add("Brazil")
countries.add("China")
countries.add("India")

for i in range(countries.length):
    print(countries.get(i))
```

Crazy right?

<a class="anchor-offset" id="documentation" href="#documentation"></a>

### The Documentation

For the sake of reinforcing the topics of this class, we have created `List` and `Dict` classes that closely resemble the functionality of the built-in Python list and dictionary classes. In order to clear up any confusion, here is the documentation for our `List` class.

_Functions:_

`List()`
Creates an empty `List` object.

`add(Object obj)`
Adds `obj` to the end of the list on which it is called. `obj` can be any type of object.

`get(int index)`
Returns the object at the given `index` of the list on which it is called. Remember that lists are zero-indexed!

`delete(int index)`
Deletes the object at the given `index` of the list on which it is called. If something in the middle of a list is removed, the items behind it shuffle forward to fill the empty space. Remember that lists are zero-indexed!

_Attributes:_

`length`
Tells the length of the list.

