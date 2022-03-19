from django.db import models

# Create your models here.
class NoteTable(models.Model):
    id = models.BigAutoField(primary_key = True)
    name = models.CharField(max_length=30)
    content = models.TextField(max_length=1000, null=True, blank=True)

    class Meta:
        db_table = 'note_table'
