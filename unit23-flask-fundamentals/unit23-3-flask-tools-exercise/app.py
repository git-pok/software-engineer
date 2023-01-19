from flask import Flask, request, render_template, flash, redirect
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey 

app = Flask(__name__)
app.config['SECRET_KEY'] = 'survey'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

# Line 86 clears REPONSE, the answers to questions,
# so the survey may start up again.
RESPONSE = []
SURVEY_LEN = len(satisfaction_survey.questions)

@app.route('/')
def survey_home_page():
    title = satisfaction_survey.title
    instructions = satisfaction_survey.instructions
    return render_template("survey_start.html", title=title, instructions=instructions)

@app.route('/questions/0')
def questions_0():
    question_one = satisfaction_survey.questions[0].question
    question_one_choices = satisfaction_survey.questions[0].choices
    question_one_choice_one = question_one_choices[0]
    question_one_choice_two = question_one_choices[1]
     
    return render_template("question-0.html", question_one=question_one, 
        question_one_choice_one=question_one_choice_one,
        question_one_choice_two=question_one_choice_two
        )

@app.route('/complete')
def survey_complete(): 
    return render_template("survey_complete.html")

# I cant find the values I submit from the radio buttons, in the flask debug toolbar.
# But, The POST and GET request are in the terminal output,
# when I submit the form, and the values are in the ImmutableMultiDict.
# While in the interactive debugger, the values are in the repsonse variable when I access it also.

@app.route('/answer', methods=["POST"])
def answer():
    question_answer = request.form.get('question-choices')
    RESPONSE.append(question_answer)

    if len(RESPONSE) == SURVEY_LEN:
        RESPONSE.clear()
        return redirect('/complete')

    return redirect(f"/questions/{len(RESPONSE)}")

@app.route('/questions/<int:qidx>')
def questions_id(qidx):
    if qidx == len(RESPONSE):
        question = satisfaction_survey.questions[qidx].question
        question_choices = satisfaction_survey.questions[qidx].choices
        question_choice_one = question_choices[0]
        question_choice_two = question_choices[1]

        return render_template(f"question-{qidx}.html", question=question, 
        question_choice_one=question_choice_one,
        question_choice_two=question_choice_two
        )

    if qidx != len(RESPONSE):
        question = satisfaction_survey.questions[len(RESPONSE)].question
        question_choices = satisfaction_survey.questions[len(RESPONSE)].choices
        question_choice_one = question_choices[0]
        question_choice_two = question_choices[1]
        flash(f"Can't Answer that Questions Yet!!! Answer Question {len(RESPONSE)}", "error")

        return render_template(f"question-{len(RESPONSE)}.html", question=question, 
        question_choice_one=question_choice_one,
        question_choice_two=question_choice_two
        )

