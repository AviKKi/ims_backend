from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
import json
from . import models
from . import serializers

class UserListView(generics.ListCreateAPIView):
    queryset = models.CustomUser.objects.all()
    serializer_class = serializers.UserSerializer

class UserReadUpdate(APIView):
    def get(self,request):
        username = request.GET.get("username")
        if not username:
            user = request.user
        else:
            user = models.CustomUser.objects.filter(username=username)
            if not user:
                return Response("{'msg':'Invalid username'}")
            user = user.first()
        res = serializers.UserSerializer(user).data
        return Response(res)

    def post(self,request):
        return Response("apple")
