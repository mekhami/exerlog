from django.conf import settings
from django.db import models


# Create your models here.
class Workout(models.Model):
    name = models.CharField(max_length=256)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

class ExerciseDefinition(models.Model):
    name = models.CharField(max_length=256)
    notes = models.TextField()

class ExerciseInstance(models.Model):
    definition = models.ForeignKey(ExerciseDefinition, on_delete=models.CASCADE)
    weight = models.IntegerField()
    date = models.DateField(auto_now_add=True)
    notes = models.TextField()
