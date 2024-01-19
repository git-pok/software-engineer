def three_odd_numbers(nums):
    """Is the sum of any 3 sequential numbers odd?"

        >>> three_odd_numbers([1, 2, 3, 4, 5])
        True

        >>> three_odd_numbers([0, -2, 4, 1, 9, 12, 4, 1, 0])
        True

        >>> three_odd_numbers([5, 2, 1])
        False

        >>> three_odd_numbers([1, 2, 3, 3, 2])
        False
    """
    start_idx = 0
    stop_idx = 3
    while start_idx < len(nums): 
        sum_arr = nums[start_idx:stop_idx:]
        nums_sum = sum(sum_arr)
        sum_arr_len = len(sum_arr)
        if sum_arr_len < 3:
            return False
        elif nums_sum % 2 != 0:
            return True
        else:
            start_idx += 1
            stop_idx += 1


print("should return True ----->,", three_odd_numbers([1, 2, 3, 4, 5]))
print("should return True ----->,", three_odd_numbers([0, -2, 4, 1, 9, 12, 4, 1, 0]))
print("should return False ----->,", three_odd_numbers([5, 2, 1]))
print("should return False ----->,", three_odd_numbers([1, 2, 3, 3, 2]))


