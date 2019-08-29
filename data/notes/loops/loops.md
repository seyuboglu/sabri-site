---
title: Loops
---

By now, you may have seen code that uses _conditional statements_ to whether or not to run certain segments of code. What about code that can decide whether to run itself more than once?

Control flow segments responsible for making the code run several times (sometimes _infinite_ times) are known as **loops**. 


<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Loop** - In a program, a segment of code that is capable of running multiple times.

</div>

There are two primary types of loops: `for` and `while`. These two types of loops are essential in programs, both large and small, that are meant to process large quantities of data and execute complex, but repetitive tasks.

<a class="anchor-offset" id="for-loop" href="#for-loop"></a>
### `for` Loop 

Consider the following statement:

> For the next 7 days, I am going to eat a pizza.   

What do you know about the statement above?

To start, you know that I am going to eat a pizza. You also know that I am going to eat a pizza for the next 7 days _exactly_. No more, no less. This is the basic premise of a `for` loop. It is a segment of code that runs for a specified number of **iterations**.

<div class="definition-section" markdown="1">

<span class="definition-title">Definition</span>
**Iterations** - A single run of a statement within a loop.

</div>

In Python, `for` loops are declared with the following structure:

```python
for i in range(num_iterations):
    action_function()
    action_function()
```

Notice the following 5 elements:

1. The `for` keyword.
2. The current number of the iteration.
3. The `range` function.
4. A number that we will call `num_iterations`.
5. The body of the `for` loop. This is run during every iteration.

Let's take a look at all of these parts with an example!

<div class="example-section" markdown="1">

<span class="example-title">Example</span>
Let's say that you want to get PyBot to go across the field. In the _Simple Function_ notes, we saw a function that accomplished this called `move_across()`. It looked a little something like this:

```python
def move_across():
    move()
    move()
    move()
    move()
```

This is good, but what if PyCountry had a field that was 99 cells across? We would have a lot of copy and pasting to do. Instead of writing `move()` 99 times, we (as expert computer programmers with _very_ good style) can avoid writing redundant lines of code and simply write a `for` loop capable of running 99 times, like this:

```python
def move_across_99():
    for i in range(99):
        move()
```

Clean, right?

Notice how the `for` loop is constructed. Here, we've replaced the word `num_iterations` with the number 99, because 99 is the number of times we want to call the `move()` function. Now, we only have to write `move()` once in a loop that does 99 iterations.

</div>

<div class="aside" markdown="1">

Thinking to yourself, "What about the `range` function?" The `range` function tells `i` exactly what number to go to. In this case, it tells i to be the numbers 0 to 98. We will go more into detail about the way it does this in the coming weeks! For now, do not worry too much about it.

</div>

Ready to try it yourself? Here is a quick exercise to get you warmed up to `for` loops!

<iframe frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/1322765/fdc40a84d1d5c2234ae6cab1ecb01bf9"></iframe>

But what if you _don't_ know how long to do something for? Well, that is what `while` loops are for.

<a class="anchor-offset" id="while-loop" href="#while-loop"></a>
### `while` Loop 

Consider the following statement:

> While I have less than 1000 Reais, I will save money.

Here, we know two things: that you want to save some money, and that you will do so until you have 1000 Reais. How many days is that going to take? It's hard to say - one day you may save 5 Reais, the next day you may save 100 Reais. In programs where you don't know how many iterations are going to be necessary, we use what are called `while` loops.

Here's what a typical `while` loop might look like:

```python
while condition_function():
    action_function()
    action_function()
```

It is very similar to the `for` loop structure, except for one big difference: `for` loops run for some determined number of iterations; `while` loops run _while_ the `condition_function()` above evaluates to `true` (if you need some review on conditions, check out _Conditional Statements_ on the Notes page!)

Here is a quick example:

<div class="example-section" markdown="1">

<span class="example-title">Example</span>
Imagine that you want PyBot to move across the field, but you don't know how big this particular field is. You can't write out the right number of `move()` calls, and you can't set up a `for` loop capable of knowing when to stop iterating. One thing we can do is write out a function that uses a `while` loop to run while `not front_is_blocked()`, like this:

```python
def move_across_variable():
    while not front_is_blocked():
        move()
```

</div>

Make sense? Try out the following exercise and get some practice with `while` loops!

<iframe frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/1310899/dbc2970a6f7c445de841e7a7ddf31ce0"></iframe>

<a class="anchor-offset" id="infinite-loop" href="#infinite-loop"></a>
### The "Infinite" Loop

```python
def spin():
    while True:
        turn_right()
```

There are times when you may want to make a `while` loop run forever; these are called _infinite loops_. They are few and far between, but know that they exist! You may end up accidentally writing one of these. If so, your program may not run, or seem very slow. Avoid these until you know exactly when and where to use one. We will cover some cases where they make sense in the coming weeks.

