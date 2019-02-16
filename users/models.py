from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    MENTOR = "M"
    INVESTOR = "I"
    ADMIN = "A"
    STARTUP = "S"
    user_type_choices = (
        (MENTOR, "Mentor"),
        (INVESTOR, "Investor"),
        (ADMIN, "Admin"),
        (STARTUP, "Startup"),
    )
    name = models.CharField(blank=True, max_length=255)
    profile_url=models.CharField(blank=True,max_length=200)
    usertype = models.CharField(max_length=1, choices=user_type_choices, default=STARTUP)
    bio=models.CharField(blank=True,max_length=100)
    contact=models.CharField(blank=True,max_length=15,)
    experience=models.CharField(blank=True,max_length=100)
    education=models.CharField(blank=True,max_length=200)
    approved=models.BooleanField(default=False)
    # approved_at=models.DateTimeField(blank=True)
    def __str__(self):
        return self.email
