from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def users_home(request):
    return HttpResponse("Users list goes here..")


def register(request):
    return render(request, 'users/register.html')