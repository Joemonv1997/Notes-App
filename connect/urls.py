from django.urls import path
from connect.views import index
urlpatterns=[
    path("",index,name="main html")
]