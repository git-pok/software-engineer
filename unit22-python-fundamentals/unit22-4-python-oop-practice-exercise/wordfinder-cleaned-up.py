"""Word Finder: finds random words from a dictionary."""

from random import choice

class WordFinder:
    """
    Reads a file, prints how many words were read,
    and generates a random word from the read words

    Attributes
    - - - - - - - - - - 
    path: url
        file path

    file: file object 
        creates a file object from file path

    words: array of strings
        creates an array of the words in the read file
    """
    def __init__(self, path):
        """
        Initializes Attributes and file path
        Prints how many lines were read
        """
        path = open(path, "r") 
        self.words = [word for word in path]
        print(f"{len(self.words)} words read")
        
    def random(self):
        """
        Returns a random word from the words array
        """
        return choice(self.words).strip()

class SpecialWordFinder(WordFinder):
    """
    Filters comments and blank lines from the words array
    Returnns a random value from the filtered words array

    >>> swf = SpecialWordFinder("special.txt")
    18 words read

    >>> swf.random() in ['Boomerang', 'Drone', 'Mini PC']
    True

    >>> swf.random() in ['Boomerang', 'Drone', 'Mini PC']
    True

    >>> swf.random() in ['Boomerang', 'Drone', 'Mini PC']
    True
    """
    def __init__(self, path):
        super().__init__(path)
        self.words = [word for word in self.words if not word.startswith("#") and word.strip()]
        



    
