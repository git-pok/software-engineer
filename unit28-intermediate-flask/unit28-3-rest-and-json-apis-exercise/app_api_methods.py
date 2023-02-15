from flask_sqlalchemy import SQLAlchemy
from models import db, Cupcake

def create_cupcake(flavorf, sizef, ratingf, imagef):
    """creates Cupcake instance and saves it to database"""
    if imagef: 
        flavor = Cupcake(flavor=flavorf, size=sizef, rating=ratingf, image=imagef)
        db.session.add(flavor)
        db.session.commit()

    else: 
        flavor = Cupcake(flavor=flavorf, size=sizef, rating=ratingf)
        db.session.add(flavor)
        db.session.commit()

    return flavor

def update_cupcake(flavorf, sizef, ratingf, imagef, cupcake):
    """updates Cupcake instance and updates database"""
    cupcake.flavor = flavorf
    cupcake.size = sizef
    cupcake.rating = ratingf
    cupcake.image = imagef
    db.session.commit()

    return cupcake

def delete_cupcake(cupcake):
    """deletes Cupcake instance and updates database""" 
    db.session.delete(cupcake)
    db.session.commit()
    return "Deleted"