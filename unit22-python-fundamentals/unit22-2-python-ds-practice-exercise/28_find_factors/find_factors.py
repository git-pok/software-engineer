def find_factors(num):
    """Find factors of num, in increasing order.

    >>> find_factors(10)
    [1, 2, 5, 10]

    >>> find_factors(11)
    [1, 11]

    >>> find_factors(111)
    [1, 3, 37, 111]

    >>> find_factors(321421)
    [1, 293, 1097, 321421]
    """
    # note, the list comprehension didnt work with, factors = set(range(0, num + 1))
    # what made me notice is when I had,
    # return [number for number in factors if factor_target / number == type(int)],
    # when this ran in ipython, an error saying zero was not divisible, returned,
    # then I changed my og syntax, and repalced the 0 in range() with a 1
    factor_target = num   
    factors = set(range(1, num + 1))
    return [number for number in factors if factor_target % number == 0]

print("should return, [1, 2, 5, 10] ----->,", find_factors(10))
print("should return, [1, 11] ----->,", find_factors(11))
print("should return, [1, 3, 37, 111] ----->,", find_factors(111))
print("should return, [1, 293, 1097, 321421] ----->,", find_factors(321421))