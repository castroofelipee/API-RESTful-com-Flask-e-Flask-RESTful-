# app/resources/task_resource.py

from flask_restful import Resource, reqparse

tasks = []

class TaskResource(Resource):
    def get(self):
        return {'tasks': tasks}

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('title', type=str, required=True, help='Title cannot be blank')
        parser.add_argument('dueDate', type=str)  
        parser.add_argument('completed', type=bool, default=False) 
        args = parser.parse_args()

        task = {
            'id': len(tasks) + 1,
            'title': args['title'],
            'dueDate': args['dueDate'],  
            'completed': args['completed'] 
        }
        tasks.append(task)
        return {'task': task}, 201
