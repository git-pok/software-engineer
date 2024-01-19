def is_odd_string(word):
    """Is the sum of the character-positions odd?

    Word is a simple word of uppercase/lowercase letters without punctuation.

    For each character, find it's "character position" ("a"=1, "b"=2, etc).
    Return True/False, depending on whether sum of those numbers is odd.

    For example, these sum to 1, which is odd:
    
        >>> is_odd_string('a')
        True

        >>> is_odd_string('A')
        True

    These sum to 4, which is not odd:
    
        >>> is_odd_string('aaaa')
        False

        >>> is_odd_string('AAaa')
        False

    Longer example:
    
        >>> is_odd_string('amazing')
        True
    """

    # Hint: you may find the ord() function useful here
    # this creates DIFF which equals 96
    DIFF = ord("a") - 1
    # within this sum, we will subtract 96,
    # from each letter in word
    # this will give us 1 for a, 2 for b, and so on
    total = sum((ord(c) - DIFF) for c in word.lower())
    
    return total % 2 == 1



print("should return True ----->,", is_odd_string('a'))
print("should return True ----->,", is_odd_string('A'))
print("should return False ----->,", is_odd_string('aaaa'))
print("should return False ----->,", is_odd_string('AAaa'))
print("should return True ----->,", is_odd_string('amazing'))