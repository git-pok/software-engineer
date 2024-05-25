# Blogly App Exercise Part 1
This is a multi-unit exercise to practice SQLAlchemy with relationships. Each part corresponds to a unit so make sure that you complete one part and then go onto the next unit.

In it, you’ll build “Blogly”, a blogging application.

## How To create_all() Flask SQLAlchemy Models
From ipython and while in venv mode, run below code. This will create the models. If ran in app file the db data deletes and models recreate every time a file change is made!
```
from app import app
from models import db
with app.app_context():
    db.drop_all()
    db.create_all()
```

## Command To Run Tests
```
python3 -m unittest test_file_name.py
```

## Create user Model
First, create a User model for SQLAlchemy. Put this in a models.py file.

It should have the following columns:
- id, an autoincrementing integer number that is the primary key
- first_name and last_name
- image_url for profile images

Make good choices about whether things should be required, have defaults, and so on.

## Create Flask App
Next, create a skeleton Flask app. You can pattern match from the lecture demo.

It should be able to import the User model, and create the tables using SQLAlchemy. Make sure you have the FlaskDebugToolbar installed — it’s especially helpful when using SQLAlchemy.

## Make a Base Template
Add a base template with slots for the page title and content. Your other templates should use this.

You can use Bootstrap for this project, but don’t spend a lot of time worrying about styling — this is not a goal of this exercise.

## Make Routes for the Following:
GET /:
- Redirect to list of users. (We’ll fix this in a later step).

GET /users:
- Show all users.
- Make these links to view the detail page for the user.
- Have a link here to the add-user form.

GET /users/new:
- Show an add form for users

POST /users/new:
- Process the add form, adding a new user and going back to /users

GET /users/[user-id]:
- Show information about the given user.
- Have a button to get to their edit page, and to delete the user.

GET /users/[user-id]/edit:
- Show the edit page for a user.
- Have a cancel button that returns to the detail page for a user, and a save button that updates the user.

POST /users/[user-id]/edit:
- Process the edit form, returning the user to the /users page.

POST /users/[user-id]/delete:
- Delete the user.

## Add Testing
Add python tests to at least 4 of your routes.