# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'users'

def send():
    from django.core.mail import send_mail
    send_mail('Subject here', 'Here is the message.', '619179450@qq.com',
              ['1451007480@qq.com'], fail_silently=False)
