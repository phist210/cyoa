from rest_framework import serializers
from .models import StoryBoard


class StoryBoardSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = StoryBoard
        fields = ('id', 'storyline', 'background_image', 'dj_setup')
