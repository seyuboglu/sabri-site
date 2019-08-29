---
title: Class Functions
---

This week, we will be introducing another fundamental piece of complex objects: Class Functions. **Class Functions**, or _member functions_, are functions that belong to a specific object.

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Class Functions** - A function packaged within a class. These functions allow us to use or modify the objects stored inside a complex object.

</div>

These functions reside within complex objects, just like attributes. They allow us to make changes to or take advantage of the attributes of a specific complex object.

<a class="anchor-offset" id="example" href="#example"></a>

### Example: The Bot Class

Let us say that we have a `Bot` class, that allows us to build robots capable of buying and holding sodas. These `Bot` objects have 4 attributes: `name`, `age`, `charge`, and `num_sodas`. They as well have two class functions: `buy_sodas` and `is_holding_sodas`. Without getting into the specifics, let us take a look at the following piece of code:

```python
geoff_bot = Bot("GeoffBot")
sabri_bot = Bot("SabriBot")

print(geoff_bot.charge)     # 100.0 charge
print(geoff_bot.num_sodas)  # 0 sodas

print(sabri_bot.charge)     # 100.0 charge
print(sabri_bot.num_sodas)  # 0 sodas

geoff_bot.buy_sodas(4)

print(geoff_bot.charge)     # 93.2 charge
print(geoff_bot.num_sodas)  # 4 sodas

print(sabri_bot.charge)     # 100.0 charge
print(sabri_bot.num_sodas)  # 0 sodas
```

Here we see that calling the function `buy_sodas` changes the attributes of `geoff_bot`, but not the attributes of `sabri_bot`. This is because the function uses and modifies the object to which it is attached.

<a class="anchor-offset" id="syntax" href="#syntax"></a>

### Syntax of Class Functions

These functions are just like any other functions. They can take objects (parameters) and return objects. However, the only difference is that they _must_ be attached to an object of the right class. This is because these functions often use information attached to the class of interest. We can use these functions by using the "dot" notation that we saw in the _Complex Objects_ notes. Here we can see an example of a class function returning `True` or `False`, depending on whether or not the specific `Bot` object is currently holding sodas.

```python
print(geoff_bot.is_holding_sodas()) # True
print(sabri_bot.is_holding_sodas()) # False
```

Class Functions are powerful and extremely common in Python. They allow programmers to create powerful classes that are both organized and easy to use. By packaging code into classes, programmers are able to share code and build versatile progams that are easy to expand and improve.

