from django.db import models
from users.models import CustomUser
from datetime import datetime
# Create your models here.
class Application(models.Model):
    user=models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    document=models.CharField(blank=True,max_length=200 )
    meeting_date=models.DateTimeField(default=datetime(2000,1,1))
    approved=models.BooleanField(default=False)
    approved_at=models.DateTimeField(default=datetime(2000,1,1))
