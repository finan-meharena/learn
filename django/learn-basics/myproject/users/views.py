from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout


# Create your views here.

def users_home(request):
    return HttpResponse("Users list goes here..")


def register(request):
    form = UserCreationForm()
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            #form.save()
            login(request, form.save())
            return redirect("posts:list")
    else:
        form = UserCreationForm()
        
    return render(request, 'users/register.html', {"form" : form})


def login_view(request):
    if request.method == "POST":
        form = AuthenticationForm(data = request.POST)
        if form.is_valid():
           login(request, form.get_user())
           if "next" in request.POST:
               return redirect(request.POST.get("next"))
           else:
               return redirect("posts:list")
        
    else:
        form = AuthenticationForm()
    return render(request, 'users/login.html', {"form": form})

def logout_view(request):
    if request.method == "POST":
        logout(request)
        return redirect("posts:list")
    