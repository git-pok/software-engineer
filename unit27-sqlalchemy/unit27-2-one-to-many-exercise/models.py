from flask_sqlalchemy import SQLAlchemy
import datetime

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)

class User(db.Model):
    __tablename__ = 'users'

    def __repr__(self):
	    usr = self
	    return f"<User id={usr.id} first_name={usr.first_name} last_name={usr.last_name} image_url={usr.image_url}>"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    first_name = db.Column(db.String(230), nullable=False)

    last_name = db.Column(db.String(230), nullable=False)

    image_url = db.Column(db.String(), default='https://defaultimage.com')

    posts_table = db.Relationship('Post', backref='users')

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    title = db.Column(db.String(230), nullable=False)

    content = db.Column(db.Text, nullable=False)

    created_at = db.Column(db.DateTime, default=datetime.datetime.now)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

