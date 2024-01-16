def last_element(lst):
    """Return last item in list (None if list is empty.
    
        >>> last_element([1, 2, 3])
        3
        
        >>> last_element([]) is None
        True
    """
    return None if lst == [] else lst[-1] 

print("should return True", last_element([]) is None)
print("should return 3", last_element([1, 2, 3]))
print("should return 6", last_element([1, 2, 6]))
print("should return True", last_element([]) is None)