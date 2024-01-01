from flask import Flask, render_template
from flask_restful import Api
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)

from app.resources.task_resources import TaskResource

api.add_resource(TaskResource, '/tasks')

@app.route('/')
def index():
    return render_template('index.html')