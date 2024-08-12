from django.urls import path
from . import views

app_name = 'users'

urlpatterns = [
    path('', views.users_home, name='users_home'),
    path('register/', views.register, name='register')
]

