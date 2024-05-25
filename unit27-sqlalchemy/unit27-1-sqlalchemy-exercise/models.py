from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

class User(db.Model):
    __tablename__ = 'users'

    def __repr__(self):
	    usr = self
	    return f"<User id={usr.id} fname={usr.first_name} lname={usr.last_name} image_url={usr.image_url}>"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    first_name = db.Column(db.String(30), nullable=False)

    last_name = db.Column(db.String(30), nullable=False)

    image_url = db.Column(db.String(), default='https://dujour.com/wp-content/uploads/7/7771_cd81cfd0a3397761fac44ddbe5ec3349.jpg')