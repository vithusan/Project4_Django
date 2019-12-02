from django.db import models


class Post(models.Model):
    username = models.CharField(max_length=150)
    title = models.CharField(max_length=255)
    description = models.TextField()
    video_link = models.CharField(max_length=100, default='n/a')

    def __str__(self):
        return self.title


class Comment(models.Model):
    username = models.CharField(max_length=150)
    content = models.TextField()
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='comments')

    def __str__(self):
        return self.content


class Like(models.Model):
    isLike = models.BooleanField()
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='likes')

    def __str__(self):
        return f'{self.isLike}'
