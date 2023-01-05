def sum_range(nums, start=0, end=None):
    """Return sum of numbers from start...end.

    - start: where to start (if not provided, start at list start)
    - end: where to stop (include this index) (if not provided, go through end)

        >>> nums = [1, 2, 3, 4]

        >>> sum_range(nums)
        10

        >>> sum_range(nums, 1)
        9

        >>> sum_range(nums, end=2)
        6

        >>> sum_range(nums, 1, 3)
        9

    If end is after end of list, just go to end of list:

        >>> sum_range(nums, 1, 99)
        9
    """
    total = 0
    if start == 0 and end == None:
        total = sum(nums)
        return total
    elif not start == 0 and end == None:
        num_list_splice = nums[start::]
        total = sum(num_list_splice)
        return total
    else:
        num_list_splice = nums[start:end + 1:] 
        total = sum(num_list_splice)
        return total


print("should return, 10 ----->,", sum_range([1, 2, 3, 4]))
print("should return, 9 ----->,", sum_range([1, 2, 3, 4], 1))
print("should return, 6 ----->,", sum_range([1, 2, 3, 4], end=2))
print("should return, 9 ----->,", sum_range([1, 2, 3, 4], 1, 3))
print("should return, 9 ----->,", sum_range([1, 2, 3, 4], 1, 99))
