---
title: Operators
---

Variables are how computers store information. But what good is storing information without the ability to make them interact?

The four variable classes we have covered so far - ints, floats, booleans, and strings - interact through what are called **operators**.

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Operators** - Symbols used to allow values to interact.

</div>

Operators allow variables or raw values (ints, floats, booleans, and strings NOT stored in variables) to change value and often interact with each other. In fact, here is a familiar operator in action:

```python
if not front_is_blocked():
    move()
```

The `not` operator changes the value of `front_is_blocked()` a conditional function that can have either `True` or `False` values. Both `True` and `False` are what we call boolean values (read back to the _Variables_ notes to see why). The whole phrase `not front_is_blocked()` in the conditional statement above is what is called an **expression**. 

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Expression** - A group of one or more variables, functions, and/or raw values joined together by operators.

</div>

There are three main types of operators: _logical_, _arithmetic_, and _relational_.

<a class="anchor-offset" id="logical-operators" href="#logical-operators"></a>
### Logical Operators

You already know a little bit about logical operators! We went over them briefly in the _Conditional Statements_ notes.

As review, the three logical operators are the following:

1. `not`
2. `and`
3. `or`

These logical operators are the foundation of conditional statements. They allow us to combine boolean values (`True` and `False`) in interesting ways. Let's quickly go over the usage of each of these operators.

#### The `not` Operator

The `not` operator simply flips the boolean value that follows it. If an expression says `not True`, it becomes `False`. If an expression says `not False`, it becomes `True`.

#### The `and` Operator

An expression with the `and` operator can only be `True` if every value surrounding the expression is `True`. Let's take the following example:

```python
# Expression 1
if True and True:
    move()

# Expression 2
if True and False:
    move()

# Expression 3
if False and True:
    move()

# Expression 4
if False and False:
    move()
```

Only Expression 1 would cause PyBot to move.

#### The `or` Operator
An expression with the `or` operator is `True` if every _at least one_ of the values surrounding the expression is `True`. Let's take the following example:

```python
# Expression 1
if True or True:
    move()

# Expression 2
if True or False:
    move()

# Expression 3
if False or True:
    move()

# Expression 4
if False or False:
    move()
```

Expressions 1, 2, and 3 would cause PyBot to move.

#### Variables, Functions, and Logical Operators

Indeed, the above expressions make use of raw boolean values in order to make a point. In PyBot, we covered the fact that functions can have boolean values. Here, we want to be clear that we can use anything - variables, raw values, and functions - with a boolean value when making expressions with logical operators. Like this:

```python
is_new_pybot = True

if has_fruit() and is_new_pybot:
    pick_fruit()
```

Here, we mix the use of a boolean valued variable with a boolean valued function, and that is totally okay!

<a class="anchor-offset" id="relational-operators" href="#relational-operators"></a>
### Relational Operators

Next, we have what are called relational operators. Relational operators allow us to compare two expressions. The result of a relational operator is always a `True` or `False` value, just like logical operators. However, relational operators allow us to compare other types of values.

Let's take the most simple operator, the **Equality Operator**, as an example.

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Equality Operator** - This guy: `==`. It checks whether two values are the same. Note: this is NOT the same as the _assignment_ operator (`=`)! 

</div>

The equality operator, just like the logical operators, must be put in between two values. 

With the equality operator, if expression is correct, the entire thing is replaced by a `True` boolean, meaning that this expression...
```python
7 == 7
```
... is equal to this boolean value:
```python
True
```
In addition, if the expression is incorrect and joined together by the equality operator, the entire expression is replaced by a `False` boolean, meaning that this expression...
```python
4 == 7
```
... is equal to this boolean value:
```python
False
```
Remember that, with operators, we can use variables and raw values together as well. This means that this piece of code...
```python
curitiba_population = 1765000

5 == curitiba_population
```
... is exactly the same as this piece of code:
```python
curitiba_population = 1765000

False
```

