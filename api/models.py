from django.db import models

# Create your models here.
class Note(models.Model):
    title=models.CharField(max_length=100,null=False,blank=False)
    description=models.TextField(null=False,blank=False)
    created=models.DateField(auto_now=True)

    def __str__(self):
        return f"{self.title}"
