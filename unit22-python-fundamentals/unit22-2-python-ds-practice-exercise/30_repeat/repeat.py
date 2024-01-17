def repeat(phrase, num):
    """Return phrase, repeated num times.

        >>> repeat('*', 3)
        '***'

        >>> repeat('abc', 2)
        'abcabc'

        >>> repeat('abc', 0)
        ''

    Ignore illegal values of num and return None:

        >>> repeat('abc', -1) is None
        True

        >>> repeat('abc', 'nope') is None
        True
    """
    if isinstance(num, int) and num > 0:
        return phrase * num
    elif num == 0:
        return ''
    else:
        return None
    

print("should return, *** ----->,", repeat('*', 3))
print("should return, abcabc ----->,", repeat('abc', 2))
print("should return, '' ----->,", repeat('abc', 0))
print("should return, None ----->,", repeat('abc', -1))
print("should return, None ----->,", repeat('abc', 'nope'))
