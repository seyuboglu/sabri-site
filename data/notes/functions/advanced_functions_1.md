---
title: Advanced Functions Part 1
---

In the last two weeks, we have used and created many functions.

Here we are going to cover new types of functions. These functions are capable of taking in information, and give back information. We will be introducing some new functions -- functions that will allow us to work with variables and operators in interesting ways.

<a class="anchor-offset" id="passing-parameters" href="#passing-parameters"></a>
### Passing Parameters

Remember the `print` and `range` functions? We introduced them as "special" functions, capable of taking in information and using the information to accomplish something. The `print` function allowed us to write messages using the string we put inside the parentheses. The `range` function allowed us to specify the number of times we wanted to execute the code inside some `for` loop.

We sometimes pass (or give) **parameters**, to functions.

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Parameter** - An object given to a function for it to use when executing the code inside of it.

</div>

We pass parameters to functions in order to specify what we want them to do. All we have to do in order to pass a parameter to a function is put a value in between its parentheses when we call the function. In this week's exercises, we are going to be introducing a new function called `random_int`. We need to pass two parameters called `min_number` and `max_number`. These two parameters specify what we want from the function. Here, we establish that we want a random number between `min_number` and `max_number`.

```python
# Gives us one of the following numbers: 5, 6, 7, or 8. 
x = random_int(5, 8)

# Gives us a number between 10 and 100.
y = random_int(10, 100)
```

Parameter passing allow us to write functions that adapt to our needs. Above, we see that we store the values of the `random_int` function calls in variables `x` and `y`. In computer science, we say that the `random_int` function **returns** a value to us for us to use.

<a class="anchor-offset" id="returning-values" href="#returning-values"></a>
### Returning Values


Do you remember the functions `has_fruit`, `is_front_blocked`, and `front_is_blocked`? We taught in class that these functions could ask PyBot questions. We said that these functions could give us `True` or `False` responses to questions. In actuality, these functions **returned** objects in order to communicate results.


<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Return** - To create an object and give it back to the user. The object can be any variable class (Integers, Floats, Strings, Booleans, etc.). We can store this object in a variable.

</div>

Some functions are capable of _creating_ the objects that we need. These functions sometimes take parameters, sometimes they don't. Examples of each type include the `capitalize_string` function, `random_bool` function, and the `input_int`, `input_float`, and `input_string` functions.

The `capitalize_string` function is a function that requires a single `string` object (parameter). If we call this function, it will _create_ a new `string` object that is based on the parameter we gave the function. Here is an example of `capitalize_string` in action:

```python
message = "cs106r"
capitalized_message = capitalize_string(message)
print(message)             # prints "cs106r"
print(capitalized_message) # prints "CS106R"
```

The object created by `capitalize_string` is completely separate from the `message`  variable. Because it is a new object, we have _label_ the object with a variable. That is why we have the variable `capitalized_message`. 

In summary,`capitalize_string` executes code that creates a new object. We catch and label this new object with the variable `capitalized_message`. We can then print out both `message` and `capitalized_message`, because they are two _separate_ objects.

The `random_bool` function works just like the `random_int` function. It will _return_ to the programmer `True` or `False` randomly. However, it does not take any parameters. It doesn't have to, because there are only two values to choose from, `True` and `False`! The returned value takes the place of the function call when the program is executed. Let's take a look at an example:

<div class="example-section" markdown="1">

<span class="example-title">Example</span>
Here we are going to create a program that randomly selects a person. Here is what our code looks like right now:

```python
is_selected = random_bool()
print("Welcome to the selection process!")
print("Loading your selection result...")
print(is_selected)
```

The `random_bool` function will _return_ to us either `True` or `False`, and that value will be stored in the variable `is_selected`. Here, the program will simply print `True` if you have been selected and `False` if you haven't been selected. What if we wanted to make our program easier to understand? We could use the `boolean` value returned by the `random_bool` function in an `if` statement, just like we did with PyBot! Here's what that code would look like:

```python
is_selected = random_bool()
print("Welcome to the selection process!")
print("Loading your selection result...")
if is_selected:
    print("Congratulations! You have been selected!")
else:
    print("Sorry, you haven't been selected. Better luck next time.")
```

Now, what if we wanted to randomly select from 10 people? We could use a `for` loop. However, we have to be careful. Returning functions _execute again every time they are called_. This means that in the case of `random_bool`, the function will output a different randomly selected `bool` value every time it is called. This is what we want! It is important that we put `random_bool` _inside_ the `for` loop. Otherwise, we will only get one value for all 10 people. Here is what the correct code looks like:

```python
print("Welcome to the selection process!")
for i in range(10):
    is_selected = random_bool()
    print("Loading your selection result...")
    if is_selected:
        print("Congratulations! You have been selected!")
    else:
        print("Sorry, you haven't been selected. Better luck next time.")  
```
</div>

Finally, to put all these ideas together, we have the `input_string`, `input_int`, and `input_float` functions. These functions both take parameters _and_ return values. All of the functions do basically the same thing -- they take one `message` parameter (a `string`), which acts as a prompt to the user. When the program is run, the value given by the user is returned. The value class depends on the function used. Here is an example of each one, starting with `input_string`:

```python
response = input_string("Do you like Beyoncé?")
if response == "Yes":
    print("Great, me too!")
else:
    print("You should listen to her album, titled `"4`".")
```

Here is an example with `input_int`:

```python
num_exponent = input_int("Enter the value you want to multiply with itself:")
print("Here is your result:")
print(num_exponent * num_exponent)
```

Finally, here is an example with `input_float`:

```python
temp_celsius = input_float("Enter the temperature you want to convert to Fahrenheit:")
temp_fahrenheit = temp_celsius * 1.8 + 32
print("Here is your result:")
print(temp_fahrenheit)
```

The ability to pass parameters and return values make functions much more powerful than they ever were before. Get some practice using the functions described above; next week, we will be defining functions capable of doing the same thing.