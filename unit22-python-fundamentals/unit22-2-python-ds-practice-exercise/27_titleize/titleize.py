def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    lower_case_phrase = phrase.lower()
    return lower_case_phrase.title()  

print("should return, This Is Awesome ----->", titleize('this is awesome'))
print("should return, Only Capitalize First ----->", titleize('oNLy cAPITALIZe fIRSt'))