Finally, because relational operators create boolean values, it is in fact possible to store their values in boolean variables.
This means that this piece of code...
```python
curitiba_population = 1765000
stanford_population = 16914
same_population = stanford_population == curitiba_population
```
... is exactly the same as this piece of code:
```python
curitiba_population = 1765000
stanford_population = 16914
same_population = False
```

Now that we understand what we can do with relational operators can do, let's take a look at all of the relational operators:

1. `==`, Equality Operator. Evaluates to `True` when the two values surrounding it are the same.
2. `!=`, Inequality Operator. Evaluates to `True` when the two values surrounding it are different. Equivalently, the Inequality Operator evaluates to `False` when the two values surrounding it are the same.
3. `>`, "Greater Than" Operator. A Comparison Operator. Evaluates to `True` when the first value is greater than the second value.
4. `>=`, "Greater Than or Equal To" Operator. A Comparison Operator. Evaluates to `True` when the first value is greater than the second value and when they are the same.
5. `<`, "Less Than" Operator. A Comparison Operator. Evaluates to `True` when the first value is less than the second value.
6. `<=`, "Less Than or Equal To" Operator. A Comparison Operator. Evaluates to `True` when the first value is less than the second value and when they are the same.

With each of these, you can apply the same ideas as we saw at the beginning of the section. The only difference is when and where each of the operators become `True` and `False`.

### Relational Operators and Conditional Statements

As you learned in the _Conditional Statements_ and _Loops_ sections of the notes, `if` statements and `while` loops require booleans in order to execute. These booleans can be provided by variables, relational operator expressions, or a mix of both!

Let's take a look at the following example.

<div class="example-section" markdown="1">

<span class="example-title">Example</span>
Sometimes we want to write programs that use relational operator expressions in order to control behavior, like this:

```python
big_value = 100
is_printing = True

while big_value > 10:
    big_value = big_value - 1
    if is_printing:
        print(big_value)

```

Here, we see that we can _assign_ the variable `big_value` to itself minus 1, then use the "Greater Than" operator to check whether or not the value of `big_value` is greater than 10. This will be `True` until `big_value` is less than or equal to 10. At this point, the expression will become `False`, and the `while` loop will exit.

In addition to this, the program is using a boolean variable in order to decide whether or not to print. Here, we have set the `is_printing` variable to `True`, which makes the program go into the `if` statement and print out the value of `big_value`. If we had set it to `False`, `big_value` would not print at all.
</div>

<a class="anchor-offset" id="arithmetic-operators" href="#arithmetic-operators"></a>
### Arithmetic Operators

As you may have noticed throughout the notes, we also use what are called arithmetic operators. These operators change the values of floats and integers. Most of them are the operators you know and love. They come from math, and follow basically all of the rules you have already learned in school. They even follow the same order of operations, which we cover more in-depth in the bottom of this section, _Order of Operations_. Here is a complete list of the arithmetic operators, in order of decreasing priority:

1. `**`, Exponentials (this is how exponents are written in Python! 3<sup>2</sup> is the same as `3 ** 2`.)
2. `*` or `/` or `%`, Multiplication, Division, and **Remainder**.
3. `+` or `-`, Addition and Subtraction

Wait, what is **Remainder**, you ask?

#### The Remainder Operator

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Remainder Operator** - In Python, the percent symbol: `%`. Also called the _Modulo_ Operator, it calculates the remainder of simple division between two numbers.
</div>

Do you remember division back in elementary school? Before we had learned about decimal values? When we divided two numbers, we were often left with some number leftover. The modulus operator is used to get that leftover number. This is best explained with a set of examples.

<div class="example-section" markdown="1">

<span class="example-title">Example</span>
Here are a series of equations that use the remainder operator to warm you up. Every statement below evaluates to `True`. Basically, we are doing whole number division, and using the remainder as the answer!

