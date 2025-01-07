from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.shortcuts import render, get_object_or_404
from django.http import Http404
from .models import Post
# Create your views here.

def post_list(request):
    
    # Pagination with 3 posts per page
    post_list = Post.published.all()
    paginator = Paginator(object_list=post_list, per_page=3)
    page_number = request.GET.get('page', 1)
    
    try:
        posts = paginator.page(page_number)
    except (EmptyPage , PageNotAnInteger):
        # If page_number is out of range get last page of result
        posts = paginator.page(paginator.num_pages)
    
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