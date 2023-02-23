from django.urls import path,re_path
from connect.views import index

urlpatterns=[
    re_path(r'.*',index)
]