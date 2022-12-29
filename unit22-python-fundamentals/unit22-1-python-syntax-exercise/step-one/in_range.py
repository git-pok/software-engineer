def in_range(nums, lowest, highest):
    """Print numbers inside range.

    - nums: list of numbers
    - lowest: lowest number to print
    - highest: highest number to print

    For example:

      in_range([10, 20, 30, 40], 15, 30)

    should print:

      20 fits
      30 fits
    """

    # YOUR CODE HERE
    range_list = list(range(lowest, highest + 1))

    for value in range_list:
        for num in nums:
            if num == value:
                print(f"{num} fits")


in_range([10, 20, 30, 40, 50], 15, 30)            
