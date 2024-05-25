# Blogly application
from flask import Flask, request, render_template, redirect, flash
from flask_sqlalchemy import SQLAlchemy
from flask_debugtoolbar import DebugToolbarExtension 
from models import db, connect_db, User
from app_blogly_methods import get_users, form_data_dict, create_db_user
from app_blogly_methods import get_user, update_db_row, delete_db_row
from sys import argv

app = Flask(__name__)
# check if test command is used from command line
is_cmd_test = argv[0].find("unittest") != -1
# sqlalchemy database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_tests' if is_cmd_test else 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
app.config['SECRET_KEY'] = 'blogly'
debug = DebugToolbarExtension(app)

connect_db(app)
# From ipython and while in venv mode,
# run below code. This will create the models.
# If ran in this file, the db data deletes every
# time a file change is made!
# from app import app
# from models import db
# with app.app_context():
#     db.drop_all()
#     db.create_all()

@app.route('/')
def home():
    """redirects to '/users'"""
    return redirect('/users')

@app.route('/users')
def show_users():
    """responds with users page"""
    users = get_users()
    return render_template('users.html', users=users)

@app.route('/users/new')
def add_users_form():
    """responds with add users form"""
    return render_template('users_form.html')

@app.route('/users/new', methods=['POST'])
def create_user():
    """creates new user"""
    req_dict = form_data_dict(request.form)
    created_usr = create_db_user(req_dict["fname"], req_dict["lname"], req_dict.get("img"))
    return redirect("/users")

@app.route('/users/<int:user_id>')
def user_details(user_id):
    """repsonds with user details page"""
    user = User.query.get_or_404(user_id)
    return render_template('user_details.html', user=user)

@app.route('/users/<int:user_id>/edit')
def user_edit_form(user_id):
    """repsonds with user edit page"""
    user = User.query.get_or_404(user_id)
    return render_template('user_edit_form.html', user=user)

@app.route('/user/edit/<int:sbmtd_user_id>', methods=['POST'])
def edited_user_post(sbmtd_user_id):
    """saves user edits"""
    user = get_user(sbmtd_user_id)
    update_db_row(request.form, user)

    return redirect("/users")

@app.route('/user/delete/<int:sbmtd_user_id>', methods=['POST'])
def delete_user(sbmtd_user_id):
    """deletes a user"""
    user = get_user(sbmtd_user_id)
    delete_db_row(user)
    return redirect('/users')