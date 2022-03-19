from rest_framework import serializers
from .models import NoteTable

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = NoteTable
        fields = '__all__'
