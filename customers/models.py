# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.utils import timezone
# Create your models here.

class Captcha(models.Model):
    email = models.CharField(max_length=20, unique=True, null=True)
    code = models.CharField(max_length=20, unique=True, null=True)
    add_date = models.DateTimeField(default=timezone.now)

    def send_email(self):
        from django.core.mail import send_mail
        send_mail('注册', '验证码:'+self.code, '619179450@qq.com',
                    [self.email], fail_silently=False)
class PhoneCode(models.Model):
    phone = models.CharField(max_length=20, unique=True, null=False)
    code = models.CharField(max_length=20, unique=True, null=True)
    add_date = models.DateTimeField(default=timezone.now)