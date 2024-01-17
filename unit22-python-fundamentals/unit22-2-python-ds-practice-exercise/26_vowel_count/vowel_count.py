def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}

        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    vowels = 'aeiou'
    phrase_lower_case = phrase.lower()
    vowel_count_objt = {}
    for letter in phrase_lower_case:
        if vowels.find(letter) != -1:
            if vowel_count_objt.get(letter) == None:
                vowel_count_objt[letter] = 1
            else:
                vowel_count_objt[letter] += 1

    return vowel_count_objt

print("should return, {'i': 1, 'o': 2} ----->,", vowel_count('rithm school'))
print("should return, {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1} ----->,", vowel_count('HOW ARE YOU? i am great!'))