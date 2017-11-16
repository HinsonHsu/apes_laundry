# -*- coding: utf-8 -*-
from django.conf.urls import url
import views

urlpatterns = [
    url(r'^index/$', views.index, name="index"),
    url(r'^code/$', views.code, name="code"),
    url(r'^login/$', views.login, name='customers_login'),
    url(r'^logout/$', views.logout, name='customer_logout'),
    url(r'^register/$', views.register, name='register'),
    url(r'^test/$', views.test, name='test'),
]
