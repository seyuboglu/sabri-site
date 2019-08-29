---
title: The Style Guide 
---

Hello! Welcome to _The Style Guide_ the place where we enumerate the things we are looking for when we say that something has "good style."

But what is style in the first place? 

> **Style** - The way a body of code is written. This includes the names used for variables, the code decomposition, and the overall structure of the code.

Writing code with good style is not just so it looks pretty (which it does); it is also to make everyone's lives easier, _including future you_.

This quote by a guy named Robert Martin sums it up quite well:

> “The ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code. ... [Therefore,] making it easy to read makes it easier to write.”

In other words, in big projects, code is more often read than written. Some of the code you write in this class may end up being extremely powerful. If you or other people ever want to build on top of it, you want to make sure that it is as usable as possible. It will make your life, in both the present and the future, much easier!

Without further ado, here is _The Style Guide_!

### Indentation & Whitespace

##### Tabs vs. Spaces

In this class, the code _must_ be properly "tabbed." This is not a request or a recommendation; in Python, code simply does not work properly without proper indentation.

[IMAGE]

In repl.it, the website in which you will be building your projects, the tabs are the equivalent size of two spaces. You can do either (tabs are recommended), but we urge you not to mix spaces and tabs, because they create different characters that cause problems in many situations.

##### Long Lines

Avoid lines longer than 80 characters! If you are writing a long string, use triple-quote notation. It allows you to move from one line to another
without worrying about errors.

##### Spacing

Place a blank line between methods and between groups of statements.

### Functions

##### Naming

Give functions descriptive names such as `move_across` or `num_fruits`. Avoid single letter variables or non-descriptive names, such as `x` or `function1`.

##### Capitalization

In Python, it is common to write functions and variables with what we call "snake_case", which is similar to lowercase except instead of spaces (" "), we use underscores. This allows the words to remain as one continuous string of characters.

When we get to Classes (a name for an Object type), we expect to see classes typed out in "CamelCase", which is where each of the words are capitalized and there are no spaces put in between.

##### `main()` As a Summary

We should be able to look at your `main()` function and read it like a story! It should form a concise summary of the overall behavior of the program.

##### Minimize Redundant Code

If you repeat the same code block two or more times, find a way to remove the redundant code so that it appears only once. For example, you can place it into a function that is called from both places.

##### Long Functions

Each function should perform a single task, preferably the one described in its name. No one function should do too much work in a single program. If you have a single function that is very long, break it apart into smaller functions! A good way to see if a function is too long is to see if you can describe its functionality in once sentence. If not, it might be doing too many things.

##### Short Functions

Avoid writing functions that simply call other functions!

### Control Statements (`if`, `for`, and `while`)

##### `for` vs. `while`

Use a `for` loop when you know the number of repetitions. If you do not know the number of repetitions, use a `while` loop.

##### `if/else` Factoring

If an `if` and `else` statement ever do the same thing, just move it outside of the statements altogether.

##### Infinite Loops

Be careful of infinite loops! These are loops that have no end. Below is an example of one:

[IMAGE]

### Comments

##### Function Comments

Place a comment (called a _heading_) underneath each of your function headers. The heading should describe the function's behavior. If the function takes any arguments as parameters, or has a return value, mention this in the comment! Don't get too detailed, but be sure that the heading is providing helpful information to the developer reading the comment.

```python
def remove_punctuation(sentence, language):
    """
    This comment removes the punctuation in a given sentence.

    Inputs:
    - sentence: The sentence to parse.
    - language: The language in which the sentence is written.

    Returns:
    A processed sentence with no punctuation.
    """

    ...

    return new_sentence
```

##### Inline Comments

If you have any lines of code that are lengthy, complex, or difficult to read, place a small inline comment above the code block describing what it does.

##### Commented-Out Code

In general, remove commented-out code before turning in a project. It is fine to have commented-out code while working on it, but if the job is done and the comments are unnecessary, just remove it.

### Variables 

##### Scope

Declare variables in the narrowest possible scope. For example, if a variable is used only inside a specific `if` statement, declare it inside that `if` statement rather than at the top of the function.

##### Constants

If a particular variable value is used frequently in your code, consider declaring it as a _constant_ at the top of your program. Then, refer to the constant throughout your program. Name constants in uppercase with underscores between words `LIKE_THIS`.

##### Save Function Return Values

If you are calling a function and using its result multiple times, save its result in a variable! Do not call it over and over again.

### Classes

Coming soon...
