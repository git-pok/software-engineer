from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import Story 

app = Flask(__name__)
app.config['SECRET_KEY'] = 'madlibs'
debug = DebugToolbarExtension(app)

@app.route("/")
def home_form():
    """
    The route for the apps home page.
    It repsonds with form.html, a form.
    form.html allows users to type nouns and such.
    Then, it creates a story from them,
    when implemented to a template created from the class, Story.
    """ 
    return render_template("form.html")

@app.route("/story")
def make_story():
    """
    Line 31 creates a variable that holds the query string data.
    Line 32-36 creates variables for each value in query_dict.
    Line 38 creates a dictionary with the query string variables.
    Line 46 creates a story template with class, Story.
    Line 52 fills the story template with the values from line 38, answers.
    Line 54 responds with story.html,
    a story made of the query string parameter values.
    """
    query_dict = request.args
    place_val = query_dict.get("place")
    noun_val = query_dict.get("noun")
    verb_val = query_dict.get("verb")
    adjective_val = query_dict.get("adjective")
    plural_noun_val = query_dict.get("plural_noun")

    answers = {
        "place": place_val, 
        "noun": noun_val,
        "verb": verb_val,
        "adjective": adjective_val,
        "plural_noun": plural_noun_val,
    }

    story_template = Story(
        ["place", "noun", "verb", "adjective", "plural_noun"],
        """Once upon a time in a long-ago {place}, there lived a
        large {adjective} {noun}. It loved to {verb} {plural_noun}."""
    )

    story = story_template.generate(answers)
       
    return render_template("story.html", answers=answers, story=story)

