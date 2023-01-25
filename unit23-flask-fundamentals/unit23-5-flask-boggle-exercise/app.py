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
    """makes a boggle board, session cookie, and form"""
    boggle_board = boggle_game.make_board()
    session['boggle_board'] = boggle_board 
    return render_template("board_form.html", boggle_board=boggle_board)

@app.route('/check-word')
def guess():
    """checks if word sent from js axios request is valid"""
    word = request.args['word']
    board = session['boggle_board']
    response = boggle_game.check_valid_word(board, word)
    return jsonify({'result': response})

@app.route('/post-score', methods=['POST'])
def post_score():
    """accesses the score sent from the client"""
    score = request.json.get('params').get('score', 'no score')
    session['score'] = score
    return jsonify(score)  


