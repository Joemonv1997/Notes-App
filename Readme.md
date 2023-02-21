# Notes App

This project is developed using
- Django Rest Framework
- React

How to run this project

Backend Configuration
```shell
python3 -m venv venv
venv/Scripts/activate
pip install -r requiremets.txt
python manage.py makemigrations
python manage.py migrate

```

Frontend Configuration
```shell
cd frontend
npm install
npm run build
```

```shell
python manage.py runserver
```

It will open a page `localhost:5000` that will be the application