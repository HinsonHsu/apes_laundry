# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-11-16 08:04
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aliyun_msg', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='phonecaptcha',
            name='is_sent',
            field=models.BooleanField(default=False),
        ),
    ]
