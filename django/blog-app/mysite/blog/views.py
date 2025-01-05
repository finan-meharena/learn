from django.shortcuts import render, get_object_or_404
from django.http import Http404
from .models import Post
# Create your views here.

def post_list(request):
    posts = Post.published.all()
    
    return render(request, 'blog/post/list.html', {'posts': posts})

def post_detail(request, year, month, day, slug):
    
    post = get_object_or_404(Post,
                             status=Post.Status.PUBLISHED, 
                             publish__year=year,
                             publish__month=month,
                             publish__day=day,
                             slug=slug)
    
    return render(request, 'blog/post/detail.html', {'post': post})
    
    
    # try:
    #     post = Post.published.get(id=id)
    # except Post.DoesNotExist:
    #     raise Http404("NO Post Found")
    # return render(request, 'blog/post/detail.html', {'post': post})