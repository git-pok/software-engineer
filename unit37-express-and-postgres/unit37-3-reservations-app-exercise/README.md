# Extending Lunch.ly Reservation System
Lunchly is an Express app that is not an API server, nor is it RESTful.

Instead, it’s a server-side templated application with custom URLs.

## Added Code Note
The code I added to each file is commented within each file.

## Part One: Setting Up
- Seed the database with data.sql
- Install the required node modules
- Start the server with nodemon
- Take a tour of the site at http://localhost:3000 — you should be able to see the list of customers, view a customer detail page, and add a customer. Adding a reservation is not yet complete, so expect errors if you try to create a new reservation.

## Part Two: Look at the Code!
There’s lots of existing sample code. Give yourself a quick tour!

app.js:
- Our application object; can be imported from other files/tests

models/:
- Model objects as as classes, to “abstract away” database handling

routes.js:
- Routes for the web interface

server.js:
- Functionality to start the server (this is the file that is run to start it)

templates/:
- Jinja templates, rendered with the JS “Nunjucks” library

seed.py:
- File to create sample data (you don’t need to use this, but may find it interesting as an example of how to create realistic fake data.)

## Part Three: Class (Static) Methods
- Many methods on objects are called on an instance of a class (called on an individual cat, to use our example above). In some cases, though, you may want a method that isn’t called on a particular cat, but is called on the Cat class itself.

This is most often useful for methods that do things like create a new cat, or look up a cat in a database — you’d want to call this function before we had an individual cat yet, since the job of this function is to find/create one.

While many languages call these “class methods,” in Javascript they’re often called “static methods,” so JS uses the static keyword to create these methods.

Take a look at the get(id) method of the Customer classes. These methods are meant to be called on the class. They look up the corresponding customer in the database, and return a JS instance of the correct class. Find where this code is being used in the handlers and make sure you understand it.

## Part Four: Nunjucks
So far, we’ve used Express to render JSON or simple strings. In many cases, this might be all our backend does, and you’d have a dedicated front-end to parse JSON responses and create a UI.

However, it is possible for Express to template complete HTML pages, the way we did in Flask. To do this, we use the “Nunjucks” library, which is an implementation of the Jinja2 language in Javascript.

Take a quick look at the templates in /templates/. There’s nothing particular you need to do here yet, but you may find it useful to see how easy it is to template in JS.

## Part Five: Full Names
In several templates, we show customer names as {{ firstName }} {{ lastName }}. This is slightly tedious, that we have to write out both fields, but also might be inflexible for future data changes: what if we added a middle name field later? What if we added a prefix field for labels like “Ms.” or “Dr.”?

Add a function, fullName, to the Customer class. This should (for now) return first and last names joined by a space. Change the templates to refer directly to this.

## Part Six: Saving Reservations
We’ve already written a .save() method for customers. This either adds a new customer if they’re new, or updates the existing record if there are changes.

We don’t yet have a similar method for reservations, but we need one in order to save reservations. Write this.