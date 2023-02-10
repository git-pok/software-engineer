from models import db, connect_db, User, Post, Tag, PostTag

def create_db(db):
    """creates table and table object"""
    db.create_all()
    return User.query.all() 

def create_db_row(name_first, name_last, url_img):
    """creates instance and db row""" 
    name_first = User(first_name=name_first, last_name=name_last, image_url=url_img)
    id = User.id 
    db.session.add(name_first)
    db.session.commit()
     
    id = name_first.id
    return id

def update_db_row(edit_first_name, edit_last_name, edit_url_img, user_edit):
    """
    updates column values, and saves it to the database.
    """
    if edit_first_name: 
        user_edit.first_name = edit_first_name
    
        db.session.add(user_edit) 
        db.session.commit()
    if edit_last_name: 
        user_edit.last_name = edit_last_name
        db.session.add(user_edit) 
        db.session.commit()
    if edit_url_img: 
        user_edit.image_url = edit_url_img
        db.session.add(user_edit) 
        db.session.commit()
    if edit_first_name and edit_last_name and edit_url_img: 
        user_edit.first_name = edit_first_name
        user_edit.last_name = edit_last_name
        user_edit.image_url = edit_url_img
        db.session.add(user_edit) 
        db.session.commit()

def delete_db_row(user_edit):
    """
    deletes the instance and the database row.
    """
    db.session.delete(user_edit) 
    db.session.commit()

# BLOGLY APP PART II ADDING POSTS
def create_post_db_row(post_title, user_content, post_user_id):
    """creates instance and db row for Post table""" 
    user_post = Post(title=post_title, content=user_content, user_id=post_user_id)
    
    post_id = Post.id 
    db.session.add(user_post)
    db.session.commit()

    return user_post.id
     
def update_post_db_row(new_post_title, new_post_content, post_edit, post_tags):
    """updates post with new edits"""
    if new_post_title: 
        post_edit.title = new_post_title   
        db.session.add(post_edit) 
        db.session.commit()
    if new_post_title and new_post_content: 
        post_edit.title = new_post_title
        post_edit.content = new_post_content
        db.session.add(post_edit) 
        db.session.commit()
    if new_post_content:
        post_edit.content = new_post_content
        db.session.add(post_edit) 
        db.session.commit()
    # BLOGLY APP PART III code
    if post_tags:
        for tag in post_tags:
            post_tag = Tag.query.filter_by(name=tag).all()
            post_tag_obj = post_tag[0]
        
            post_edit.tags.append(post_tag_obj)     
            db.session.add(post_tag_obj) 
            db.session.commit()
    # END OF BLOGLY APP PART III code

def delete_post_db_row(post_edit):
    """
    deletes the database row.
    """
    db.session.delete(post_edit) 
    db.session.commit()

# BLOGLY APP PART III, ADDING M2M RELATIONSHIP
def create_tag_table_row(tag_name):
    """creates instance and db row for Tag table""" 
    tag = Tag(name=tag_name)
    # tag_id = Tag.id 
    db.session.add(tag)
    db.session.commit()
    # return tag_id

def update_tag_table_row(tag_edit_name, tag):
    """updates row in Tag table""" 
    if tag_edit_name: 
        tag.name = tag_edit_name   
        db.session.add(tag) 
        db.session.commit()

def delete_tag_table_row(tag_row_id):
    """deletes row in Tag table"""     
    db.session.delete(tag_row_id) 
    db.session.commit()

def create_post_tag_table_row(user_post, post_tags):
    """creates rows in PostTag table, combines a post id with tag ids"""
    for tag in post_tags:
        post_tag = Tag.query.filter_by(name=tag).all()
        # post_tag_id = post_tag[0].id
        post_tag_obj = post_tag[0]
        
        user_post.tags.append(post_tag_obj)     
        db.session.add(post_tag_obj) 
        db.session.commit()
