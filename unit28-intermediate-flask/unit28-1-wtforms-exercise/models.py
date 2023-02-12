from flask_sqlalchemy import SQLAlchemy
# creates sqlalchemy app
db = SQLAlchemy()
# initializes sqlalcehmey with our app
def connect_db(app):
    db.app = app
    db.init_app(app)

class Pet(db.Model):
    __tablename__ = 'pets'

    def __repr__(self):
	    pet = self
	    return f"<Pet id={pet.id} name={pet.name} species={pet.species} photo_url={pet.photo_url} age={pet.age} notes={pet.notes} available={pet.available}>"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    name = db.Column(db.Text, nullable=False)

    species = db.Column(db.Text, nullable=False)

    photo_url = db.Column(db.String(), default='https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2946&q=80')

    age = db.Column(db.Integer)

    notes = db.Column(db.Text)

    available = db.Column(db.Boolean, nullable=False, default=True)