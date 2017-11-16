# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-11-16 07:56
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PhoneCaptcha',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone', models.CharField(max_length=20)),
                ('code', models.CharField(max_length=10)),
                ('type', models.IntegerField()),
                ('update_date', models.DateTimeField(default=django.utils.timezone.now)),
            ],
        ),
    ]
