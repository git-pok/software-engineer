# Blogly application
from flask import Flask, request, render_template, redirect, flash
from flask_sqlalchemy import SQLAlchemy
from flask_debugtoolbar import DebugToolbarExtension 
from models import db, connect_db, User, Post, Tag, PostTag
from app_blogly_methods import create_db, create_db_row, update_db_row, delete_db_row, create_post_db_row 
from app_blogly_methods import update_post_db_row, delete_post_db_row
from app_blogly_methods import create_tag_table_row, update_tag_table_row, delete_tag_table_row, create_post_tag_table_row

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
    form_data = (request.form)
    user_edit = User.query.get_or_404(sbmtd_user_id)
    update_db_row(form_data, user_edit)
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
    # BLOGLY APP PART III code
    tags = Tag.query.all()
    # END OF BLOGLY APP PART III code
    return render_template('create_post_form.html', user_data=user_data, tags=tags)

@app.route('/users/<int:user_id>/posts/new', methods=['POST'])
def submitted_post_form(user_id):
    """requests a POST, and saves the body to the Post database"""
    user_data = User.query.get_or_404(user_id)
    post_title = request.form['post-title']
    user_content = request.form['post-content']
    post_user_id = user_id 
    user_post_id = create_post_db_row(post_title, user_content, post_user_id)
    # BLOGLY APP PART III code
    post_tags = request.form.getlist('checkbox')
    # user_post = Post.query.filter_by(title=post_title).first()
    user_post = Post.query.get(user_post_id)
    
    create_post_tag_table_row(user_post, post_tags)
    # END OF BLOGLY APP PART III code
    return redirect(f"/users/{user_id}")

@app.route('/posts/<int:post_id>')
def post_details(post_id):
    """requests a details of a specific post"""
    post_data = Post.query.get_or_404(post_id)

    # BLOGLY APP PART III code
    # post = Post.query.filter_by(user_id=user.id).all()
    post = Post.query.filter_by(id=post_id).all()
    posts_for_tags = post[0].tags
    # END OF BLOGLY APP PART III code
    return render_template('post_details.html', post_data=post_data, posts_for_tags=posts_for_tags)

@app.route('/posts/<int:post_id>/edit')
def edit_post_form(post_id):
    """requests an edit post form"""
    # BLOGLY APP PART III code
    tags = Tag.query.all()
    # END OF BLOGLY APP PART III code
    post_data = Post.query.get_or_404(post_id)
    return render_template('post_edit_form.html', post_data=post_data, tags=tags)

@app.route('/posts/<int:post_id>/edit', methods=['POST'])
def submitted_post_edits(post_id):
    """requests a POST rewuest with edited post data"""
    form_data = (request.form)
    post_edit = Post.query.get_or_404(post_id)
    # BLOGLY APP PART III code
    post_tags = request.form.getlist('checkbox')
    # END OF BLOGLY APP PART III code
    update_post_db_row(form_data, post_edit, post_tags)
    return redirect(f"/posts/{post_id}")

@app.route('/posts/<int:post_id>/delete', methods=['POST'])
def delete_post_db_row_request(post_id):
    post_edit = Post.query.get_or_404(post_id)
    post_user_id = post_edit.user_id
    delete_post_db_row(post_edit)

    return redirect(f"/users/{post_user_id}")

# BLOGLY APP PART III, ADDING M2M RELATIONSHIP
@app.route('/tags')
def tags():
    """returns tags.html tamplate"""
    tags = Tag.query.all()
    return render_template('tags.html', tags=tags)

@app.route('/tags/<int:tag_id>')
def tags_details(tag_id):
    """returns tag page with posts that have its tag"""
    tag = Tag.query.get(tag_id)
    tag_name_cptl = tag.name.capitalize()
    posts_for_tag = tag.posts
    return render_template('tag_details.html', tag=tag, posts_for_tag=posts_for_tag, tag_cptl=tag_name_cptl)

@app.route('/tags/new')
def add_tag_form():
    """returns add tag form"""
    return render_template('add_tag_form.html')

@app.route('/tags/new', methods=['POST'])
def submitted_add_tag_form():
    """creates a new tag"""
    tag_name = request.form.get('tag-name')
    print(tag_name)
    create_tag_table_row(tag_name)
    return redirect('/tags')

@app.route('/tags/<int:tag_id>/edit')
def edit_tag_form(tag_id):
    """requests the tag edit form"""
    tag = Tag.query.get(tag_id)
    tag_name_cptl = tag.name.capitalize() 
    return render_template('edit_tag_form.html', tag=tag, tag_cptl=tag_name_cptl)

@app.route('/tags/<int:tag_id>/edit', methods=['POST'])
def submitted_edit_tag_form(tag_id):
    """updates a row in Tag table"""
    tag_edit_name = request.form.get('tag-edit')
    tag = Tag.query.get(tag_id)
    # When we update a row, the row moves to the last row,
    # but the id is still the same.
    update_tag_table_row(tag_edit_name, tag)
    return redirect('/tags')

@app.route('/tags/<int:tag_id>/delete', methods=['POST', 'GET'])
def delete_tag(tag_id):
    """deletes a row in Tag table"""
    tag_row = Tag.query.get_or_404(tag_id)
    # tag_row_id = tag_row.id
 
    delete_tag_table_row(tag_row)

    return redirect('/tags')