def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    return phrase[::-1]

print("should return emosewa, ---->", reverse_string("awesome"))
print("should return ecuas, ---->", reverse_string("sauce"))
