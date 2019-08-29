---
title: Advanced Objects
---

So far you have learned about the four basic object classes: string, integer, float, and bool. 

```python
# This is a string
name = "Geoffrey Angus"

# This is an integer
age = 22

# This is a float
height = 1.7272

# This is a bool
is_teacher = True
```

This week, you are going to learn about more complex objects. These are objects capable of keeping track of more than one piece of information.

```python
person_1 = Person()
person_1.set_name("Geoffrey Angus")
person_1.set_age(22)
person_1.set_height(1.7272)
person_1.set_teacher_status(True)

print(person_1.get_name()) # prints "Geoffrey Angus"
print(person_1.get_age()) # prints 22
print(person_1.get_height()) # prints 1.7272
print(person_1.get_teacher_status()) # prints True
```

Above, we can see how a complex object could work. The variable called `person_1` labels the object created by the `Person()` function. After the first line, the `person_1` variable labels an object that does not contain any information. However, in this specific case, there are functions built into the object that allow us to add and retrieve information about the object. Typically, we can find functions and pieces of information stored by an object in its **documentation**

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Documentation** - In Computer Science, a page that contains all of the information about a specific class of object. This web page usually describes every function and object the class uses and keeps track of.
</div>

### Vending Machine Metaphor

Think about vending machines. As an idea, they are all vending machines. But in real life, they are all unique vending machines, each with different prices and food choices. When you buy a snack in a vending machine, the condition of that vending machine changes. However, the condition of all of the other vending machines stay the same.



