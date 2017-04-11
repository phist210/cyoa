import os

from django.core.wsgi import get_wsgi_application
from whitenoise.django import DjangoWhiteNoise

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "dj_story_project.settings")

application = get_wsgi_application()
application = DjangoWhiteNoise(application)
