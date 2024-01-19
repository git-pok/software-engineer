def valid_parentheses(parens):
    """Are the parentheses validly balanced?

        >>> valid_parentheses("()")
        True

        >>> valid_parentheses("()()")
        True

        >>> valid_parentheses("(()())")
        True

        >>> valid_parentheses(")()")
        False

        >>> valid_parentheses("())")
        False

        >>> valid_parentheses("((())")
        False

        >>> valid_parentheses(")()(")
        True
    """
    rght_prths = 0
    lft_prths = 0
    for paren in parens:
        if paren == ")":
            rght_prths += 1
        else:
            lft_prths += 1

    return rght_prths == lft_prths


print("should return True ----->,", valid_parentheses("()"))
print("should return True ----->,", valid_parentheses("()()"))
print("should return True ----->,", valid_parentheses("(()())"))
print("should return False ----->,", valid_parentheses(")()"))
print("should return False ----->,", valid_parentheses("())"))
print("should return False ----->,", valid_parentheses("((())"))
print("should return True ----->,", valid_parentheses(")()("))