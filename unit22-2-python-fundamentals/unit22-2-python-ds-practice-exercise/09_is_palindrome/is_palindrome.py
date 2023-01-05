def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    phrase = phrase.lower().strip().replace(' ', '')
    reversed_phrase = phrase[::-1] 
    return reversed_phrase == phrase  


print("should return True, ----->,", is_palindrome('tacocat'))
print("should return True, ----->,", is_palindrome('noon'))
print("should return False, ----->,", is_palindrome('robert'))
print("should return True, ----->,", is_palindrome('taco cat'))
print("should return True, ----->,", is_palindrome('Noon'))