from logging import debug
from flask import Flask,render_template
app=Flask(__name__)
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/TaskManager")
def Tm():
    return render_template("todo.html")
@app.route("/login")
def login():
    return render_template("login.html")
    
if __name__=="__main__":
    app.run(debug=True,port=5000)