def intersection(l1, l2):
    """Return intersection of two lists as a new list::
    
        >>> intersection([1, 2, 3], [2, 3, 4])
        [2, 3]
        
        >>> intersection([1, 2, 3], [1, 2, 3, 4])
        [1, 2, 3]
        
        >>> intersection([1, 2, 3], [3, 4])
        [3]
        
        >>> intersection([1, 2, 3], [4, 5, 6])
        []
    """
    set1 = set(l1)
    set2 = set(l2)
    new_set = set1 & set2
    new_lst = list(new_set) 
    return new_lst

print("should return, [2, 3] ----->", intersection([1, 2, 3], [2, 3, 4]))
print("should return, [1, 2, 3] ----->", intersection([1, 2, 3], [1, 2, 3, 4]))
print("should return, [3] ----->", intersection([1, 2, 3], [3, 4]))
print("should return, [] ----->", intersection([1, 2, 3], [4, 5, 6]))