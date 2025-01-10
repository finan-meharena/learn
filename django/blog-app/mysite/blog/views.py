from django.views.generic import ListView
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.core.mail import send_mail
from django.shortcuts import render, get_object_or_404
from django.http import Http404
from .models import Post
from .forms import EmailPostForm


# def post_list(request):
    
#     # Pagination with 3 posts per page
#     post_list = Post.published.all()
#     paginator = Paginator(object_list=post_list, per_page=3)
#     page_number = request.GET.get('page', 1)
    
#     try:
#         posts = paginator.page(page_number)
#     except (EmptyPage , PageNotAnInteger):
#         # If page_number is out of range get last page of result
#         posts = paginator.page(paginator.num_pages)
    
#     return render(request, 'blog/post/list.html', {'posts': posts})

def post_detail(request, year, month, day, slug):
    
    post = get_object_or_404(Post,
                             status=Post.Status.PUBLISHED, 
                             publish__year=year,
                             publish__month=month,
                             publish__day=day,
                             slug=slug)
    
    return render(request, 'blog/post/detail.html', {'post': post})

def post_share(request, post_id):
    # retrieve post by id
    post = get_object_or_404(Post, id=post_id, status=Post.Status.PUBLISHED)
    sent = False
    if request.method == 'POST':
        form = EmailPostForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            post_url = request.build_absolute_uri(post.get_absolute_url())
            subject = (
                f"{cd['name']} ({cd['email']}) "
                f"recommends you read {post.title}"
            )
            message = (
                f"Read {post.title} at {post_url}\n\n"
                f"{cd['name']}\'s comments: {cd['comments']}"
            )
            send_mail(
                subject,
                message, 
                from_email=None, 
                recipient_list=[cd['to']]
            )
            
            sent = True
    else:
        form = EmailPostForm()
    return render(
        request,
        'blog/post/share.html',
        {
            'post': post,
            'form': form,
            'sent': sent,
        }
        )

# class based views

class PostListView(ListView):
    queryset = Post.published.all()
    context_object_name = 'posts'
    paginate_by = 3
    template_name = 'blog/post/list.html'
    
