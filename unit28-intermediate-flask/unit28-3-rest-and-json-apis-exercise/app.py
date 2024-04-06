# Flask app for Cupcakes
from flask import Flask, request, render_template, jsonify
from models import db, connect_db, Cupcake
from app_api_methods import create_cupcake, update_cupcake, delete_cupcake
from sys import argv

# flask app, instantiates app
app = Flask(__name__)

# test database and configurations
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_test'
# app.config['SQLALCHEMY_ECHO'] = False
# app.config['TESTING'] = True
# end of test database and configurations

# check if test command is used from command line
is_cmd_test = argv[0].find("unittest") != -1
# sqlalchemy database connection
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes_test' if is_cmd_test else "postgresql:///cupcakes"

# disable sqlalchemy track
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# enable sqlalchemy echo for terminal output when querying
app.config['SQLALCHEMY_ECHO'] = True
# connect the app to sqlalchemy
connect_db(app)
# debugger1
# import pdb
# pdb.set_trace()
# debugger2
# raise

@app.route('/')
def home():
    """renders home.html"""
    return render_template('home.html')

@app.route('/api/cupcakes')
def access_cupcakes():
    """repsonds with json of cupcakes in Postgres database"""
    # sqlalchemy query
    all_cupcakes = db.session.query(Cupcake)
    all_cupcakes_list = [cc.serialize() for cc in all_cupcakes]

    return jsonify(cupcakes=all_cupcakes_list)

@app.route('/api/cupcakes/<int:cupcake_id>')
def get_cupcake(cupcake_id):
    """repsonds with json of cupcake in Postgres database"""
    # sqlalchemy query
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    cupcake_dict = dict(cupcake.serialize())

    return jsonify(cupcake=cupcake_dict)

@app.route('/api/cupcakes', methods=['POST'])
def create_cupcakes():
    """
    creates new cupcake from json data
    returns json and 201 status code
    """
    # sqlalchemy query
    flavorf = request.json.get("flavor")
    sizef = request.json.get("size")
    ratingf = request.json.get("rating")
    imagef = request.json.get("image")

    new_cupcake = create_cupcake(flavorf, sizef, ratingf, imagef)

    cupcake_jsonify = jsonify(cupcake=new_cupcake.serialize())

    return (cupcake_jsonify, 201)

@app.route('/api/cupcakes/<int:cupcake_id>', methods=['PATCH'])
def cupcake_update(cupcake_id):
    """updates Postgres database cupcake"""
    # sqlalchemy query
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    flavorf = request.json.get("flavor")
    sizef = request.json.get("size")
    ratingf = request.json.get("rating")
    imagef = request.json.get("image", cupcake.image)

    updates = update_cupcake(flavorf, sizef, ratingf, imagef, cupcake)

    cupcake_jsonify = jsonify(cupcake=updates.serialize())

    return cupcake_jsonify

@app.route('/api/cupcakes/<int:cupcake_id>', methods=['DELETE'])
def cupcake_delete(cupcake_id):
    """deletes Postgres database cupcake"""
    # sqlalchemy query
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    delete = delete_cupcake(cupcake)
    
    return jsonify(message=delete)
