# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-04-11 20:39
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='StoryBoard',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('storyline', models.TextField()),
                ('background_image', models.URLField()),
                ('dj_setup', models.CharField(max_length=20)),
            ],
        ),
    ]
