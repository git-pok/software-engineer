# Python Syntax Exercise
In this exercise, you’ll practice using the interactive Python interpreter, running Python scripts, and using Python’s syntax.

## Step One: Working in Python Files
For all the syntax challenges, do your work in script files (Python files normally end with .py). We’ve provided a starter file for each of these with the problem statement and simple print-style tests already.
- count_up.py
- in_range.py
- sum.py
- any7.py
- convert.py

If you need a reminder of how to convert between Farenheit and Celsius, feel free to Google this

You can run a Python script in one of two ways:
- When you’re already in IPython, you can run a script with %run myscript.py. This runs your script and leaves you in IPython, where you can examine variables, run functions, etc, from your script. This is often the best way to try things out.
- From the shell, you can run your script as python3 myscript.py

## Step Two: Starting On Your Own
Do this work in a new file, words.py.
- For a list of words, print out each word on a separate line, but in all uppercase. How can you change a word to uppercase? Ask Python for help on what you can do with strings!
- Turn that into a function, print_upper_words. Test it out. (Don’t forget to add a docstring to your function!)
- Change that function so that it only prints words that start with the letter ‘e’ (either upper or lowercase).
- Make your function more general: you should be able to pass in a set of letters, and it only prints words that start with one of those letters.

For example:

```
# this should print "HELLO", "HEY", "YO", and "YES"

print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})
```
