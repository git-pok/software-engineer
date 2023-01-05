def sum_floats(nums):
    """Return sum of floating point numbers in nums.
    
        >>> sum_floats([1.5, 2.4, 'awesome', [], 1])
        3.9
        
        >>> sum_floats([1, 2, 3])
        0
    """
    total = 0
    for num in nums:
        if type(num) == float:
            total += num
    
    return total

    # isinstance logic
    # total = 0
    # for num in nums:
    #     if isinstance(num, float):
    #         print(num)
    #         total += num
    
    # return total

print("should return, 3.9 ----->,", sum_floats([1.5, 2.4, 'awesome', [], 1]))
print("should return, 0 ----->,", sum_floats([1, 2, 3]))



    # hint: to find out if something is a float, you should use the
    # "isinstance" function --- research how to use this to find out
    # if something is a float!