```python
15 % 4 == 3 # 23 / 4 = 5, with 3 leftover.
21 % 7 == 0 # 21 / 7 = 0, with nothing leftover.
99 % 2 == 1 # 99 / 2 = 49, with 1 leftover.
11 % 2 == 1 # 11 / 2 = 5, also with 1 leftover.
```

Notice, in the last two examples, that the remainder operator evaluated to 1 for both 99 and 11. The remainder operator is especially useful for determining the difference between odd and even numbers:

```python
count = 0
while count < 100:
    if count % 2 == 1:
        print("count is odd!")
    if count % 2 == 0:
        print("count is even!")
```
In this example, we have a program that prints alternating messages, signaling when count is odd and when count is even. If we ever have to write a program capable of doing a sequence of things in regular intervals, the remainder operator is our go-to operator.

</div>

The arithmetic operators allow us to put together integers and floats in order to make rapid calculations. With arithmetic operators (and all other operators), we can mix the use of variables and raw values. 

For example:
```python
degrees_fahrenheit = 98.6

degrees_celsius = (degrees_fahrenheit - 32) * 5 / 9
```
Above, we are using arithmetic operators in order to do the temperature conversion between Fahrenheit and Celsius. Notice that we can use the variable `degrees_fahrenheit` in order to represent the value 98.6 in the calculation of `degrees_celsius`.

<a class="anchor-offset" id="variable-casting" href="#variable-casting"></a>
### Variable Casting

Different classes sometimes interact in unexpected ways. Programmers avoid this through what is called **casting**.

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Casting** - Changing a value's class.

</div>

Casting allows us to force the program to behave as we want it to. Let's take a second look at the `string` and `int` interaction from the previous exercise.

<div class="example-section" markdown="1">

<span class="example-title">Example</span>
Recall that (_spoiler alert!_) adding a `string` and `int` together caused the program to crash. Adding a `string` and a `string` or an `int` and an `int` together causes different results, which is why the program cannot decide on how to treat the different value classes it was given. Casting can solve this issue.

In Curitiba, the zip code comes in two parts: the first being the primary 5-digit code (80020, 80010, etc.) and a more specific 3-digit code (010, 020, etc.). Your zip code can thus be written as `80020-050` or `80020-240`. We want to write a program that puts together zip codes into their 8 digit format, but we have a program that looks like this:

```python
large_zip = 80020
small_zip = -200
```

If we add `large_zip` and `small_zip` together, we will get `79820`, which is definitely not what we want. In order to put these numbers together, we are going to need to "cast" these integers into strings. We can do this by declaring two new variables, `large_zip_str` and `small_zip_str`, and using the cast function `str()`.

```python
large_zip = 80020
small_zip = -200

large_zip_str = str(80020) # This now equals "80020"
small_zip_str = str(-200)  # This now equals "-200"
```

Because we now have two strings `"80020"` and `"-200"`, we can add them together:

```python
final_zip_str = large_zip_str + small_zip_str # "80020-200"
```

This will give us the string that we desire, `"80020-200"`.

</div>

The cast function is a powerful function that allows us to control how the program behaves. The following are the casting functions you need to know:

##### Casting: `int()`

This function converts number-like things into integers.

```python
student_girls = str(100)
print("There are " + student_girls + "girls.")

student_boys = 75
student_total = int(student_girls) + student_boys
```

| Cast          | Result  |
|---------------|---------|
| `int(True)   `| `1     `|
| `int(False)  `| `0     `|
| `int("False")`| `err!  `|
| `int("-5")   `| `-5    `|
| `int("100")  `| `100   `|
| `int("1abc") `| `err!  `|
| `int(50.4)   `| `50    `|
| `int(-4.3)   `| `-4    `|
| `int("50.4") `| `err!  `|

Notice that calling the casting function `int()` on a float removes the decimals. Be careful casting floats into integers because you may lose accuracy!

##### Casting: `float()`

This function converts number-like things into floats.

