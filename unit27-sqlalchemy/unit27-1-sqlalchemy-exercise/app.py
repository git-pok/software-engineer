# Blogly application
from flask import Flask, request, render_template, redirect, flash
from flask_sqlalchemy import SQLAlchemy
from flask_debugtoolbar import DebugToolbarExtension 
from models import db, connect_db, User
from app_blogly_methods import create_db, create_db_row, update_db_row, delete_db_row 

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

app.config['SECRET_KEY'] = 'blogly'
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

connect_db(app)

@app.route('/')
def home():
    """redirects to '/users'"""
    return redirect('/users')

@app.route('/users')
def show_users():
    """responds with users page"""
    users = create_db(db)
    return render_template('users.html', users=users)

@app.route('/users/new')
def add_users_form():
    """responds with add users form"""
    return render_template('users_form.html')

@app.route('/user/submitted', methods=['POST'])
def create_user():
    """creates new user"""
    name_first = request.form['fname']
    name_last = request.form['lname']
    url_img = request.form['img-url'] 
    usr_id = create_db_row(name_first, name_last, url_img)

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
    user_edit = User.query.get_or_404(sbmtd_user_id)
    edit_first_name = request.form['fname-edit']
    edit_last_name = request.form['lname-edit']
    edit_url_img = request.form['img-url-edit']
     
    update_db_row(edit_first_name, edit_last_name, edit_url_img, user_edit)

    return redirect("/users")

@app.route('/user/delete/<int:sbmtd_user_id>', methods=['POST'])
def delete_user(sbmtd_user_id):
    """deletes a user"""
    user_edit = User.query.get_or_404(sbmtd_user_id)
    delete_db_row(user_edit)
    return redirect('/users')