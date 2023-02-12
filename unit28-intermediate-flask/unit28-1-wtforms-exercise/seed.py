from models import Pet, db
from app import app

# Create all tables
# drop_all drops all tables in the database
# create_all creates any of those tables from he models
with app.app_context():
    db.drop_all()
    db.create_all()

# If table isn't empty, empty it
# Pet.query.delete() empties everything 
    Pet.query.delete()

    pet1 = Pet(name="Dezo", species="Dog", photo_url='https://plus.unsplash.com/premium_photo-1673710479024-98b1763099b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80', age="2", notes="Lovely dog!!!", available=True)
    pet2 = Pet(name="Leo", species="Dog", age="1", notes="Fast dog!!!", available=False)
    db.session.add(pet1)
    db.session.add(pet2)
    db.session.commit()