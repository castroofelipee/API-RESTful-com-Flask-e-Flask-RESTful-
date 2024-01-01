# Pinn Task Manager 
- O __Pinn Task Manager__ é uma aplicação de gerenciamento de tarefas criada para auxiliar no gerenciamento de tarefas internas da comunidade. 

- A aplicação oferece uma interface web interativa e uma __API RESTful__ para proporcionar uma experiẽncia completa aos usuários na organização das tarefas diárias. 

![png](images/image.png)

# Configuração 
- É necessário configurar o arquivo ```.env``` com as variáveis necessárias. 

- A aplicação utiliza o ```Flask-RESTful``` e um banco de dados ```PostgreSQL``` para armazenar as tarefas. 

### Exemplo
```js
FLASK_APP=run.py
FLASK_ENV=development
SECRET_KEY=suachave-secreta
DATABASE_URI=seubanco://usuario:senha@localhost/nomedobanco
```

# Interação com a API 
- A __API RESTful__ está disponível em [Link](http://localhost:5000/api/tasks)

- Para ter a consulta com essa API é importante ter certeza de entrar na rota definida. 

![png](images/image_1.png)


# API 
- A API RESTful utiliza Flask-RESTful e oferece as seguintes operações:

- __GET /api/tasks__: Obtém a lista de tarefas
    - Parâmetros de Consulta:
        - Nenhum

    - __Exemplo de Reposta__

    ```json
    {
  "tasks": [
    {"id": 1, "title": "Completar documentação", "dueDate": "2022-12-31", "completed": false},
    {"id": 2, "title": "Implementar tema escuro", "dueDate": null, "completed": true}
  ]
    }
    ```

# Modelo de dados 
-  A aplicação utiliza um modelo simples para representar tarefas 
```python
class Task:
    def __init__(self, id, title, due_date, completed):
        self.id = id
        self.title = title
        self.due_date = due_date
        self.completed = completed
```

# Contruibuição 
- Caso queira contruir com o desenvolvimento dessa aplicação, por favor, se sinta a vontade e não deixe de entrar em contato para contruibuirmos juntos com o desenvolvimento. 
