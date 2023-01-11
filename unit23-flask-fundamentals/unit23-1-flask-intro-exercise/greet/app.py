from flask import Flask

app = Flask(__name__)

@app.route('/welcome')
def welcome():
    # """
    # Returns 'welcome'
    # """
	return """<h1>welcome</h1>"""

@app.route('/welcome/home')
def welcome_home():
    # """
    # Returns 'welcome home'
    # """
	return """<h1>welcome home</h1>"""

@app.route('/welcome/back')
def welcome_back():
    # """
    # Returns 'welcome home'
    # """
	return """<h1>welcome back</h1>"""

