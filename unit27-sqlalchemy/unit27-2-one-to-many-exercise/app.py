# Blogly application
from flask import Flask, request, render_template, redirect, flash
from flask_sqlalchemy import SQLAlchemy
from flask_debugtoolbar import DebugToolbarExtension 
from models import db, connect_db, User, Post
from app_blogly_methods import create_db, create_db_row, update_db_row, delete_db_row, create_post_db_row 
from app_blogly_methods import update_post_db_row, delete_post_db_row

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
# test db
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_tests'

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
    posts_data = user.posts_table
    return render_template('user_details.html', user=user, posts_data=posts_data)

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

# BLOGLY APP PART II, ADDING POSTS

@app.route('/users/<int:user_id>/posts/new')
def post_form(user_id):
    """requests a post form"""
    user_data = User.query.get_or_404(user_id)
    return render_template('create_post_form.html', user_data=user_data)

@app.route('/users/<int:user_id>/posts/new', methods=['POST'])
def submitted_post_form(user_id):
    """requests a POST, and saves the body to the Post database"""
    user_data = User.query.get_or_404(user_id)
    post_title = request.form['post-title']
    user_content = request.form['post-content']
    post_user_id = user_id 
    create_post_db_row(post_title, user_content, post_user_id)
    return redirect(f"/users/{user_id}")

@app.route('/posts/<int:post_id>')
def post_details(post_id):
    """requests a details of a specific post"""
    post_data = Post.query.get_or_404(post_id)
    return render_template('post_details.html', post_data=post_data)

@app.route('/posts/<int:post_id>/edit')
def edit_post_form(post_id):
    """requests an edit post form"""
    post_data = Post.query.get_or_404(post_id)
    return render_template('post_edit_form.html', post_data=post_data)

@app.route('/posts/<int:post_id>/edit', methods=['POST'])
def submitted_post_edits(post_id):
    """requests a POST rewuest with edited post data"""
    new_post_title = request.form['title-edit']
    new_post_content = request.form['content-edit']
    post_edit = Post.query.get_or_404(post_id)
    update_post_db_row(new_post_title, new_post_content, post_edit)
    return redirect(f"/posts/{post_id}")

@app.route('/posts/<int:post_id>/delete', methods=['POST'])
def delete_post_db_row_request(post_id):
    post_edit = Post.query.get_or_404(post_id)
    post_user_id = post_edit.user_id
    delete_post_db_row(post_edit)

    return redirect(f"/users/{post_user_id}")