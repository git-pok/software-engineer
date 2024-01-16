def number_compare(a, b):
    """Report on whether a>b, b>a, or b==a
    
        >>> number_compare(1, 1)
        'Numbers are equal'
        
        >>> number_compare(-1, 1)
        'Second is greater'
        
        >>> number_compare(1, -2)
        'First is greater'
    """
    if a == b:
        return "Numbers are equal"
    elif a < b:
        return "Second is greater"
    else:
        return "First is greater"

print("should equal, Numbers are equal,", number_compare(1, 1))
print("should equal, Second is greater,", number_compare(-1, 1))
print("should equal, First is greater,", number_compare(1, -2))