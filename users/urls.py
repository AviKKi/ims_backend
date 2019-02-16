from django.urls import include, path

from . import views

urlpatterns = [

    path('list', views.UserListView.as_view()),
    path('profile', views.UserReadUpdate.as_view()),

]
