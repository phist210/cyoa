from django.shortcuts import render
from .models import StoryBoard
from rest_framework import viewsets
from .serializers import StoryBoardSerializer


class StoryBoardViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows abilities to be viewed or edited.
    """
    queryset = StoryBoard.objects.all().order_by('id')
    serializer_class = StoryBoardSerializer


def index(request):
    storyboard = StoryBoard.objects.all()
    return render(request, 'dj_story_app/base.html', {"storyboard": storyboard})
