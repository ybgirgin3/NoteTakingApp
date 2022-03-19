# django 
from django.shortcuts import render

# rest_framework
from rest_framework import viewsets

# local
from .models import NoteTable
from .serializers import NoteSerializer

# Create your views here.

class ListingAPI(viewsets.ModelViewSet):
    queryset = NoteTable.objects.all()
    serializer_class = NoteSerializer


