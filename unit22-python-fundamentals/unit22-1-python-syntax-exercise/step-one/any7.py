def any7(nums):
    """Are any of these numbers a 7? (True/False)"""
    # YOUR CODE HERE
    for num in nums:
        if num == 7:
            return True

    return False

# test_var = 7 

print("should be true", any7([1, 2, 7, 4, 5]))
print("should be false", any7([1, 2, 4, 5]))

# PROBLEMS THAT OCCURED
# first problem, the code would return False with any7([1, 2, 7, 4, 5]),
# but returned true with any7([7, 2, 1, 4, 5])
# this is because returning False directly after the True return, 
# returns the expression right away,
# and doesnt iterate through all the numbers in the list,
# it only iterates through the first number like in js,
# when we return something in the function block that iterates,
# and it is supposed to get returned outside the iterative function block,
# and it returns right after the first value,
# instead of iterating through all the values 

