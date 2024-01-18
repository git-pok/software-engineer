def truncate(phrase, n):
    """Return truncated-at-n-chars version of  phrase.

    If the phrase is longer than, or the same size as, n make sure it ends with '...' and is no
    longer than n.
    
        >>> truncate("Hello World", 6)
        'Hel...'
        
        >>> truncate("Problem solving is the best!", 10)
        'Problem...'
        
        >>> truncate("Yo", 100)
        'Yo'

    The smallest legal value of n is 3; if less, return a message:
    
        >>> truncate('Cool', 1)
        'Truncation must be at least 3 characters.'

        >>> truncate("Woah", 4)
        'W...'

        >>> truncate("Woah", 3)
        '...'
    """
    if n < 3:
        return "Truncation must be at least 3 characters."
    elif n > len(phrase):
        return phrase
    else:
        return phrase[0:n - 3:] + "..."


print("should return, Hel... ----->,", truncate("Hello World", 6))
print("should return, Problem... ----->,", truncate("Problem solving is the best!", 10))
print("should return, Yo ----->,", truncate("Yo", 100))
print("should return, Truncation must be at least 3 characters. ----->,", truncate('Cool', 1))
print("should return, W... ----->,", truncate("Woah", 4))
print("should return, ... ----->,", truncate("Woah", 3))
