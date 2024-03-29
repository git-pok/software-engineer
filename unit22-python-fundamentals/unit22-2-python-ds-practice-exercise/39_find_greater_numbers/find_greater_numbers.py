def find_greater_numbers(nums):
    """Return # of times a number is followed by a greater number.

    For example, for [1, 2, 3], the answer is 3:
    - the 1 is followed by the 2 *and* the 3
    - the 2 is followed by the 3

    Examples:

        >>> find_greater_numbers([1, 2, 3])
        3

        >>> find_greater_numbers([6, 1, 2, 7])
        3

        >>> find_greater_numbers([5, 4, 3, 2, 1])
        0

        >>> find_greater_numbers([])
        0
        >>> find_greater_numbers([5, 1, 2, 9, 8, 10])
        4
        >>> find_greater_numbers([6, 1, 2, 7, 8])
        6
    """
    count = 0
    idx = 0
    re_itr_idx = 0
    nums_copy = nums.copy()

    while re_itr_idx < len(nums_copy) - 1:
        if idx == len(nums_copy) - 1:
            re_itr_idx += 1
            idx = re_itr_idx
        elif nums_copy[idx + 1] > nums_copy[idx]:
            count += 1
            idx += 1
        else:
            re_itr_idx += 1
            idx = re_itr_idx

    return count


print("should return 3 ----->,", find_greater_numbers([1, 2, 3]))
print("should return 3 ----->,", find_greater_numbers([6, 1, 2, 7]))
print("should return 6 ----->,", find_greater_numbers([6, 1, 2, 7, 8]))
print("should return 0 ----->,", find_greater_numbers([5, 4, 3, 2, 1]))
print("should return 4 ----->,", find_greater_numbers([5, 1, 2, 9, 8, 10]))
print("should return 0 ----->,", find_greater_numbers([]))