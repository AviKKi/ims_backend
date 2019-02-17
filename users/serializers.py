from rest_framework import serializers
from . import models

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CustomUser
        fields = (
            'name',
            'product',
            'profile_url',
            'usertype',
            'bio',
            'locations',
            'markets',
            'contact',
            'education',
            'experience',
            'approved',
            'email',
            'username',
            )
