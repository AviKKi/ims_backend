from django.db import models
from users.models import CustomUser
from django.db import models
from datetime import datetime

# Create your models here.
class Resource(models.Model):
    name=models.CharField(blank=True,max_length=20)
    charge=models.CharField(blank=True,max_length=10)
    description = models.CharField(max_length=250, blank=True)
    photo_url = models.CharField(max_length=400, default="")
    
class Booking(models.Model):
    resource=models.ForeignKey(Resource,on_delete=models.CASCADE)
    user=models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    start_time=models.DateTimeField(default=datetime(2000,1,1))
    end_time=models.DateTimeField(default=datetime(2000,1,1))
    # """docstring forBooking."""
    #def __init__(self, arg):
    #    superBooking, self).__init__()
    #    self.arg = arg"""
