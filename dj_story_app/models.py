from django.db import models


# Create your models here.
class StoryBoard(models.Model):
    storyline = models.TextField()
    background_image = models.URLField()
    dj_setup = models.CharField(max_length=20)

    def __repr__(self):
        return '{}, [{}]'.format(self.storyline, self.dj_setup)
