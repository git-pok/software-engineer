def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    i = nums[0]
    for num in nums:
        if nums.count(i) > nums.count(num):
            return i
        else:
            return num

print("should return, 1 ----->", mode([1, 2, 1]))
print("should return, 2 ----->", mode([2, 2, 3, 3, 2]))
print("should return, 6 ----->", mode([6, 6, 3, 3, 6, 3, 6]))
