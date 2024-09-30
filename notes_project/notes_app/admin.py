from django.contrib import admin
from .models import Note
# Register your models here.


class NotesAdmin(admin.ModelAdmin):
    list_display = [ 'title', 'category', 'created', 'update']
admin.site.register(Note,NotesAdmin)