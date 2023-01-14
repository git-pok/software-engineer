from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import Story 

app = Flask(__name__)
app.config['SECRET_KEY'] = 'madlibs'
debug = DebugToolbarExtension(app)

@app.route("/")
def home_form(): 
    return render_template("form.html")

@app.route("/story")
def make_story():
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

