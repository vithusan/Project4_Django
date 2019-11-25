from django.db import models


class Post(models.Model):
    username = models.CharField(max_length=100)
    title = models.TextField()
    description = models.TextField()
    video_link = models.TextField()

    def __str__(self):
        return self.title


class Comment(models.Model):
    username = models.CharField(max_length=100)
    text = models.TextField()

    def __str__(self):
        return self.username


class Like(models.Model):
    isLike = models.BooleanField(default=False)

    def __str__(self):
        return self.isLike
