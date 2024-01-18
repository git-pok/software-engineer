def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?

        >>> same_frequency(551122, 221515)
        True

        >>> same_frequency(321142, 3212215)
        False

        >>> same_frequency(1212, 2211)
        True
    """
    num1_dict = dict()
    num2_dict = dict()

    num1_str = str(num1)
    num2_str = str(num2)

    for val in num1_str:
        val_int = int(val)
        if num1_dict.get(val_int):
            num1_dict[val_int] += 1
        else:
            num1_dict[val_int] = 1
    for val in num2_str:
        val_int = int(val)
        if num2_dict.get(val_int):
            num2_dict[val_int] += 1
        else:
            num2_dict[val_int] = 1

    if num1_dict == num2_dict:
        return True
    else:
        return False



print("should return, True ----->,", same_frequency(551122, 221515))
print("should return, False ----->,", same_frequency(321142, 3212215))
print("should return, True ----->,", same_frequency(1212, 2211))
