"""Madlibs Stories."""


class Story:
    """Madlibs story.

    To  make a story, pass a list of prompts, and the text
    of the template.

        >>> s = Story(["noun", "verb"],
        ...     "I love to {verb} a good {noun}.")

    To generate text from a story, pass in a dictionary-like thing
    of {prompt: answer, promp:answer):

        >>> ans = {"verb": "eat", "noun": "mango"}
        >>> s.generate(ans)
        'I love to eat a good mango.'

    The initial instance, like,
    s = Story(["noun", "verb"], "I love to {verb} a good {noun}."),
    creates the template that works with the ans dictionary and generate().
    We do not pass in any arguments to the intiital instance; we dont replace the word noun and verb.
    s.generate(ans) will use the created template from the intial instance, s,
    and pass in values from ans dictionary to fill in noun, and verb.
    """

    def __init__(self, words, text):
        """Create story with words and template text.
        If we access s.propmts, we get, ["noun", "verb"].
        If we access s.template, we get,
        "I love to {verb} a good {noun}."
        """

        self.prompts = words
        self.template = text

    def generate(self, answers):
        """Substitute answers into text.
        When we run, s.generate(ans), we get,
        'I love to eat a good mango.'
        """

        text = self.template
    # The syntax on line 47 accesses the ans dictionary and replaces the keys with the values,
    # to make {verb} eat and {noun} mango
        for (key, val) in answers.items():
            # We unpack in line 47.
            # Note, line 54 simply replaces {" + key + "},
            # with val, which are the unpacked values in line 47.
            # Line 54 doesnt enter the dictionary or unpack or anything.
            # It replaces the string characters with unpacked values.
            # Note, {} are string values in this situation also.
            text = text.replace("{" + key + "}", val)

        return text


# Here's a story to get you started.
# The instance on line 63 uses a larger array and story.
# Note, our dictionary will have to have all the added keys,
# all the values in the array.
story = Story(
    ["place", "noun", "verb", "adjective", "plural_noun"],
    """Once upon a time in a long-ago {place}, there lived a
       large {adjective} {noun}. It loved to {verb} {plural_noun}."""
)
