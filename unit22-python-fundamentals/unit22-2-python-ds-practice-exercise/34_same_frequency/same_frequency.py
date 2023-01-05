def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    # num1 conversion
    num1_str = str(num1)
    num1_lst = list(num1_str)
    # num2 conversion
    num2_str = str(num2)
    num2_lst = list(num2_str)
    for num in num1_lst:
        if num in num2_lst and len(num1_lst) == len(num2_lst):
            return True
        else:
            return False



print("should return, True ----->,", same_frequency(551122, 221515))
print("should return, False ----->,", same_frequency(321142, 3212215))
print("should return, True ----->,", same_frequency(1212, 2211))
