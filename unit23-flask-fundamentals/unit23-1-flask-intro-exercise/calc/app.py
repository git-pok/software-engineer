from flask import Flask
from flask import request
from operations import add, sub, mult, div

app = Flask(__name__)

@app.route('/add')
def do_add():
    """
    Accesses flasks immutable object, request.args,
    to access the a and b values from the query string.
    Changes a and b into integer data types.
    Adds a and b with the imported function.
    Returns a string of the math answer.
    """
    # print(request.args.a) to see it exists
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    total = add(a, b)
    return f"<h1>{total}</h1>"

@app.route('/sub')
def subtract():
    """
    Accesses flasks immutable object, request.args,
    to access the a and b values from the query string.
    Changes a and b into integer data types.
    Subtracts b from a with the imported function.
    Returns a string of the math answer.
    """
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    total = sub(a, b)
    return f"<h1>{total}</h1>"

@app.route('/mult')
def multiply():
    """
    Accesses flasks immutable object, request.args,
    to access the a and b values from the query string.
    Changes a and b into integer data types.
    Multiplies a by b with the imported function.
    Returns a string of the math answer.
    """
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    total = mult(a, b)
    return f"<h1>{total}</h1>"

@app.route('/div')
def divide():
    """
    Accesses flasks immutable object, request.args,
    to access the a and b values from the query string.
    Changes a and b into integer data types.
    Divides a by b with the imported function.
    Returns a string of the math answer.
    """
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    total = round(div(a, b))
    return f"<h1>{total}</h1>"

# FURTHER STUDY
operators = {
    "add": add,
    "sub": sub,
    "mult": mult,
    "div": div,
}

@app.route('/math/<math_op>')
def do_math(math_op):
    """
    Uses a path variable to make route endpoint and view function dynamic.
    Accesses flasks immutable object, request.args,
    to access the a and b values from the query string.
    Changes a and b into integer data types.
    Accesses the routes endpoint corresponding dictionary value.
    The dictionary value is a math operation.
    Performs the math operation,
    and passes a and b in it as arguments.
    Returns a string of the math answer.
    """
    a = int(request.args.get("a"))
    b = int(request.args.get("b"))
    math_operation = operators.get(math_op, "Operation Doesn't Exist!")
    total = math_operation(a, b) 
    return f"<h1>{total}</h1>"


