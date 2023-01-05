def sum_pairs(nums, goal):
    """Return tuple of first pair of nums that sum to goal.

    For example:

        >>> sum_pairs([1, 2, 2, 10], 4)
        (2, 2)

    (4, 2) sum to 6, and come before (5, 1):

        >>> sum_pairs([4, 2, 10, 5, 1], 6) # (4, 2)
        (4, 2)

    (4, 3) sum to 7, and finish before (5, 2):

        >>> sum_pairs([5, 1, 4, 8, 3, 2], 7)
        (4, 3)

    No pairs sum to 100, so return empty tuple:

        >>> sum_pairs([11, 20, 4, 2, 1, 5], 100)
        ()
    """
    # makes use of hash tables
    # check this site out for a visual ex, and explanation,
    # <https://www.educative.io/answers/how-to-implement-the-two-sum-problem-in-python>
    already_visited = set()

    for i in nums:
        difference = goal - i

        if difference in already_visited:
            return (difference, i)

        already_visited.add(i)

    return ()

print("should return, (2, 2) ----->,", sum_pairs([1, 2, 2, 10], 4))
print("should return, (4, 2) ----->,", sum_pairs([4, 2, 10, 5, 1], 6))
print("should return, (4, 3) ----->,", sum_pairs([5, 1, 4, 8, 3, 2], 7))
print("should return, (1, 9) ----->,", sum_pairs([1, 9, 3, 4, 3, 2], 10))
# Explanation of how this works for the above ex,
# our code executes, 10 - 1 = 9, then checks if 9 is in the hash table.
# It is not, so it adds 1 (the array item) to the table.
# Then it executes, 10 - 9 = 1, then checks if 1 is in the hash table.
# It is, so our function returns, (1, 9)  
