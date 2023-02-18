from api.models import Note
from django.contrib.auth.models import User
from rest_framework.serializers import ModelSerializer


class NoteSerializers(ModelSerializer):
    class Meta:
        model=Note
        fields="__all__"

class UserSerializers(ModelSerializer):
    class Meta:
        model=User
        fields="__all__"


