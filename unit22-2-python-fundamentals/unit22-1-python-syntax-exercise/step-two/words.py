# FUNCTION ONE
def print_upper_words(words):
    """takes a list of words, and prints out each word on a separate line, but in all uppercase."""
    for word in words:
        print(word.upper())

# prints JEANS SHIRTS PANTS HATS on separate lines
print_upper_words(['jeans', 'shirts', 'pants', 'hats'])

# FUNCTION TWO
def print_upper_words2(words):
    """only prints words that start with the letter ‘e’"""
    for word in words:
        if word.startswith('e') or word.startswith('E'):
            print(word.upper())

# prints EMINEMS EGGCHEW on separate lines
print_upper_words2(['eminems', 'twix', 'milkyway', 'Eggchew', 'mamba'])

# FUNCTION THREE
# uses a keyword argument when called
def print_upper_words3(words, must_start_with):
    """should be able to pass in a set of letters, and it only prints words that start with one of those letters."""
    for word in words:
        for letters in must_start_with:
            if word.startswith(letters):
                print(word.upper())

# prints HELLO HEY YO YES
print_upper_words3(["hello", "hey", "goodbye", "yo", "yes"], must_start_with={"h", "y"})