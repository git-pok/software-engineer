def product(a, b):
    """Return product of a and b.

        >>> product(2, 2)
        4

        >>> product(2, -2)
        -4
    """
    return a * b

print("should be 4,", product(2, 2))
print("should be 8,", product(2, 4))
print("should be -4,", product(2, -2))