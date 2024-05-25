from models import db, connect_db, User 

def get_users():
    """
    Logic: queries all users from User model.
    Returns: a list of users.
    """
    users = User.query.all()
    return users

def get_user(user_id):
    """
    Logic: queries a user from User model.
    Returns: a user or 404 if not found.
    """
    user = User.query.get_or_404(user_id)
    return user

def form_data_dict(req_immut_dict):
    """
    Logic: creates dictionary from request data structure.
    Returns: dictionary.
    """
    req_dict = dict(req_immut_dict)
    img = req_dict.get("img")
    req_dict["img"] = None if not img else img
    return req_dict

def create_db_user(fname, lname, img):
    """
    Logic: creates instance and db row in User model.
    Returns: queried created user.
    """ 
    user = User(first_name=fname, last_name=lname, image_url=img)
    db.session.add(user)
    db.session.commit()
    created_user = User.query.filter_by(first_name=fname).first()
    return created_user

def update_db_row(req_immut_dict, user):
    """
    Logic: updates column values, and saves it to the database.
    Returns: None
    """
    req_dict = dict(req_immut_dict)
    fname = req_dict["fname-edit"]
    lname = req_dict["lname-edit"]
    img = req_dict["img-url-edit"]

    if fname:
        user.first_name = fname
    if lname:
        user.last_name = lname
    if img:
        user.image_url = img

    db.session.commit()

def delete_db_row(user):
    """
    Logic: deletes database row.
    Returns: None
    """
    db.session.delete(user) 
    db.session.commit()