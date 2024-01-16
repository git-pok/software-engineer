def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3
    """
    return word.lower().count(letter.lower())

print("should return 1 ----->,", single_letter_count('Hello World', 'h'))
print("should return 0 ----->,", single_letter_count('Hello World', 'z'))
print("should return 3 ----->,", single_letter_count("Hello World", 'l'))