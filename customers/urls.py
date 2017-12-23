# -*- coding: utf-8 -*-
from django.conf.urls import url
import views

urlpatterns = [
    url(r'^index/$', views.index, name="index"),
    url(r'^code/$', views.code, name="code"),
    url(r'^login/$', views.login, name='customers_login'),
    url(r'^logout/$', views.logout, name='customer_logout'),
    url(r'^register/$', views.register, name='register'),
    url(r'^address/$', views.address, name='address'),
    url(r'^customer_address/$', views.customer_address, name='customer_address'),

    url(r'^my_login/$', views.my_login, name='my_test'),
    url(r'^test/$', views.test, name='test'),

    url(r'^coupon/$', views.coupon, name='coupon'),
    url(r'^recharge/$', views.recharge, name='recharge'),
    url(r'^certificate/$', views.certificate, name='certificate'),
]
