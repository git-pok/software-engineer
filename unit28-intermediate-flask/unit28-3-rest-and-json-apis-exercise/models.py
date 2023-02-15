# Models for Cupcake app
from flask_sqlalchemy import SQLAlchemy

# creates sqlalchemy app
db = SQLAlchemy()
# initializes sqlalcehmey with our app
def connect_db(app):
    db.app = app
    db.init_app(app)

class Cupcake(db.Model):
    __tablename__ = 'cupcakes'

    def __repr__(self):
	    cake = self
	    return f"<Cupcake id={cake.id} flavor={cake.flavor} size={cake.size} rating={cake.rating} image={cake.image}>"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    flavor = db.Column(db.Text, nullable=False)

    size = db.Column(db.Text, nullable=False)

    rating = db.Column(db.Float, nullable=False)

    image = db.Column(db.Text, nullable=False, default='https://tinyurl.com/demo-cupcake')

    def serialize(self):
        return {
            "id": self.id,
            "flavor": self.flavor,
            "size": self.size,
            "rating": self.rating,
            "image": self.image, 
        } 
