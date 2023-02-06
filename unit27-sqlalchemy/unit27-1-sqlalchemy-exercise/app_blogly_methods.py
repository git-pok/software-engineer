from models import db, connect_db, User

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
