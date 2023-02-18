from django.urls import path
from api import views
urlpatterns=[
    path("notes",views.index,name="notes"),
    path("users",views.userget,name="User"),
    path("user/<str:pk>",views.userone,name="Userone"),
    path("note/create",views.notecreate,name="CreateNote"),
    path("note/<str:pk>",views.noteone,name="Noteone"),
    path("noteupdate/<str:pk>",views.noteupdate,name="Noteupdate"),
    path("notedelete/<str:pk>",views.notedelete,name="DeleteNote"),
]