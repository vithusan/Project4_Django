from django.urls import re_path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('post', views.PostView)
router.register('comment', views.CommentView)
router.register('like', views.LikeView)

urlpatterns = [
    re_path('', include(router.urls))
]