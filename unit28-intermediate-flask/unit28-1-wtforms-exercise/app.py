from flask import Flask, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from flask_sqlalchemy import SQLAlchemy 
from models import db, connect_db, Pet
from forms import AddPetForm, EditPetForm
from app_methods import create_new_pet, update_pet

# flask app
app = Flask(__name__)
# sqlalchemy database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pets'
# sqlalchemy test database connection
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pets_tests'
# disable sqlalchemy track
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# enable sqlalchemy echo for terminal output when querying
app.config['SQLALCHEMY_ECHO'] = True
# flask secret key
app.config['SECRET_KEY'] = 'blogly'
# this prevents the flask-debugtoolbar from effecting route redirects
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
# create flask-debugtoolbar app
debug = DebugToolbarExtension(app)
# connect the app to sqlalchemy
connect_db(app)
# debugger1
# import pdb
# pdb.set_trace()
# debugger2
# raise

@app.route('/')
def home():
    """responds with home.html"""
    pets = db.session.query(Pet)
    return render_template('home.html', pets=pets)

@app.route('/add', methods=['GET', 'POST'])
def add_pet():
    """
    responds with add_pet.html
    handles submitted form
    """
    # creates form
    form = AddPetForm()
    # checks for a post request and validates CSRF Token
    if form.validate_on_submit():
        # variables for method arguments
        # they are declared with wtf values
        namef = form.name.data
        speciesf = form.species.data.lower()
        agef = form.age.data
        notesf = form.notes.data 
        photo_urlf = form.photo_url.data
      
        create_new_pet(namef, speciesf, agef, notesf, photo_urlf)
        return redirect('/')
    else:
        return render_template('add_pet.html', form=form)

@app.route('/<int:pet_id>', methods=['GET', 'POST'])
def pet_details(pet_id):
    """
    responds with pet_details.html
    handles pet edit form submission
    """
    pet = Pet.query.get_or_404(pet_id)
    pet_obj = pet
    # creates form and fills values with selected pet data
    form = EditPetForm(obj=pet)
    # checks for a post request and validates CSRF Token
    if form.validate_on_submit():
        # variables for method arguments
        # they are declared with wtf values
        new_name = form.name.data
        new_species = form.species.data
        new_age = form.age.data
        new_notes = form.notes.data
        new_photo_url = form.photo_url.data
        new_availability = form.available.data
        update_pet(pet_obj, new_name, new_species, new_age, new_notes, new_photo_url, new_availability)
        return redirect('/')
    else:
        return render_template('pet_details.html', pet=pet, form=form)