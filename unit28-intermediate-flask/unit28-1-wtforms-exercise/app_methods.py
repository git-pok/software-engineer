from flask_sqlalchemy import SQLAlchemy
from models import db, Pet
from wtforms.validators import ValidationError

def create_new_pet(namef, speciesf, agef, notesf, photo_urlf):
    """
    creates a Pet instance and commits it to the pets database
    uses form inputs for the instance arguments
    the if expression is for if the user enters a photo_url
    if the user doesn't enter a photo_url, our Pet model has a default photo_url
    """

    if photo_urlf: 
        namef = Pet(name=namef, species=speciesf, age=agef, notes=notesf, photo_url=photo_urlf)

        db.session.add(namef)
        db.session.commit()
    else:
        namef = Pet(name=namef, species=speciesf, age=agef, notes=notesf)

        db.session.add(namef)
        db.session.commit()

def update_pet(pet_obj, new_name, new_species, new_age, new_notes, new_photo_url, new_availability):
    """
    updates a Pet object and commits it to the pets database
    uses form inputs for the instance arguments
    """
    if new_photo_url: 
        pet_obj.name = new_name
        pet_obj.species = new_species
        pet_obj.age = new_age
        pet_obj.notes = new_notes
        pet_obj.photo_url = new_photo_url
        pet_obj.available = new_availability

        db.session.add(pet_obj)
        db.session.commit()
    else:
        pet_obj.name = new_name
        pet_obj.species = new_species
        pet_obj.age = new_age
        pet_obj.notes = new_notes
        pet_obj.available = new_availability

        db.session.add(pet_obj)
        db.session.commit()
        