def capitalize(phrase):
    """Capitalize first letter of first word of phrase.

        >>> capitalize('python')
        'Python'

        >>> capitalize('only first word')
        'Only first word'
    """
    return phrase.capitalize()

print("should return Python ----->,", capitalize('python'))
print("should return Only first word ----->,", capitalize('only first word'))