def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    to_swap_ltr = to_swap.lower()
    new_str = ""

    for char in phrase:
        if char.lower() == to_swap_ltr:
            char = char.swapcase()
        new_str += char

    return new_str


print("should return aAAAhhh", flip_case('Aaaahhh', 'a'))
print("should return aAAAhhh", flip_case('Aaaahhh', 'A'))
print("should return AaaaHHH", flip_case('Aaaahhh', 'h'))