```python
degrees_fahrenheit = str(98.6)
print("The temperature is " + degrees_fahrenheit)

degrees_celsius = (float(degrees_fahrenheit) - 32) * 5 / 9
```

| Cast            | Result   |
|-----------------|----------|
| `float(True)   `| `1.0    `|
| `float(False)  `| `0.0    `|
| `float("False")`| `err!   `|
| `float("-5")   `| `-5.0   `|
| `float("100")  `| `100.0  `|
| `float("1abc") `| `err!   `|
| `float(50.4)   `| `50.4   `|
| `float(-4.3)   `| `-4.3   `|
| `float("50.4") `| `err!   `|


Notice that calling the casting function `float()` causes integers and booleans to become floats.

##### Casting: `str()`

This function converts anything to a string. This is essential when you are writing a program that needs to display quantitative information.

```python
score_brazil = 2
score_france = 1

print("Current score:")
print("Brazil: " + str(score_brazil))
print("France: " + str(score_france))
```

| Cast           | Result    |
|----------------|-----------|
| `str(True)    `| `"True"  `|
| `str(False)   `| `"False" `|
| `str(-5)      `| `"-5"    `|
| `str(100)     `| `"100"   `|
| `str(50.4)    `| `"50.4"  `|
| `str(-4.3)    `| `"-4.3"  `|
| `str("word")  `| `"word"  `|

Notice that `"word"` does not change. Also notice that there are no errors here. Python is capable of turning most values into strings.

##### Casting: `bool()`

This function converts non-zero values to `True`, and zero-like values to `False`.

This casting function is not used as much; nonetheless, it is important to know as well.

| Cast            | Result   |
|-----------------|----------|
| `bool(1)       `| `True   `|
| `bool(0)       `| `False  `|
| `bool(5)       `| `True   `|
| `bool(-1)      `| `True   `|
| `bool("hello") `| `True   `|
| `bool("")      `| `False  `|
| `bool("False") `| `True   `|
| `bool(0.1)     `| `True   `|
| `bool(0.0)     `| `False  `|

Notice that only `0`, `0.0`, and `""` count as `False` values. Be careful with this; even `"False"` counts as `True` with this casting function!

<a class="anchor-offset" id="order-of-operations" href="#order-of-operations"></a>
### Order of Operations

Remember in math, when you learned that you multiplied numbers before adding them together? This is known as the _ordem de operações_, or _order of operations_. As it turns out, Python has an order of operations too! Do not worry about memorizing the order, you can always reference this section when you need to. Here is the complete list, in order of decreasing priority, of the priority of the operators we have learned about.

1. `**` - Exponentiation (raise to the power)
2. `*`, `/`, `%` - Multiplication, Division, Remainder Operators
3. `+`, `-` - Addition and Subtraction Operators
4. `<=`, `<`, `>`, `>=` - Comparison Operators
5. `==`, `!=` - Equality and Inequality Operators
6. `not`, `or`, `and` - Logical Operators

All operators have a place in the hierarchy, which means that we can chain together operators when necessary. This means that this expression...

```python
if 15 % 2 == 6 + 3 or 40 / 2 > 3 - 1:
    move()
```
... is equivalent to this expression...
```python
if 1 == 9 or 20 > 2:
    move()
```
... which is equivalent to this expression...
```python
if False or True:
    move()
```
which evaluates to `True`.

Of course, with all this said, we can still use parentheses in our expressions in order to make clear which operations need to happen first, just like in math. This can change the order of operations to fit the task at hand, and in general make it easier for you and the reader to understand the expressions that you are writing. Indeed, we typically make expressions that look more like this:

```python
if (15 / 3 % 2) > ((20 + 4) * 2):
    move()
```

NOTE: these parentheses are different than the parentheses that follow functions!

Indeed, variables and operators are two of the hardest concepts to learn in computer programming. However, once you gain a solid understanding of how they work, you are far, far closer to becoming an excellent computer programmer. Congratulations!