from boggle import Boggle
from flask import Flask, request, render_template, flash, redirect, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = 'boggle'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

boggle_game = Boggle()

@app.route('/')
def boggle_home_page():
    boggle_board = boggle_game.make_board()
    session['boggle_board'] = boggle_board 
    return render_template("board_form.html", boggle_board=boggle_board)

@app.route('/check-word')
def guess():
    # Note, the args value 'word' is the variable name form the js file we sent,
    # through the axios request.
    word = request.args['word']
    # print('*******WORD********')
    # print(request.args)
    board = session['boggle_board']
    response = boggle_game.check_valid_word(board, word)
    return jsonify({'result': response})

@app.route('/post-score', methods=['POST'])
def post_score():
    """accesses the score sent form the client"""
    score = request.json.get('params').get('score', 'no score')
    session['score'] = score
    return jsonify(score)
    # Line 36 breaks out of the server and enters pdb to access variables.
    # breakpoint()
    # Note, when we dont return json from the view functions tha habdle axios,
    # we get error in the js console and Terminal.  


