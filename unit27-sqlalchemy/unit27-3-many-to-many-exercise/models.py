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

    def __repr__(self):
	    pos = self
	    return f"<Post id={pos.id} user_id={pos.user_id} title={pos.title} content={pos.content} created_at={pos.created_at}>"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    title = db.Column(db.String(230), nullable=False)

    content = db.Column(db.Text, nullable=False)

    created_at = db.Column(db.DateTime, default=datetime.datetime.now)

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    tags = db.relationship('Tag', secondary="posts_tags", backref="posts")

class Tag(db.Model):
    __tablename__ = 'tags'

    def __repr__(self):
	    tg = self
	    return f"<Tag id={tg.id} name={tg.name}>"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    name = db.Column(db.Text, nullable=False, unique=True)

class PostTag(db.Model):
    __tablename__ = 'posts_tags'

    def __repr__(self):
	    postg = self
	    return f"<PostTag post_id={postg.post_id} tag_id={postg.tag_id}>"

    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'), primary_key=True)

    tag_id = db.Column(db.Integer, db.ForeignKey('tags.id'), primary_key=True)




