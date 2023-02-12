from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import InputRequired, AnyOf, URL, Optional, NumberRange

class AddPetForm(FlaskForm):
    """
    form for adding pets
    """
    name = StringField('Pet Name', validators=[InputRequired(message='Name can"t be blank!')])

    species = StringField('Species', validators=[InputRequired(message='Species can"t be blank!'),
    AnyOf(['cat', 'Cat', 'CAT', 'dog', 'Dog', 'DOG', 'porcupine', 'Porcupine', 'PORCUPINE'],
    message='Species must be cat, dog, or porcupine!')])

    photo_url = StringField('Photo URL', validators=[URL(message='Invalid URL!'),
    Optional()])

    age = IntegerField('Age', validators=[NumberRange(min=0, max=30, message='Age must be between 0 and 30!'),
    Optional()])

    notes = StringField('Notes')

class EditPetForm(FlaskForm):
    """
    form for editing a pet
    """
    name = StringField('Pet Name', validators=[InputRequired(message='Name can"t be blank!')])

    species = StringField('Species', validators=[InputRequired(message='Species can"t be blank!'),
    AnyOf(['cat', 'Cat', 'CAT', 'dog', 'Dog', 'DOG', 'porcupine', 'Porcupine', 'PORCUPINE'],
    message='Species must be cat, dog, or porcupine!')])

    photo_url = StringField('Photo URL', validators=[URL(message='Invalid URL!'),
    Optional()])

    age = IntegerField('Age', validators=[NumberRange(min=0, max=30, message='Age must be between 0 and 30!'),
    Optional()])

    notes = StringField('Notes')

    available = BooleanField('Available') 


