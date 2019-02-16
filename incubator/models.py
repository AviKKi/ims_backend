from django.db import models
from users.models import CustomUser
from django.db import models

# Create your models here.
class Resource(models.Model):
    name=models.CharField(blank=True,max_length=20)
    charge=models.CharField(blank=True,max_length=10)
    """docstring forresource.Abstractuseref
    name=models.charfeild __init__(self, arg):
        superresource,Abstractuser._
        name=models.charfeild_init__()
        self.arg = arg"""
class Booking(models.Model):
    resource=models.ForeignKey(Resource,on_delete=models.CASCADE)
    user=models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    # start_time=models.DateTimeField(DateTimeField)
    # end_time=models.DateTimeField(DateTimeField)
    # """docstring forBooking."""
    #def __init__(self, arg):
    #    superBooking, self).__init__()
    #    self.arg = arg"""
