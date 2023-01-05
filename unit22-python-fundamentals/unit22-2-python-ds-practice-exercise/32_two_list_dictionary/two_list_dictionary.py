def two_list_dictionary(keys, values):
    """Given keys and values, make dictionary of those.
    
        >>> two_list_dictionary(['x', 'y', 'z'], [9, 8, 7])
        {'x': 9, 'y': 8, 'z': 7}
        
    If there are fewer values than keys, remaining keys should have value
    of None:
    
        >>> two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3])
        {'a': 1, 'b': 2, 'c': 3, 'd': None}
    
    If there are fewer keys, ignore remaining values:

        >>> two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4])
        {'a': 1, 'b': 2, 'c': 3}
    """
    # enumerate() takes the index of a value
    # then we access the value from values through it
    new_dict = {}

    for idx, val in enumerate(keys):
        new_dict[val] = values[idx] if idx < len(values) else None

    return new_dict

    # new_dict = dict(zip_longest(keys, values))           

    # return new_dict
    

print("should return, {'x': 9, 'y': 8, 'z': 7} ----->,", two_list_dictionary(['x', 'y', 'z'], [9, 8, 7]))
print("should return, {'a': 1, 'b': 2, 'c': 3, 'd': None} ----->,", two_list_dictionary(['a', 'b', 'c', 'd'], [1, 2, 3]))
print("should return, {'a': 1, 'b': 2, 'c': 3} ----->,", two_list_dictionary(['a', 'b', 'c'], [1, 2, 3, 4]))
