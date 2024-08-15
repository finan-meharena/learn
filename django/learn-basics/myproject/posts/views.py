from django.shortcuts import render
from .models import Post
from django.contrib.auth.decorators import login_required


# Create your views here.

def posts_list(request):
    posts = Post.objects.all().order_by('-date')
    return render(request, 'posts/posts_list.html', {'posts' : posts} )

def post_page(request, slug):
    post = Post.objects.get(slug=slug)
    return render(request, 'posts/post_page.html',{'post': post})

@login_required(login_url="/users/login/")  # checks if user is logged in, if not, redirect. 
def new_post(request):
    return render(request, 'posts/new-post.html')

    