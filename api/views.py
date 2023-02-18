from django.shortcuts import render
from api.models import Note
from django.contrib.auth.models import User
from api.serializers import NoteSerializers,UserSerializers
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.
@api_view(["GET"])
def index(request):
    notes=Note.objects.all()
    return Response(NoteSerializers(notes,many=True).data)

@api_view(["GET"])
def noteone(request,pk):
    note=Note.objects.filter(id=pk).first()
    if note:
        return Response(NoteSerializers(note,many=False).data)
    else:
        return Response({"Failed": "No Notes Available"})

@api_view(["PUT"])
def noteupdate(request,pk):
    data=request.data
    note=Note.objects.filter(id=pk).first()
    if note:
        serializers = NoteSerializers(instance=note, data=data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response({"Failed": "Invalid Note"})
    else:
        return Response({"Failed": "No Notes Available"})

@api_view(["POST"])
def notecreate(request):
    data=request.data
    note=Note.objects.create(
        title=data["title"],
        description=data['description']
    )
    serializers = NoteSerializers(note)
    return Response(serializers.data)

@api_view(["DELETE"])
def notedelete(request,pk):
    note=Note.objects.filter(id=pk).first()
    if note:
        note.delete()
        return Response({"Success": "Note deleted successfully"})
    else:
        return Response({"Failed": "No Notes Available"})

@api_view(["GET"])
def userget(request):
    users=User.objects.all()
    return Response(UserSerializers(users,many=True).data)



@api_view(["GET"])
def userone(request,pk):
    user=User.objects.filter(id=pk).first()
    if user:
        return Response(UserSerializers(user,many=False).data)
    else:
        return Response({"Failed": "No User Available with given id"})