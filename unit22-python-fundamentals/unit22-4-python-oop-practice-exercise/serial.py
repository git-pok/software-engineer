"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.

    Attributes
    - - - - - - - - - - -
    start: int
        gives the next attribute a value

    next: int
        attribute that increases by one
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self, start):
        """
        initializes the objects start and next attributes for each instance
        """
        self.start = self.next = start 

    def generate(self):
        """
        increases the vlaue of the next attribute by 1
        """
        self.next += 1
        return self.next

    def reset(self):
        """
        resets the value of the start attribute
        """
        self.start = self.start
        self.next = self.start

    def __repr__(self):
        """
        Returns attribute data for Serial Generator class
        """
        return f"start={self.start}, next={self.next + 1}"


